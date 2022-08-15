import './styles/Home.css';
import React from 'react';
import { useEffect, useState, useDispatch, useSelector } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Paginate from './Paginate';
import SearchBar from './SearchBar';
import HomeStyle from './styles/Home.module.css';
import { activityFilter, alfaFilter, countryFilter, getCountries, getCountryActivity, populationFilter } from '../actions/index';

export default function Home() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1) //1ª pag
    const selectedCountry = useSelector((state) => state.country);
    const [, setOrder] = useState('')
    const [, setAfromZ] = useState('')
    const unique = [...new Set(test)];
    const [countriesXPage] = useState(9) //number of cards in screen
    const paginate = (numberPage)=>{setCurrentPage(numberPage)}
    const lastCountry = currentPage * countriesXPage
    const firstCountry = lastCountry - countriesXPage
    const currentPageCountry = selectedCountry.slice(firstCountry, lastCountry)

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    useEffect(() => {
        dispatch(getCountryActivity())
    }, [dispatch])

    function handleResetClick(e) {
        e.preventDefault();
        dispatch(getCountries());
    }

    function handlePopulationFilter(e) {
        e.preventDefault();
        dispatch(populationFilter(e.target.value));
        setCurrentPage(1);
        setOrder(`Order ${e.target.value}`);
    }
    function handleStateFilter(e) {
        e.preventDefault();
        dispatch(countryFilter(e.target.value));
    }

    function handleOrderByAlfa(e) {
        e.preventDefault();
        dispatch(alfaFilter(e.target.value));
        setAfromZ(`Order ${e.target.value}`);
    }

    function handleActivities(e) {
        dispatch(activityFilter(e.target.value));
    };

    return (
        <div className='container'>
            <div className='searchbar'>
                <SearchBar />
                <Link to='/activities'><button className={HomeStyle.btn}>Create Country activities</button></Link>
            </div>
            <div className>
                {unique.length === 0 ?
                    <p>Create activities to filter them</p>
                    : <select className={HomeStyle.btnAdmin} onChange={e => handleActivities(e)}>
                        {unique.map((e) => (
                            <option value={e} > {e} </option>
                        ))}
                    </select>
                }
                <select className={HomeStyle.btnAdmin} onChange={e => handleStateFilter(e)} >
                    <option value='All'>All</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Polar'>Polar</option>
                    <option value='Americas'>Americas</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Africa'>Africa</option>
                </select>
                <select className={HomeStyle.btnAdmin} onChange={e => handlePopulationFilter(e)}>
                    <option value='ascendent'>Max population</option>
                    <option value='descendent'>Min population</option>
                </select>
                <select className={HomeStyle.btnAdmin} onChange={e => handleOrderByAlfa(e)}>
                    <option value='des'>Z-A</option>, <option value='asc'>A-Z</option>
                </select>
                <button className={HomeStyle.btnAdmin} onClick={e => { handleResetClick(e) }}>Reload countries</button>
            </div>
            <br />
            <div>
                <Paginate
                    countriesXPage={countriesXPage}
                    selectedCountry={selectedCountry.length}
                    paginate={paginate}>
                </Paginate></div>
            {currentPageCountry?.map(el => {
                return (
                    <div key={el.id} className='card'>
                        <Link to={'/home/' + el.id}>
                            <Card name={el.name} continent={el.continent} flag={el.flag} population={el.population} />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}