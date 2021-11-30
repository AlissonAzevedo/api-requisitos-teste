import { http } from "./config";

export default{
    listar:() => {
        return http.get('requisito/')
    },
    salvar:(requisito) => {
        return http.post('requisito/', requisito)
    }
}