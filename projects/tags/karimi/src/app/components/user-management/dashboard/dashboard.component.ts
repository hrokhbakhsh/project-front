import {Component, OnInit} from "@angular/core";
import {Product} from "../../../common/model/product";
import {Category} from "../../../common/model/category";
import {ProductService} from "../../../common/service/productservice";

@Component({
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

    constructor(
    ) {
    }

    ngOnInit(): void {
    }

}
