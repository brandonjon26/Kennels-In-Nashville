import React from "react";
import "./Customer.css";

// created card representing customers
export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
    return (
      <div className="card">
        <div className="card-content">
            <div className="customer">
                <div className="customers">
                    <h3>Name: <span className="card-customername">
                        {customer.name}
                    </span></h3>
                    <p>Address: {customer.address}</p>
                    <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Discharge</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
                    // <picture>
                    // <   img src={require('./dog.svg')} alt="My Dog" />
                    // </picture>