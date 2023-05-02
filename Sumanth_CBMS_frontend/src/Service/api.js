import axios from "axios";
const url="http://localhost:8080/api/Cus";


export const ApiData ={
    Cus:async () => {
        const resp =await axios.get(url);
        return resp.data;
    },

    post:async () => {
        const resp = await axios.post(url);
        return resp.data;
    }
}