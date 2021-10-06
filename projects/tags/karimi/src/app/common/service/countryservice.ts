import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Country} from "../model/country";
import {City} from "../model/city";
import {Category} from "../model/category";
import {environment} from "../../../environments/environment";

@Injectable()
export class CountryService {
    BASE_URL = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    getCountries(): Promise<Country[]> {
        return this.http.get<Country[]>(`${this.BASE_URL}/countries`)
            .toPromise();
    }

    getCities(): Promise<City[]> {
        return this.http.get<City[]>(`${this.BASE_URL}/cities`)
            .toPromise();
    }
}
