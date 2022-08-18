import React from 'react';
import HomeStyle from "./styles/Home.module.css";

export default function Paginate({countriesXPage, selectedCountry, paginate}){
    const numberPage = [];

    for (let e = 1; e <= Math.ceil(selectedCountry/countriesXPage); e++) {
        numberPage.push(e)
    }
    return(
        <nav>
            <ul className= 'paginate'>
                {numberPage &&
                numberPage.map(N =>(
                <button key = {N}  className={HomeStyle.btn} onClick={()=> paginate(N)}>{N}</button>
                ))}
            </ul>
        </nav>
    )
}