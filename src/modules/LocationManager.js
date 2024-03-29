const remoteURL = "http://localhost:5002"

export const getLocationById = (id) => {
  return fetch(`${remoteURL}/locations/${id}?_embed=employees`)
    .then(res => res.json())
}

export const getAllLocations = () => {
  return fetch(`${remoteURL}/locations`)
    .then(result => result.json())
}

export const deleteLocation = (id) => {
  return fetch(`${remoteURL}/locations/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const addLocation = (newLocation) => {
  return fetch(`${remoteURL}/locations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newLocation)
  }).then(response => response.json())
}

export const updateLocation = (editedLocation) => {
  return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedLocation)
  }).then(data => data.json());
}