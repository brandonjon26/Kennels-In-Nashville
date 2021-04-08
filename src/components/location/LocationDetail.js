import React, { useState, useEffect } from 'react';
import { getLocationById, deleteLocation } from '../../modules/LocationManager';
import { getAllEmployees } from '../../modules/EmployeeManager';
import './LocationDetail.css';
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const LocationDetail = () => {
    const [location, setLocation] = useState({employees: []});
    // const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { locationId } = useParams();
    // const { employeeId } = useParams();
    const history = useHistory();

    useEffect(() => {
        //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
        console.log("useEffect", locationId)
        getLocationById(locationId)
            .then(location => {
                setLocation(location);
                setIsLoading(false);
            });
    }, [locationId]);

    const handleDelete = () => {
        setIsLoading(true);
        deleteLocation(locationId).then(() =>
          history.push("/locations")
        );
      };

    //   useEffect(() => {
    //     console.log("useEffect", employeeId)
    //     getAllEmployees()
    //         .then(allEmployees => {
    //             console.log(allEmployees);
    //             setEmployees(allEmployees);
    //             setIsLoading(false);
    //         });
    // }, [employeeId]);

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            {/* What's up with the question mark???? See below.*/}
            <div className="location__employee">Employees: 
                {/* {employees.filter(
                employee => location.id === employee.locationId).map(employee => employee.name)} */}
                
                {location.employees.map(employee => employee.name).join(", ")}
            
            </div>
            <Link to={`/locations/`}>
                <button>Back</button>
            </Link>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Discharge
            </button>
        </section>
    );
}