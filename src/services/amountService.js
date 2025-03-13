import axios from "../api/axios";

const getAll = () => {
    return axios.get('/amount', {
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
    }).then(response => response.data);
}

const create = (newAmount) => {
    return axios.post('/amount', newAmount, {
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
    }).then(response => response.data);
}

const update = (id, updatedAmount) => {
    return axios.put(`/amount/${id}`, updatedAmount, {
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
    }).then(response => response.data);
}

const remove = (id) => {
    return axios.delete(`/amount/${id}`, {
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
    }).then(response => response.data);
}

export default { getAll, create, update, remove }; 