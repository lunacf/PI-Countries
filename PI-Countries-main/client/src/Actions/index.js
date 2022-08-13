import axios from 'axios';

export function getCountries() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/country");
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        })
    }
}


export function getCountryActivity() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/activity");
        console.log('json', json.data);
        return dispatch({
            type: 'GET_ACTIVITY',
            payload: json.data
        })
    }
}

export function getCountryDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/country/" + id)
            return dispatch({
                type: 'GET_COUNTRY_DETAIL',
                payload: json.data
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export function getSearchCountries(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/country?name=" + name)
            return dispatch({
                type: "GET_SEARCH_COUNTRIES",
                payload: json.data
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export function postActivity(payload) {
    return async function (dispatch) {
        var json = await axios.post("http://localhost:3001/activity", payload);
        return dispatch({
            type: 'POST_ACTIVITY',
            payload: json
        })
    }
}

export function countryFilter(payload) {
    return {
        type: 'FILTER_CONTINENT',
        payload
    }
}

export function populationFilter(payload) {
    return {
        type: 'FILTER_POPULATION',
        payload
    }
}

export function alfaFilter(payload) {
    return {
        type: 'FILTER_ALFA',
        payload
    }
}

export function activityFilter(payload) {
    return {
        type: 'FILTER_ACTIVITY',
        payload
    }
}