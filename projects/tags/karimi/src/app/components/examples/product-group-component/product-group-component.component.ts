import {Component, OnInit} from "@angular/core";
import {ProductGroup} from "./product-group";
import {ProductGroupService} from "./ProductGroupService";
import {MessageService} from "primeng/api";
import {Category} from "../../../common/model/category";
import {ProductService} from "../../../common/service/productservice";
import {Router} from "@angular/router";

@Component({
    templateUrl: "./product-group-component.component.html",
    styleUrls: ["./product-group-component.component.scss"]
})
export class ProductGroupComponentComponent implements OnInit {

    productGroupList: ProductGroup[];
    productGroup: ProductGroup;
    categories: Category[];
    selectedCategory: Category;

    constructor(
        private productGroupService: ProductGroupService,
        private productService: ProductService,
        private router: Router,
        private messageService: MessageService,
    ) {
        this.productGroup = {};
    }

    ngOnInit(): void {
        this.productGroupService.getProductGroupList()
            .then(res => {
                this.productGroupList = res;
            });
        this.productService.getCategories()
            .then(res => {
                this.categories = res;
            });
    }

    save(): void {
        this.productGroup.category = this.selectedCategory.id;
        this.productGroupService.saveProductGroup(this.productGroup)
            .then(res => {
                if (res) {
                    this.messageService.add({
                        summary: "OK",
                        severity: "success"
                    });
                } else {
                    this.messageService.add({
                        summary: "FAILED",
                        severity: "error"
                    });
                }
            });
    }

}
