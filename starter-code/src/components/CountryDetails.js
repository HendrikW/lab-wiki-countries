import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json'

const countryByCca3 = (cca3) => {
    return countries.find((c) => { return c.cca3 === cca3 })
}

const countryDetails = (props) => {

  const country = countryByCca3(props.match.params.cca3)


  return (
    <div>
      <h1>{country.name.official}</h1>
      Capital : {country.capital[0]}
      <br />
      <h2>Borders:</h2>
      <ul>
          {country.borders.map((borderCountryCca3) => {
              return <li><Link to={borderCountryCca3} >{countryByCca3(borderCountryCca3).name.common}</Link></li>
          })}
      </ul>
    </div>    

  )
}

export default countryDetails;