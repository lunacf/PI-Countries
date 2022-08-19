import React from "react";
import './styles/Card.css';
import HomeStyle from './styles/Home.module.css';

export default function Card ({name, continent, flag, population, capital, subregion}){
    return (
        <div className = 'Card' >
            <div className={HomeStyle.btn}>
            <h3>{name}</h3>
            <img src={flag} alt='flag not found' width='230px' height='180px'/>
            {continent.map(con => <h3>{con}</h3>)}
            <h3>{population}</h3>
            <h3>{capital}</h3>
            <h3>{subregion}</h3>
            </div>
        </div>
    )
}