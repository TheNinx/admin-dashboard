import {http} from "@/services/config";
import IUsuario from "@/interfaces/IUsuario";


export default {

    listar: () => {
        return http.get('Usuarios')
    },
    salvar: (produto: IUsuario) => {
        return http.post('Usuarios', produto)
    }

}