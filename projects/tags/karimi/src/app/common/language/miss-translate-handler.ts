import { MissingTranslationHandler, MissingTranslationHandlerParams } from "@ngx-translate/core";
import {PmtConfigService} from "../service/config.service";
import {Injectable} from "@angular/core";

@Injectable()
export class PmtMissingTranslationHandler implements MissingTranslationHandler {

    constructor(private configService: PmtConfigService) {}

    handle(params: MissingTranslationHandlerParams): string {
        const key = params.key;
        return `${this.configService.getConfig().noi18nMessage}[${key}]`;
    }
}
