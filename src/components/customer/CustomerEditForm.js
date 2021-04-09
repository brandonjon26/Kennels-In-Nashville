import React, { useState, useEffect } from "react";
import { updateCustomer, getCustomerById } from "../../modules/CustomerManager";
import "./CustomerForm.css";
import { useHistory, useParams, Link } from "react-router-dom";

export const CustomerEditForm = () => {
  const [customer, setCustomer] = useState({ name: "", address: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { customerId } = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...customer };
    stateToChange[evt.target.id] = evt.target.value;
    setCustomer(stateToChange);
  };

  const updateExistingCustomer = evt => {
    evt.preventDefault()
    setIsLoading(true);

    const editedCustomer = {
      id: customerId,
      name: customer.name,
      address: customer.address,
      email: customer.email,
      animalId: customer.animalId,
      locationId: customer.locationId
    };

    updateCustomer(editedCustomer)
      .then(() => history.push("/customers")
      )
  }

  useEffect(() => {
    getCustomerById(customerId)
      .then(customer => {
        setCustomer(customer);
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
              value={customer.name}
            />
            <label htmlFor="name">Customer name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={customer.address}
            />
            <label htmlFor="address">Address</label>
            
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="email"
              value={customer.email}
            />
            <label htmlFor="address">Email</label>
          </div>
          <div className="alignRight">
            <Link to={`/customers/`}>
              <button>Back</button>
            </Link>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingCustomer}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}