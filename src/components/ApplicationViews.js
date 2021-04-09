import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { AnimalList } from "./animal/AnimalList";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationList } from "./location/LocationList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { CustomerDetail } from "./customer/CustomerDetail";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { LocationDetail } from "./location/LocationDetail";
import { AnimalForm } from "./animal/AnimalForm";
import { EmployeeForm } from "./employee/EmployeeForm";
import { LocationForm } from "./location/LocationForm";
import { AnimalEditForm } from "./animal/AnimalEditForm";
import { EmployeeEditForm } from "./employee/EmployeeEditForm";

export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {

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
                    {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
                </article>
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route exact path="/animals/create">
                <AnimalForm />
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
                <AnimalEditForm />
            </Route>

            <Route path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>

            <Route exact path="/employees">
                <h2>Employees</h2>
                <article className="employees">
                    <EmployeeList />
                </article>
            </Route>


            <Route exact path="/employees/:employeeId(\d+)">
                <EmployeeDetail />
            </Route>

            <Route exact path="/employees/create">
                <EmployeeForm />
            </Route>

            <Route path="/employees/:employeeId(\d+)/edit">
                <EmployeeEditForm />
            </Route>

            <Route exact path="/customers">
                <h2>Customers</h2>
                <article className="customers">
                    <CustomerList />
                </article>
            </Route>

            <Route exact path="/customers/:customerId(\d+)">
                <CustomerDetail />
            </Route>

            <Route exact path="/locations">
                <h2>Locations</h2>
                <article className="locations">
                    <LocationList />
                </article>
            </Route>

            <Route exact path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            <Route exact path="/locations/create">
                <LocationForm />
            </Route>
        </>
    )
}