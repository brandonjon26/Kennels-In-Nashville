const remoteURL = "http://localhost:5002"

export const getCustomerById = (id) => {
    return fetch(`${remoteURL}/customers/${id}?_expand=location&_expand=animal`)
        .then(res => res.json())
}

export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
        .then(result => result.json())
}