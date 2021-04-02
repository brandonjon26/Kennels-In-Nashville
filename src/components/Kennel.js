import React from "react"
import "./Kennel.css";
import { AnimalCard } from "./animal/AnimalCard";
import { CustomerCard } from "./customer/Customer";
import { EmployeeCard } from "./employee/Employee";
import { LocationCard } from "./location/Location";
import { PropsAndState } from "./PropsAndState";

// plug in cards to JSX to display on the DOM
export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <PropsAndState yourName="Brandon" />

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>
    </>
)