import React, { useState, useEffect } from 'react';
import { getEmployeeById, deleteEmployee } from '../../modules/EmployeeManager';
import './EmployeeDetail.css';
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const EmployeeDetail = () => {
    const [employee, setEmployee] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { employeeId } = useParams();
    const history = useHistory();

    useEffect(() => {
        //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
        console.log("useEffect", employeeId)
        getEmployeeById(employeeId)
            .then(employee => {
                setEmployee(employee);
                setIsLoading(false);
            });
    }, [employeeId]);

    const handleDelete = () => {
        setIsLoading(true);
        deleteEmployee(employeeId).then(() =>
          history.push("/employees")
        );
      };

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__breed">Address: {employee.address}</div>
            {/* What's up with the question mark???? See below.*/}
            <div className="employee__location">Location: {employee.location?.name}</div>
            <Link to={`/employees/`}>
                <button>Back</button>
            </Link>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Discharge
            </button>
        </section>
    );
}