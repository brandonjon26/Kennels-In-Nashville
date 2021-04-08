import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addEmployee } from '../../modules/EmployeeManager';
import './EmployeeForm.css';
import { getAllLocations } from "../../modules/LocationManager";
import { Link } from "react-router-dom";

export const EmployeeForm = () => {

	const [employee, setEmployee] = useState({
		name: "",
		breed: "",
		locationId: 0,
	});

	const [isLoading, setIsLoading] = useState(false);

	const [locations, setLocations] = useState([]);

	const history = useHistory();

	const handleControlledInputChange = (event) => {
		const newEmployee = { ...employee }
		let selectedVal = event.target.value
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		newEmployee[event.target.id] = selectedVal
		setEmployee(newEmployee)
	}

    useEffect(() => {
		getAllLocations()
            .then(locationsFromAPI => {
                setLocations(locationsFromAPI)
            });
	}, []);


	const handleClickSaveEmployee = (event) => {
		event.preventDefault() 

		const locationId = employee.locationId

		if (locationId === 0) {
			window.alert("Please select a location")
		} else {
			addEmployee(employee)
				.then(() => history.push("/employees"))
		}
	}

	return (
		<form className="employeeForm">
			<h2 className="employeeForm__title">New Employee</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Employee name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">Employee: address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee address" value={employee.address} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <Link to={`/employees/`}>
                <button>Back</button>
            </Link>
			<button className="btn btn-primary"
				onClick={handleClickSaveEmployee}>
				Save Employee
          </button>
		</form>
	)
};