import { useReducer } from 'react';
import { apiResponse } from "../types/types";


const INITIAL_STATE: apiResponse = {
    amount: 0,
    base: "",
    date: "",
    rates: {
        "USD": 0,
        "AUD": 0,
        "BGN": 0,
        "BRL": 0,
        "CAD": 0,
        "CHF": 0,
        "CNY": 0,
        "CZK": 0,
        "DKK": 0,
        "EUR": 0,
        "GBP": 0,
        "HKD": 0,
        "HRK": 0,
        "HUF": 0,
        "IDR": 0,
        "ILS": 0,
        "INR": 0,
        "ISK": 0,
        "JPY": 0,
        "KRW": 0,
        "MXN": 0,
        "MYR": 0,
        "NOK": 0,
        "NZD": 0,
        "PHP": 0,
        "PLN": 0,
        "RON": 0,
        "SEK": 0,
        "SGD": 0,
        "THB": 0,
        "TRY": 0,
        "ZAR": 0,
    }
}

type currencyActions = {
    type: "show_currency",
    payload: apiResponse
}

const currencyReducer = (state:apiResponse, action: currencyActions): apiResponse => {
    switch(action.type) {
        case "show_currency":
            return {
                ...state,
                amount: action.payload.amount,
                base: action.payload.base,
                date: action.payload.date,
                rates: action.payload.rates
            }
    }
}

const useCurrency = () => {
    return useReducer(currencyReducer, INITIAL_STATE)
}

export default useCurrency;