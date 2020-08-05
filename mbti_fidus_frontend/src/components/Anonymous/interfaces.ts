export interface IHeaderCell {
    label: string;
    id: string;
    width: string;
    justifyContent: string;
}

export interface IBodyRow<T> {
    item: T[];
}

export interface IBodyCell {
    id: string;
    value: string;
}
