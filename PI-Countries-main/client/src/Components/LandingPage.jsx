import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LandingPage.css'
import HomeStyle from "./styles/Home.module.css"

export default function landingPage() {
    return (
        <div className='titulo'>
            <h1>PI - COUNTRIES - APP</h1>
            <Link to='/home'>
                <button className={HomeStyle.btnEnter}>Enter</button>
            </Link>
        </div>
    )
}