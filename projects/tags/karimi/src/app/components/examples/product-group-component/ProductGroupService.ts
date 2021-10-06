import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductGroup} from "./product-group";
import {environment} from "../../../../environments/environment";

@Injectable()
export class ProductGroupService {

    BASE_URL = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    getProductGroupList(): Promise<ProductGroup[]> {
        return this.http.get<ProductGroup[]>(`${this.BASE_URL}/product-groups`)
            .toPromise();
    }

    saveProductGroup(productGroup: ProductGroup): Promise<ProductGroup> {
        return this.http.post<ProductGroup>(`${this.BASE_URL}/save-product-group`, productGroup)
            .toPromise();
    }


}
