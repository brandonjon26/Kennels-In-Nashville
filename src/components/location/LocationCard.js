import React from "react";
import "./Location.css";
import { Link } from "react-router-dom"

export const LocationCard = ({ location, handleDeleteLocation }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="location">
          <div className="locations">
            <h3>Name: <span className="card-locationname">
              {location.name}
            </span></h3>
            <p>Address: {location.address}</p>
            <Link to={`/locations/${location.id}`}>
              <button>Details</button>
            </Link>
            <Link to={`/locations/${location.id}/edit`}>
              <button type="button">Edit</button>
            </Link>
            <button type="button" onClick={() => handleDeleteLocation(location.id)}>Close This Location</button>
          </div>
        </div>
      </div>
    </div>
  );
}