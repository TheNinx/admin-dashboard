import {http} from "@/services/config";
import IUsuario from "@/interfaces/IUsuario";

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
};
export default {




    listarTask: () => {
        return http.get('/api/task',config)
    }

}