import axios from "../api/axios";

const getAll = () => {
    return axios.get('/amounts')
        .then(response => response.data);
}

const create = (newAmount) => {
    return axios.post('/amounts', newAmount)
        .then(response => response.data);
}

const update = (id, updatedAmount) => {
    return axios.put(`/amounts/${id}`, updatedAmount)
        .then(response => response.data);
}

const remove = (id) => {
    return axios.delete(`/amounts/${id}`)
        .then(response => response.data);
}

export default { getAll, create, update, remove }; 