import Axios from 'axios';

export const axiosInstance = (baseURL) => {
    const axios = Axios.create({
        baseURL: 'https://medicine-search-and-autocomplete.p.rapidapi.com/api/' + baseURL,
        timeout: 2000,
        headers: {
            'X-RapidAPI-Key': 'c591921187msh466b86537bc0e82p16642ejsn9b1418ea8e24',
            'X-RapidAPI-Host': 'medicine-search-and-autocomplete.p.rapidapi.com'
        }
    });
    return axios;
};