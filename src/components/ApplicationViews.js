import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { LocationCard } from "./location/LocationCard";
import { AnimalList } from "./animal/AnimalList";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";
import { AnimalDetail } from "./animal/AnimalDetail";

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                <h2>Animals</h2>
                <article className="animals">
                    <AnimalList />
                </article>
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route exact path="/employees">
                <h2>Employees</h2>
                <article className="employees">
                    <EmployeeList />
                </article>
            </Route>

            <Route exact path="/locations">
                <h2>Locations</h2>
                <article className="locations">
                    <LocationCard />
                    <LocationCard />
                </article>
            </Route>

            <Route exact path="/customers">
                <h2>Customers</h2>
                <article className="customers">
                    <CustomerList />
                </article>
            </Route>
        </>
    )
}