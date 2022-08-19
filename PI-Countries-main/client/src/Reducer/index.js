const initialState = {
    countries: [],
    filteredCountries: [],
    activity: [],
    detail: [],
    post: {},
};
//guardo dos veces los paises para que cuando los busque en options no se me pise paises con los paises filtrados
export default function rootReducer (state = initialState, {type, payload}) {
    switch(type){
    case 'GET_COUNTRIES':
        return{
            ...state,
            countries: payload,
            allCountries : payload
        }
    case 'GET_SEARCH_COUNTRIES':
        return{
            ...state,
            countries: payload
        } 
    case 'GET_ACTIVITY':
        return{
            ...state,
            activity : payload
        }
    case 'FILTER_CONTINENT':
        if(payload !== 'All'){
            return{
                ...state,
                filteredCountries: state.countries.filter(
                    (e) => e.continent === payload
                ), //todos
            };
        } else{
            return { ...state, filteredCountries: state.countries};
        }
    case 'POST_ACTIVITY':
        return {
            ...state,
            post: payload,
        };
   
    case 'FILTER_POPULATION':
    const population = payload === 'descendant' ? state.countries.sort((a,b) => a.population - b.population) :
        state.countries.sort((b,a) => b.population - a.population)
        return{
            ...state,
            countries: population
        }
    case 'FILTER_ACTIVITY':
        const array = []
         state.allCountries.map(el => el.Activity.forEach(element => {
        if (element.name === payload) {
            array.push(el)
        }
    }))
    return{
        ...state,
        countries: array
    }
    case 'FILTER_ALFA':
        const nameAlfa = payload === 'asc' ? state.countries.sort(function (a, b) {
        if (a.name > b.name) {
        return 1;     
        }
        if (b.name > a.name) {
        return -1;
        }
        return 0;
        }) : state.countries.sort(function (a, b) {
        if (a.name > b.name) {
            return -1;
        }
        if (b.name > a.name) {
            return 1;
        }
        return 0;
        })
        return {
            ...state,
            countries: nameAlfa
        }
    case 'GET_COUNTRY_DETAIL':
        return{
            ...state,
            detail: payload
        }
        default:
            return state;
    }
    
}

