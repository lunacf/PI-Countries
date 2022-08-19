import axios from 'axios';
const BASE_API_PATH = "http://localhost:4000";

export const getCountries = () => dispatch => {
    // return fetch(`${BASE_API_PATH}/country`)
    // .then(r => r.json())
    // .then(data => {
    //     dispatch({
    //         type: "GET_COUNTRIES",
    //         payload: data, 
    //     })
    // })
    return axios.get(`${BASE_API_PATH}/country`)
    .then(r => r.data)
    .then(data => {
        dispatch({
            type: "GET_COUNTRIES",
            payload: data, 
        })
    })
    .catch(console.error)
}


export const getCountryActivity = () => dispatch => {
    return axios.get(`${BASE_API_PATH}/activity`)
    .then(r => r.data)
    .then(data => {
        dispatch({
            type: "GET_ACTIVITY",
            payload: data, 
        })
    })
    .catch(console.error)
}

export const getCountryDetail = (id) => dispatch => {
    return axios.get(`${BASE_API_PATH}/country/${id}`)
    .then(r => r.data)
    .then(data => {
        dispatch({
            type: "GET_COUNTRY_DETAIL",
            payload: data, 
        })
    })
    .catch(console.error)
}

export const getSearchCountries = (name) => dispatch =>{
   
    return axios.get(`${BASE_API_PATH}/country?name=${name}`)
    .then(r => r.data)
    .then(data => {
        dispatch({
            type: "GET_SEARCH_COUNTRIES",
            payload: data, 
        })
    })
    .catch(console.error)
}

export function postActivity(payload) {
    return async function (dispatch) {
        var json = await axios.post(`${BASE_API_PATH}/activity`, payload);
        return dispatch({
            type: 'POST_ACTIVITY',
            payload: json
        })
    }
}

export function countryFilter(payload) {
    return function(dispatch) {
        dispatch({
            type: 'FILTER_CONTINENT',
            payload
        });
    };
}

export function populationFilter(payload) {
    return {
        type: 'FILTER_POPULATION',
        payload
    }
}

export function alfaFilter(payload) {
    return function(dispatch) {
        dispatch({
            type: 'FILTER_ALFA',
            payload
        })
        
    }
}

export function activityFilter(payload) {
    return function(dispatch) {
        dispatch({
            
            type: 'FILTER_ACTIVITY',
            payload
        })
    }
}