import {Country} from "./country";

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?;
    verified?: boolean;
    balance?: boolean;
}
