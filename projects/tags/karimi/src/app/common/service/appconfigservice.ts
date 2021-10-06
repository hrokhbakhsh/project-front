import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AppConfig } from "../model/appconfig";

@Injectable()
export class AppConfigService {

    config: AppConfig = {
        theme: "bootstrap4-light-blue",
        dark: false,
        inputStyle: "outlined",
        ripple: true
    };

    private configUpdate = new Subject<AppConfig>();

    configUpdate$ = this.configUpdate.asObservable();

    updateConfig(config: AppConfig): void {
        this.config = config;
        this.configUpdate.next(config);
    }

    getConfig(): any {
        return this.config;
    }
}
