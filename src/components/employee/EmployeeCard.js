import React from "react";
import "./Employee.css";

// created employee card to represent employees
export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    return (
      <div className="card">
        <div className="card-content">
            <div className="employee">
                <div className="employees">
                    <h3>Name: <span className="card-employeename">
                        {employee.name}
                    </span></h3>
                    <p>Address: {employee.address}</p>
                    <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Discharge</button>
                </div>
            </div>
        </div>
      </div>
    );
  }