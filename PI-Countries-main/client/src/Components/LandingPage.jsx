import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LandingPage.css'
import HomeStyle from "./styles/Home.module.css"

export default function landingPage() {
    return (
        <div className='aa'>
            <h1>Countries - App</h1>
            <Link to='/home'>
                <button className={HomeStyle.btn}>Enter</button>
            </Link>
        </div>
    )
}