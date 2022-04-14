export enum currencyType {
    'USD',
    'EUR'
};

export interface apiResponse {
    amount: number
    base: string
    date: string
    rates: {
        'USD': number
        "AUD": number
        "BGN": number
        "BRL": number
        "CAD": number
        "CHF": number
        "CNY": number
        "CZK": number
        "DKK": number
        "EUR": number
        "GBP": number
        "HKD": number
        "HRK": number
        "HUF": number
        "IDR": number
        "ILS": number
        "INR": number
        "ISK": number
        "JPY": number
        "KRW": number
        "MXN": number
        "MYR": number
        "NOK": number
        "NZD": number
        "PHP": number
        "PLN": number
        "RON": number
        "SEK": number
        "SGD": number
        "THB": number
        "TRY": number
        "ZAR": number
    }
}
