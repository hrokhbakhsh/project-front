import {Category} from "./category";

export interface Product {
    id?: number;
    code?: string;
    name?: string;
    price?: number;
    quantity?: number;
    category?: Category;
}
