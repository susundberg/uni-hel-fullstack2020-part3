import axios from 'axios'

const baseUrl = "/api/persons"

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(response => response.data)
}

const create = newObject => {
    const req = axios.post(baseUrl, newObject)
    return req.then(response => response.data)
}

const update = (id, newObject) => {
    const req =  axios.put(`${baseUrl}/${id}`, newObject)
    return req.then(response => response.data)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}


export default { getAll, create, remove, update }

