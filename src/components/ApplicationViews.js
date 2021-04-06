import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { LocationCard } from "./location/LocationCard";
import { AnimalList } from "./animal/AnimalList";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <h2>Animals</h2>
                <article className="animals">
                <AnimalList />
                </article>
            </Route>

            <Route path="/employees">
                <h2>Employees</h2>
                <article className="employees">
                    <EmployeeList />
                </article>
            </Route>

            <Route path="/locations">
                <h2>Locations</h2>
                <article className="locations">
                    <LocationCard />
                    <LocationCard />
                </article>
            </Route>

            <Route path="/customers">
                <h2>Customers</h2>
                <article className="customers">
                    <CustomerList />
                </article>
            </Route>
        </>
    )
}