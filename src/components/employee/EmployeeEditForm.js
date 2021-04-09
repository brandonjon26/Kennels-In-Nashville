import React, { useState, useEffect } from "react"
import { updateEmployee, getEmployeeById } from "../../modules/EmployeeManager"
import "./EmployeeForm.css";
import { useHistory, useParams, Link } from "react-router-dom";

export const EmployeeEditForm = () => {
  const [employee, setEmployee] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { employeeId } = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: employeeId,
      name: employee.name,
      address: employee.address,
      locationId: employee.locationId,
    };

    updateEmployee(editedEmployee)
      .then(() => history.push("/a=employees")
      )
  }

  useEffect(() => {
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee(employee);
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