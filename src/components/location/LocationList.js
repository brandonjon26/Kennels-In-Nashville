import React, { useState, useEffect } from "react";
import { LocationCard } from "./LocationCard";
import { getAllLocations, getLocationById, deleteLocation } from "../../modules/LocationManager";
import { useHistory } from 'react-router';

export const LocationList = () => {
    const [locations, setLocations] = useState([]);

    let history = useHistory();

    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    };

    const handleDeleteLocation = id => {
        deleteLocation(id)
            .then(() => getAllLocations().then(setLocations));
    };

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <div className="container-cards">
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/locations/create") }}>
                    Open New Location
                </button>
            </section>
            {locations.map(location => <LocationCard
                key={location.id}
                location={location}
                handleDeleteLocation={handleDeleteLocation}
            />)}
        </div>
    );
};