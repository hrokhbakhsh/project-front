import { Injectable } from "@angular/core";
import { PmtModuleConfig } from "../model/config";

@Injectable({
    providedIn: "root"
})
export class PmtConfigService {
    CONFIG_OPTIONS: PmtModuleConfig;

    constructor(moduleConfig?: PmtModuleConfig) {
        this.CONFIG_OPTIONS = {
            ...new PmtModuleConfig(),
            ...moduleConfig
        };
    }

    getConfig(): PmtModuleConfig {
        return this.CONFIG_OPTIONS;
    }
}
