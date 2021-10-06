import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Component, OnInit} from "@angular/core";
import {Product} from "../../../common/model/product";
import {Category} from "../../../common/model/category";
import {CountryService} from "../../../common/service/countryservice";
import {ProductService} from "../../../common/service/productservice";

@Component({
    templateUrl: "./mypage-details.dialog.component.html",
    styleUrls: ["./mypage-details.dialog.component.scss"]
})
export class MypageDetailsDialogComponent implements OnInit {

    product: Product;
    categories: Category[];

    constructor(
        public ref: DynamicDialogRef,
        private productService: ProductService,
        public config: DynamicDialogConfig) {
    }

    ngOnInit(): void {
        this.product = this.config.data.selectedProduct;

        this.productService.getCategories()
            .then(res => {
                this.categories = res;
            });
    }

    selectProduct(product: any): void {
        this.ref.close(product);
    }

    update(): void {
        this.ref.close(this.product);
    }

    cancel(): void {
        this.ref.close();
    }
}
