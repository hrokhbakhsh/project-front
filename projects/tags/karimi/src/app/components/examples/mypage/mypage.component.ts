import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {MypageDialogComponent} from "./mypage.dialog.component";
import * as moment from "jalali-moment";
import {IDatePickerDirectiveConfig} from "ng2-jalali-date-picker";
import {CountryService} from "../../../common/service/countryservice";
import {ProductService} from "../../../common/service/productservice";
import {Category} from "../../../common/model/category";
import {Country} from "../../../common/model/country";
import {Product} from "../../../common/model/product";
import {City} from "../../../common/model/city";
import {MypageDetailsDialogComponent} from "./mypage-details.dialog.component";

@Component({
    templateUrl: "./mypage.component.html",
    styleUrls: ["./mypage.component.scss"]
})
export class MypageComponent implements OnInit, OnDestroy {

    value1: string;
    value2: string;
    desc: string;
    numberValue: number;
    numberValue2: number;
    selectedCities = [];
    cities: City[];
    city;
    selectedCity1;
    products2: Product[];
    categories: Category[];
    clonedProducts: { [s: string]: any; } = {};
    tempSelectedColumns: any[];
    cols = [];
    ref: DynamicDialogRef;
    dataBar: any;
    dataPie: any;
    text: string;
    filteredCountries: any[];
    countries: Country[];
    selectedCountry: any;
    dateObject: any;
    datePickerConfig: IDatePickerDirectiveConfig = {
        drops: "down",
        format: "jYYYY/jMM/jDD",
    };
    samePageDialog = false;

    constructor(
        private dialogService: DialogService,
        private messageService: MessageService,
        private countryService: CountryService,
        private productService: ProductService,
    ) {
        this.cols = [
            {field: "id", header: "Id"},
            {field: "name", header: "Name"},
            {field: "code", header: "Code"},
            {field: "category", header: "Category"},
            {field: "quantity", header: "Quantity"},
            {field: "price", header: "Price"},
        ];

        this.tempSelectedColumns = this.cols;

        this.dataBar = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: "#42A5F5",
                    borderColor: "#1E88E5",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    backgroundColor: "#9CCC65",
                    borderColor: "#7CB342",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        this.dataPie = {
            labels: ["A", "B", "C"],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };

        this.dateObject = moment("1399-11-04", "jYYYY,jMM,jDD");
    }

    ngOnInit(): void {
        this.countryService.getCountries()
            .then(res => {
                this.countries = res;
            });
        this.countryService.getCities()
            .then(res => {
                this.cities = res;
            });
        this.productService.getCategories()
            .then(res => {
                this.categories = res;
            });
        this.productService.getProducts()
            .then(res => {
                this.products2 = res;
            });
    }

    buttonClicked(): void {
        console.log(this.selectedCity1, this.selectedCountry);
    }

    onRowEditInit(product: any): void {
        this.clonedProducts[product.id] = {...product};
    }

    onRowEditSave(product: any): void {
        if (product.price > 0) {
            delete this.clonedProducts[product.id];
            this.messageService.add({severity: "success", summary: "Success", detail: "Product is updated"});
        } else {
            this.messageService.add({severity: "error", summary: "Error", detail: "Invalid Price"});
        }
    }

    onRowEditCancel(product: any, index: number): void {
        this.products2[index] = this.clonedProducts[product.id];
        delete this.clonedProducts[product.id];
    }

    @Input() get selectedColumns(): any[] {
        return this.tempSelectedColumns;
    }

    set selectedColumns(val: any[]) {
        // restore original order
        this.tempSelectedColumns = this.cols.filter(col => val.includes(col));
    }

    show(): void {
        this.ref = this.dialogService.open(MypageDialogComponent, {
            header: "Choose a Product",
            width: "70%",
            contentStyle: {"max-height": "500px", overflow: "auto"},
            baseZIndex: 10000
        });

        this.ref.onClose.subscribe((p: any) => {
            if (p) {
                this.messageService.add({severity: "info", summary: "Product Updated", detail: p.name});
            }
        });
    }


    showDetails(product: Product): void {
        this.ref = this.dialogService.open(MypageDetailsDialogComponent, {
            data: {
                selectedProduct: product
            },
            header: "Choose a Product",
            width: "70%",
            contentStyle: {"min-height": "350px", overflow: "auto"},
            baseZIndex: 10000
        });

        this.ref.onClose.subscribe((p: any) => {
            if (p) {
                this.messageService.add({severity: "info", summary: "Product Updated", detail: p.name});
            }
        });
    }

    search(event): void {
        const filtered: any[] = [];
        const query = event.query;
        for (const country of this.countries) {
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }

    addRowToTable(): void {
        this.products2.push({
            id: 0,
            name: "",
            code: "",
            category: {name: "category 2", code: "c2"},
            quantity: 0,
            price: 0
        });
        setTimeout(() => {
            const buttons = document.getElementsByClassName("edit-button");
            buttons[buttons.length - 1].dispatchEvent(new Event("click"));
        }, 50);
    }

    ngOnDestroy(): void {
        if (this.ref) {
            this.ref.close();
        }
    }
}
