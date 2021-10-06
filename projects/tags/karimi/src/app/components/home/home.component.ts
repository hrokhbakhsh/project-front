import {Component, OnDestroy, OnInit} from "@angular/core";
import {AppConfig} from "../../common/model/appconfig";
import {Subscription} from "rxjs";
import {AppConfigService} from "../../common/service/appconfigservice";

@Component({
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {

    config: AppConfig;

    subscription: Subscription;

    constructor(private configService: AppConfigService) {}

    ngOnInit(): void {
        this.config = this.configService.getConfig();
        this.subscription = this.configService.configUpdate$.subscribe(config => this.config = config);
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
