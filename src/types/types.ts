export enum currencyType {
    'USD',
    'EUR'
};

export interface apiResponse {
    amount: number
    base: string
    date: string
    rates: object
}
