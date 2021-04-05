import React from "react";
import "./Customer.css";

// created card representing customers
export const CustomerCard = ({ customer }) => (
    <section className="customer">
        <h3 className="customer_name">{customer.name}</h3>
        <div className="customer_address">{customer.address}</div>
    </section>
)