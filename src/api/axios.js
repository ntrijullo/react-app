import axios from "axios";

export default axios.create({
    // baseURL: "https://laravel-11.test",
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: true,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})