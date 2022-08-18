import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getSearchCountries } from '../actions';
import HomeStyle from "./styles/Home.module.css";


export default function SearchBar (){
    const dispatch = useDispatch();
    const [name, setName] = useState("");


    function handleInputChange(event){
        event.preventDefault();
        setName(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        dispatch(getSearchCountries(name));
    }

    return(
        <div>
            <input className={HomeStyle.btn} type = 'text' value ={name.name} placeholder = 'Search Country' onChange = {handleInputChange}/>
            <button className={HomeStyle.btn} type = 'submit' onClick = {handleSubmit}>Search</button>
        </div>
    )
}