import { Input, Directive, ElementRef, OnChanges, OnInit, Optional, OnDestroy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import {PmtConfigService} from "../service/config.service";

/**
 * A wrapper directive on top of the translate pipe as the inbuilt translate directive from ngx-translate is too verbose and buggy
 */
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: "[pmtTranslate]"
})
export class PmtTranslateDirective implements OnChanges, OnInit, OnDestroy {
    @Input() pmtTranslate: string;
    @Input() translateValues: any;

    private readonly directiveDestroyed = new Subject<never>();

    constructor(
        private configService: PmtConfigService,
        private el: ElementRef,
        @Optional() private translateService: TranslateService
    ) {}

    ngOnInit(): void {
        const enabled = this.configService.getConfig().i18nEnabled;
        if (enabled) {
            this.translateService.onLangChange.pipe(takeUntil(this.directiveDestroyed)).subscribe(() => {
                this.getTranslation();
            });
        }
    }

    ngOnChanges(): void {
        const enabled = this.configService.getConfig().i18nEnabled;

        if (enabled) {
            this.getTranslation();
        }
    }

    ngOnDestroy(): void {
        this.directiveDestroyed.next();
        this.directiveDestroyed.complete();

    }

    private getTranslation(): any {
        this.translateService
            .get(this.pmtTranslate, this.translateValues)
            .pipe(takeUntil(this.directiveDestroyed))
            .subscribe(
                value => {
                    this.el.nativeElement.innerHTML = value;
                },
                () => {
                    return `${this.configService.getConfig().noi18nMessage}[${this.pmtTranslate}]`;
                }
            );
    }
}
