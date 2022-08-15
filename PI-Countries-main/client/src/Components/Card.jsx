import React from "react";
import './styles/Card.css';

export default function Card ({name, continent, flag, population}){
    return (
        <div className = 'Card'>
            <h3>{name}</h3>
            <img src={flag} alt='flag not found' width='250px' height='190px'/>
            <h3>{continent}</h3>
            <h3>{population}</h3>
        </div>
    )
}