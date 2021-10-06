import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/category";
import {environment} from "../../../environments/environment";

@Injectable()
export class ProductService {
    BASE_URL = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    getProducts(): Promise<any> {
        return this.http.get<any>(`${this.BASE_URL}/products`)
            .toPromise();
    }

    getCategories(): Promise<Category[]> {
        return this.http.get<Category[]>(`${this.BASE_URL}/categories`)
            .toPromise();
    }

}
