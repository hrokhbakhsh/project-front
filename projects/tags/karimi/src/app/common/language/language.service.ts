import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

import {PmtConfigService} from "../service/config.service";

@Injectable({
    providedIn: "root"
})
export class LanguageService {
    currentLang = "en";

    constructor(
        private translateService: TranslateService,
        private configService: PmtConfigService
    ) {
    }

    init(): void {
        const config = this.configService.getConfig();
        this.currentLang = config.defaultI18nLang;
        this.translateService.setDefaultLang(this.currentLang);
        this.translateService.use(this.currentLang);
    }

    changeLanguage(languageKey: string): void {
        this.currentLang = languageKey;
        this.configService.CONFIG_OPTIONS.defaultI18nLang = languageKey;
        this.translateService.use(this.currentLang);
    }

    getCurrentLanguage(): string {
        return this.currentLang;
    }

    isLanguageRtl(lang: string): boolean {
        return lang === "fa";
    }

    isCurrentLanguageRtl(): boolean {
        return this.currentLang === "fa";
    }
}
