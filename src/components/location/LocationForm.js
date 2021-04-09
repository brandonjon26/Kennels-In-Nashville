import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addLocation } from '../../modules/LocationManager';
import './LocationForm.css';
import { getAllEmployees } from '../../modules/EmployeeManager';
import { Link } from "react-router-dom";

export const LocationForm = () => {

    const [location, setLocation] = useState({
        name: "",
        breed: "",
        locationId: 0,
        customerId: 0
    });

    const [isLoading, setIsLoading] = useState(false);

    const [employees, setEmployees] = useState([]);

    const history = useHistory();


    const handleControlledInputChange = (event) => {
    
        const newLocation = { ...location }
        let selectedVal = event.target.value
        
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
    
        newLocation[event.target.id] = selectedVal
    
        setLocation(newLocation)
    }

    useEffect(() => {
        
        getAllEmployees()
            .then(employeesFromAPI => {
                setEmployees(employeesFromAPI)
            });
    }, []);


    const handleClickSaveLocation = (event) => {
        event.preventDefault() 

        const employeeId = location.employeeId

        if (employeeId === 0) {
            window.alert("Please select an employee")
        } else {
           
            addLocation(location)
                .then(() => history.push("/locations"))
        }
    }

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location address" value={location.address} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employee">Assign Employee: </label>
                    <select value={location.employeeId} name="employeeId" id="employeeId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select an Employee</option>
                        {employees.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <Link to={`/locations/`}>
                <button>Back</button>
            </Link>
            <button className="btn btn-primary"
                onClick={handleClickSaveLocation}>
                Save Location
          </button>
        </form>
    )
};