import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {DynamicComponent} from "../model/dynamic-component";
import {environment} from "../../../environments/environment";

@Injectable()
export class DynamicComponentService {
    BASE_URL = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    getDynamicComponents(): Promise<DynamicComponent[]> {
        return this.http.get<DynamicComponent[]>(`${this.BASE_URL}/dynamicComponents`)
            .toPromise();
    }


}
