import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'httpwww.themealdb.com/api/json/v1/1',
})
export default axiosClient;