import {Component, OnInit} from "@angular/core";
import {Login} from "../../common/model/login.model";
import {LoginService} from "../../common/auth/login.service";
import {Router} from "@angular/router";
import {Message} from "primeng/api";
import {TranslateService} from "@ngx-translate/core";


@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

    messages: Message[];
    loginModel: Login;

    constructor(
        private loginService: LoginService,
        private translateService: TranslateService,
        private router: Router,
    ) {
        this.loginModel = {
            username: null,
            password: null,
            rememberMe: true
        };
    }

    ngOnInit(): void {
    }

    login(): void {
        if (!this.loginModel || !this.loginModel.username || !this.loginModel.password) {
            this.showMessage("error", "error.pleaseEnterAllMandatoryFields");
            return;
        }
        this.loginService.login(this.loginModel)
            .subscribe(res => {
                console.log(res);
                // if (res) {
                //     this.router.navigate(["/dashboard"]);
                // }
            });
    }

    private showMessage(type: string, message: string): void {
        this.messages = [];
        this.translateService.get(message)
            .subscribe((text: string) => {
                this.messages.push({
                    severity: type,
                    summary: text,
                });
            });
    }

    private clearMessage(): void {
        this.messages = [];
    }
}
