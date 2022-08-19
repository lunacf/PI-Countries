import React from 'react';
import Card from './Card';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Paginate from "./Paginate.jsx";

export default function Cards() {
    const { filteredCountries } = useSelector((state) => state);
    const [currentPage, setCurrentPage] = useState(1);
    const [showCountries] = useState(10);
    const indexLastC = currentPage * showCountries;
    const indexFirstC = indexLastC - showCountries;
    const actualCountries =
      filteredCountries.length > 1
        ? filteredCountries?.slice(indexFirstC, indexLastC)
        : filteredCountries;
    const actualPage = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    return (
      <div>
        <Paginate
          showCountries={showCountries}
          filteredCountries={filteredCountries.length}
          currentpage={currentPage}
          actualPage={actualPage}
        />
        {filteredCountries.length > 1 ? (
          actualCountries.map((e) => {
            return (
              <Card
                key={e.id}
                id={e.id}
                name={e.name}
                image={e.image}
                capital={e.capital}
                subregion={e.subregion}
                continent={e.continent}
              />
            );
          })
        ) : filteredCountries.length <= 0 || filteredCountries[0] === null ? (
          <h2>Country not found</h2>
        ) : (
          filteredCountries.map((e) => {
            console.log(e);
            return (
              <Card
                key={e.id}
                id={e.id}
                name={e.name}
                image={e.image}
                capital={e.capital}
                subregion={e.subregion}
                continent={e.continent}
              />
            );
          })
        )}
      </div>
    );
  }