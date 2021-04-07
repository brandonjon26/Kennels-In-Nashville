import React, { useState, useEffect } from 'react';
import { getLocationById, deleteLocation } from '../../modules/LocationManager';
import './LocationDetail.css';
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const LocationDetail = () => {
    const [location, setLocation] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { locationId } = useParams();
    const history = useHistory();

    useEffect(() => {
        //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
        console.log("useEffect", locationId)
        getLocationById(locationId)
            .then(location => {
                setLocation({
                    name: location.name,
                    address: location.address
                });
                setIsLoading(false);
            });
    }, [locationId]);

    const handleDelete = () => {
        setIsLoading(true);
        deleteLocation(locationId).then(() =>
          history.push("/locations")
        );
      };

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__breed">{location.address}</div>
            {/* What's up with the question mark???? See below.*/}
            <div className="location__location">Location: {location.address?.name}</div>
            <div className="location__owner">Location: {location.location?.name}</div>
            <Link to={`/locations/`}>
                <button>Back</button>
            </Link>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Discharge
            </button>
        </section>
    );
}