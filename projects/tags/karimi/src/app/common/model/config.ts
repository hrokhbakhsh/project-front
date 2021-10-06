import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class PmtModuleConfig {
    i18nEnabled ? = true;
    defaultI18nLang ? = "fa";
    noi18nMessage ? = "translation-not-found";
    alertAsToast ? = false;
    alertTimeout ? = 5000;
}
