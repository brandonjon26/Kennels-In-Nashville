import React from "react"
import "./Animal.css"

// animal card representing animals
export const AnimalCard = ({ animal }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">
            {animal.name}
          </span></h3>
          <p>Breed: {animal.breed}</p>
        </div>
      </div>
    );
  }