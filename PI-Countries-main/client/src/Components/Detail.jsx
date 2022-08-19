import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail } from '../actions';
import { useEffect } from 'react';

export default function Detail(props) {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getCountryDetail(props.match.params.id))
    },[dispatch, props.match.params.id])

    const Country = useSelector((state)=>state.detail)

    return(
        <div>
            {
            Country ? 
            <div>
                <h1>{Country.name}</h1>
                <img src = {Country.flag} alt='img not found' width='250px' height='175px'/>
                <h2>Continent: {Country.continent}</h2>
                <h3>Capital: {Country.capital}</h3>
                <h4>Subregion: {Country.subregion}</h4>
                <h5>Area: {Country.area}</h5>
                <div>{Country.Activity?.map(e =>{
                    return(
                        <div className='activity'>
                            <h6>Activity: {e.name}</h6>
                            <h6>Difficult: {e.difficult}</h6>
                            <h6>Season: {e.season}</h6>
                            <h6>Duration: {e.duration}</h6>
                            </div>
                    
                    ) })}</div>
            </div> : <p>Details not found</p>
    }

    <Link to='/home'><button>Back</button></Link>
        </div>


    )











}