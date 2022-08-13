const initialState = {
    countries: [],
    allCountries: [],
    activity: [],
    detail: []
}
//guardo dos veces los paises para que cuando los busque en options no se me pise paises con los paises filtrados
function rootReducer (state = initialState, action) {
    switch(action.type){
    case 'GET_COUNTRIES':
        return{
            ...state,
            countries: action.payload,
            allCountries : action.payload
        }
    case 'GET_SEARCH_COUNTRIES':
        return{
            ...state,
            countries: action.payload
        } 
    case 'GET_ACTIVITY':
        return{
            ...state,
            activity : action.payload
        }
    case 'FILTER_CONTINENT':
        const fullCountries = state.allCountries
        const currentStateFilter = action.payload === 'All' ? fullCountries : fullCountries.filter(el => el.continent === action.payload)
        return{
            ...state,
            countries: currentStateFilter
        }
    case 'POST_ACTIVITY':
        return {
            ...state
        }
   
    case 'FILTER_POPULATION':
    const population = action.payload === 'descendant' ? state.countries.sort((a,b) => a.population - b.population) :
        state.countries.sort((a,b) => b.population - a.population)
        return{
            ...state,
            countries: population
        }
    case 'FILTER_ACTIVITY':
        const array = []
         state.allCountries.map(el => el.Activity.forEach(element => {
        if (element.name === action.payload) {
            array.push(el)
        }
    }))
    return{
        ...state,
        countries: array
    }
    case 'FILTER_ALFA':
        const nameAlfa = action.payload === 'asc' ? state.countries.sort(function (a, b) {
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
            detail: action.payload
        }
        default:
            return state;
    }
    
}

export default rootReducer;