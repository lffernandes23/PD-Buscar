import axios from "axios";

const api = axios.create({
    baseURL: "https://www.boredapi.com/api/",
});

export default api;