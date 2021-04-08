import React, { useState, useEffect } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { getAllEmployees, getEmployeeById, deleteEmployee } from "../../modules/EmployeeManager";
import { useHistory } from 'react-router';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    let history = useHistory();

    const getEmployees = () => {
        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        });
    };

    const handleDeleteEmployee = id => {
        deleteEmployee(id)
            .then(() => getAllEmployees().then(setEmployees));
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div className="container-cards">
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/employees/create") }}>
                    Hire Employee
                </button>
            </section>
            {employees.map(employee => <EmployeeCard
                key={employee.id}
                employee={employee}
                handleDeleteEmployee={handleDeleteEmployee}
            />)}
        </div>
    );
};