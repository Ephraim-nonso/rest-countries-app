import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Body.css";
// import Country from "./Country";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [dark, setDark] = useState(true);
  const darkMode = () => {
    setDark(!dark);
  };

  useEffect(() => {
    const darkIcon = document.querySelector(".dark-mode");

    darkIcon.addEventListener("click", darkMode);
  });

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const flags = countries.map((country) => (
  //   <div key={country.latlng}>
  //     <img src={country.flags.png} alt="yeah" />
  //   </div>
  // ));

  const countryDisplay = countries.map((country) => (
    <div key={country.latlng} className="country">
      <img src={country.flags.svg} alt={country.name.official} />

      <Link
        to={{
          pathname: `/country/${country.name.common}`,
          state: { data: country },
        }}
      >
        <div
          className="country-info"
          style={{
            background: dark ? "#fff" : "hsl(209, 23%, 22%)",
            color: dark ? "hsl(200, 15%, 8%)" : "#fff",
          }}
        >
          <h3> {country.name.common} </h3>
          <p>
            <span>Population:</span> {country.population}
          </p>
          <p>
            <span>Region:</span> {country.region}
          </p>
          <p>
            <span>Capital:</span> {country.capital}
          </p>
        </div>
      </Link>
    </div>
  ));

  return <div className="country-grid">{countryDisplay}</div>;
}

export default Countries;
