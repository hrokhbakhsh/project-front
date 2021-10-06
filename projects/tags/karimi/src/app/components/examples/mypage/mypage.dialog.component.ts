import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Component, OnInit} from "@angular/core";
import {Product} from "../../../common/model/product";

@Component({
    templateUrl: "./mypage.dialog.component.html",
    styleUrls: ["./mypage.dialog.component.scss"]
})
export class MypageDialogComponent implements OnInit {

    products: Product[];

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    }

    ngOnInit(): void {
        this.products = [
            {id: 1, name: "Dial Product 1", code: "1", category: {name: "dialog category 1", code: "c1"}, quantity: 10, price: 10000},
            {id: 2, name: "Dial Product 2", code: "2", category: {name: "dialog category 2", code: "c2"}, quantity: 17, price: 20000},
            {id: 3, name: "Dial Product 3", code: "3", category: {name: "dialog category 3", code: "c3"}, quantity: 20, price: 30000},
        ];
    }

    selectProduct(product: any): void {
        this.ref.close(product);
    }
}
