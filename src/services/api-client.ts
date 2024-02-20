import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params : {
        key : "0e772c58017b44adbcabc51ce31f2098"
    }
})

export default apiClient;