import axios from "axios";

const config = {
    baseURL: 'https://api.coingate.com/v2/rates/',
    withCredentials: true
}

const instance = axios.create(config);

export const CurrencyAPI = {
    getCurrency: () => {
        const query = ``
        return instance.get(query)
    }
}