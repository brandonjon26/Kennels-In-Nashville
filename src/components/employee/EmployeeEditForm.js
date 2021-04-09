import React, { useState, useEffect } from "react";
import { updateEmployee, getEmployeeById } from "../../modules/EmployeeManager";
import { getAllLocations } from "../../modules/LocationManager";
import "./EmployeeForm.css";
import { useHistory, useParams, Link } from "react-router-dom";

export const EmployeeEditForm = () => {
  const [employee, setEmployee] = useState({ name: "", address: "" });
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { employeeId } = useParams();
  const { locationId } = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    const editedEmployee = {
      id: employeeId,
      id2: locationId,
      name: employee.name,
      address: employee.address,
      locationId: employee.locationId,
    };

    updateEmployee(editedEmployee)
      .then(() => history.push("/employees")
      )
  }

  useEffect(() => {
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee(employee);
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
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={employee.address}
            />
            <label htmlFor="address">Address</label>

            <select 
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="locationId"
              value={employee.locationId}
              >
              {locations.map(l =>
                <option 
                key={l.id}
                value={l.id}>{l.name}
                </option>
              )}
            </select>
            <label htmlFor="locationId">Select-A-Location</label>

          </div>
          <div className="alignRight">
            <Link to={`/employees/`}>
              <button>Back</button>
            </Link>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}