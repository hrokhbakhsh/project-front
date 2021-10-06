export enum ComponentType {
    TEXT,
    NUMBER,
    DATE,
    TEXTAREA,
}
export interface DynamicComponent {
    id?: string;
    name?: string;
    type: ComponentType;
    value?: any;
}
