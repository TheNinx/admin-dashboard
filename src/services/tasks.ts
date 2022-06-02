import {http} from "@/services/config";
import IUsuario from "@/interfaces/IUsuario";

const config = {
    headers: { Authorization: `Bearer ${document.cookie}` }
};
export default {



    login: () => {
        return http.post('api/login', {email: "well@gmaiill.comd", password: 123456789},config)
    },

    listarTask: () => {
        return http.get('/api/task',config)
    }

}