import React from 'react';
import "./Animal.css";
import { Link } from "react-router-dom";

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="animals">
          <div className="animal">
            <picture>
              <img src={require('./dog.svg')} alt="My Dog" />
            </picture>
            <h3>Name: <span className="card-petname">
              {animal.name}
            </span></h3>
            <p>Breed: {animal.breed}</p>
            <Link to={`/animals/${animal.id}`}>
              <button>Details</button>
            </Link>
            <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
          </div>
        </div>
      </div>
    </div>
  );
}