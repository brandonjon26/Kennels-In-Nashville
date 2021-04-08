import React, { useState, useEffect } from 'react';
import { getAnimalById, deleteAnimal } from '../../modules/AnimalManager';
import './AnimalDetail.css';
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { firstLetterCase } from '../../modules/helpers';

export const AnimalDetail = () => {
    const [animal, setAnimal] = useState({"name": "animal"});
    const [isLoading, setIsLoading] = useState(true);

    const { animalId } = useParams();
    const history = useHistory();

    useEffect(() => {
        //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
        console.log("useEffect", animalId)
        getAnimalById(animalId)
            .then(animal => {
                setAnimal(animal);
                setIsLoading(false);
            });
    }, [animalId]);

    const handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        setIsLoading(true);
        deleteAnimal(animalId).then(() =>
            history.push("/animals")
        );
    };

    return (
        <section className="animal">
            <h3 className="animal__name">{firstLetterCase(animal.name)}</h3>
            <div className="animal__breed">Breed: {animal.breed}</div>
            {/* What's up with the question mark???? See below.*/}
            <div className="animal__location">Location: {animal.location?.name}</div>
            <div className="animal__owner">Customer: {animal.customer?.name}</div>
            <Link to={`/animals/`}>
                <button>Back</button>
            </Link>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Discharge
            </button>
        </section>
    );
}