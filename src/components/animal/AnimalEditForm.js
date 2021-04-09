import React, { useState, useEffect } from "react";
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager";
import { getAllLocations } from "../../modules/LocationManager";
import { getAllCustomers } from "../../modules/CustomerManager";
import "./AnimalForm.css";
import { useHistory, useParams, Link } from "react-router-dom";

export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [locations, setLocations] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { animalId } = useParams();
  const { locationId } = useParams();
  const { customerId } = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: animalId,
      id2: locationId,
      id3: customerId,
      name: animal.name,
      breed: animal.breed,
      locationId: animal.locationId,
      customerId: animal.customerId
    };

    updateAnimal(editedAnimal)
      .then(() => history.push("/animals")
      )
  }

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getAllLocations()
      .then(locationsFromAPI => {
        setLocations(locationsFromAPI);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getAllCustomers()
      .then(customersFromAPI => {
        setCustomers(customersFromAPI);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>

            <select 
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="locationId"
              value={animal.locationId}
              >
              {locations.map(l =>
                <option 
                key={l.id}
                value={l.id}>{l.name}
                </option>
              )}
            </select>
            <label htmlFor="locationId">Select-A-Location</label>

            <select 
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="customerId"
              value={animal.customerId}
              >
              {customers.map(c =>
                <option 
                key={c.id}
                value={c.id}>{c.name}
                </option>
              )}
            </select>
            <label htmlFor="customerId">Select-A-Customer</label>

          </div>
          <div className="alignRight">
            <Link to={`/animals/`}>
              <button>Back</button>
            </Link>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}