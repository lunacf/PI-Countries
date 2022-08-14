import './styles/Home.css';
import React from 'react';
import { useEffect, useState, useDispatch } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Paginate from './Paginate';
import SearchBar from './SearchBar';
import HomeStyle from './styles/Home.module.css';

export default function Home() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1) //1ª pag
    const selectedCountry = useSelector((state)=> state.country);
}