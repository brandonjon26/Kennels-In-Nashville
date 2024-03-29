const remoteURL = "http://localhost:5002"

export const getCustomerById = (id) => {
  return fetch(`${remoteURL}/customers/${id}?_expand=animal&_expand=location`)
    .then(res => res.json())
}

export const getAllCustomers = () => {
  return fetch(`${remoteURL}/customers`)
    .then(result => result.json())
}

export const deleteCustomer = (id) => {
  return fetch(`${remoteURL}/customers/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const updateCustomer = (editedCustomer) => {
  return fetch(`${remoteURL}/customers/${editedCustomer.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedCustomer)
  }).then(data => data.json());
}