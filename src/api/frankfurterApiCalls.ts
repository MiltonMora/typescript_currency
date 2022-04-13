import { currencyType, apiResponse } from "../types/types";

const host = 'https://api.frankfurter.app';

export const getCurrencyIn = (type: currencyType): Promise<apiResponse> => {
    return fetch(`${host}/latest?from=${currencyType[type]}`)
    .then(response => response.json());
}