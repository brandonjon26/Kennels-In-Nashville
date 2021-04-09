import React, { useState, useEffect } from "react";
import { updateLocation, getLocationById } from "../../modules/LocationManager";
import "./LocationForm.css";
import { useHistory, useParams, Link } from "react-router-dom";

export const LocationEditForm = () => {
  const [location, setLocation] = useState({ name: "", address: "", employee: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { locationId } = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  const updateExistingLocation = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedLocation = {
      id: locationId,
      name: location.name,
      address: location.address,
      locationId: location.employeesId
    };

    updateLocation(editedLocation)
      .then(() => history.push("/locations")
      )
  }

  useEffect(() => {
    getLocationById(locationId)
      .then(location => {
        setLocation(location);
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
              value={location.name}
            />
            <label htmlFor="name">Location name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={location.address}
            />
            <label htmlFor="address">Address</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="employee"
              value={location.employeeId}
            />
            <label htmlFor="employee">Employees</label>
          </div>
          <div className="alignRight">
            <Link to={`/locations/`}>
              <button>Back</button>
            </Link>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingLocation}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}