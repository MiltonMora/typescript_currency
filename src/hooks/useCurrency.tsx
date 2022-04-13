import { useReducer } from 'react';
import { apiResponse } from "../types/types";


const INITIAL_STATE: apiResponse = {
    amount: 0,
    base: "",
    date: "",
    rates: {"USD": 0}
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