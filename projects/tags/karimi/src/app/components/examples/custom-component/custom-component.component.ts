import {Component, OnInit} from "@angular/core";
import {Product} from "../../../common/model/product";
import {Category} from "../../../common/model/category";
import {ProductService} from "../../../common/service/productservice";

@Component({
    templateUrl: "./custom-component.component.html",
    styleUrls: ["./custom-component.component.scss"]
})
export class CustomComponentComponent implements OnInit {

    product: Product;
    categories: Category[];

    constructor(
        private productService: ProductService,
    ) {
        this.product = {};
    }

    ngOnInit(): void {
        this.productService.getCategories()
            .then(res => {
                this.categories = res;
            });
    }

}
