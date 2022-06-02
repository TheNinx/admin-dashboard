import {http} from "@/services/config";


const config = {
    headers: { Authorization: `Bearer ${document.cookie}` }
};
export default {



    login: (userData: any) => {
        return http.post('api/login', userData,config)
    },



}

