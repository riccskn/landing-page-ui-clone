import {api} from "./api"
export class ProductService {

    getAll() {
       return api.get("/products")
    }

}