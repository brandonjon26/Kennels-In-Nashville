import React, { useState, useEffect } from 'react';
import { getCustomerById, deleteCustomer } from '../../modules/CustomerManager';
import './CustomerDetail.css';
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const CustomerDetail = () => {
    const [customer, setCustomer] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { customerId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", customerId)
        getCustomerById(customerId)
            .then(customer => {
                setCustomer(customer);
                setIsLoading(false);
            });
    }, [customerId]);

    const handleDelete = () => {
        setIsLoading(true);
        deleteCustomer(customerId).then(() =>
          history.push("/customers")
        );
      };

    return (
        <section className="customer">
            <h3 className="customer__name">{customer.name}</h3>
            <div className="customer__address">Address: {customer.address}</div>
            <div className="customer__animal">Pet: {customer.animal?.name}</div>
            <div className="customer__location">Location of Pet: {customer.location?.name}</div>
            <Link to={`/customers/`}>
                <button>Back</button>
            </Link>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Ban Customer
            </button>
        </section>
    );
}