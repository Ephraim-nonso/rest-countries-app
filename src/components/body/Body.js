import axios from "axios";
import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Body() {
  const [searches, setSearches] = useState([]);
  const [region, setRegion] = useState([]);
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState(false);
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    setDark(!dark);
  };

  useEffect(() => {
    // To target some elements on the DOM
    // to target the dark mode properties
    const darkIcon = document.querySelector(".dark-mode");
    darkIcon.addEventListener("click", darkMode);
  });

  const onSearch = (e) => {
    setShow(true);
    axios
      .get(`https://restcountries.com/v3.1/name/${e.target.value}`)
      .then((res) => {
        setSearches(res.data);
      });
    if (e.target.value === "") {
      setSearches([]);
      setShow(false);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setFilter(true);
    axios
      .get(`https://restcountries.com/v3.1/region/${e.target.value}`)
      .then((res) => {
        console.log(res.data);
        setRegion(res.data);
      });
    if (e.target.value === "none") {
      setSearches([]);
      setFilter(false);
    }
    // .catch(() => setRegion([]));
  };

  const displaySearched = searches.map((search) => (
    <div key={search.latlng} className="country">
      <img src={search.flags.svg} alt={search.name.official} />

      <Link
        to={{
          pathname: `/country/${search.name.common}`,
          state: { data: search },
        }}
      >
        <div
          className="country-info display-info"
          style={{
            background: dark ? "hsl(209, 23%, 22%)" : "#fff",
            color: dark ? "#fff" : "hsl(200, 15%, 8%)",
          }}
        >
          <h3> {search.name.common} </h3>
          <p>
            <span>Population:</span> {search.population}
          </p>
          <p>
            <span>Region:</span> {search.region}
          </p>
          <p>
            <span>Capital:</span> {search.capital}
          </p>
        </div>
      </Link>
    </div>
  ));

  const displayRegion = region.map((clickedRegion) => (
    <div key={clickedRegion.latlng} className="country">
      <img src={clickedRegion.flags.svg} alt={clickedRegion.name.official} />

      <Link
        to={{
          pathname: `/country/${clickedRegion.name.common}`,
          state: { data: clickedRegion },
        }}
      >
        <div
          className="country-info display-info"
          style={{
            background: dark ? "hsl(209, 23%, 22%)" : "#fff",
            color: dark ? "#fff" : "hsl(200, 15%, 8%)",
          }}
        >
          <h3> {clickedRegion.name.common} </h3>
          <p>
            <span>Population:</span> {clickedRegion.population}
          </p>
          <p>
            <span>Region:</span> {clickedRegion.region}
          </p>
          <p>
            <span>Capital:</span> {clickedRegion.capital}
          </p>
        </div>
      </Link>
    </div>
  ));

  return (
    <div
      style={{
        background: dark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
      }}
      className="main-content"
    >
      <div className="search-filter">
        <div
          className="search"
          style={{ color: dark ? "#fff" : "hsl(200, 15%, 8%)" }}
        >
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="search"
            placeholder="Search for a country..."
            onChange={onSearch}
            style={{
              background: dark ? "hsl(209, 23%, 22%)" : "#fff",
            }}
            className={dark ? "lg-color" : "dark-color"}
          />
        </div>

        <select
          name="countries"
          className="filter"
          style={{
            background: dark ? "hsl(209, 23%, 22%)" : "#fff",
            color: dark ? "#fff" : "black",
          }}
          onChange={handleChange}
        >
          <option hidden>Filter by Region</option>
          <option
            value="none"
            style={{
              background: dark ? "hsl(209, 23%, 22%)" : "#fff",
              color: dark ? "#fff" : "black",
            }}
          >
            None
          </option>
          <option
            value="africa"
            style={{
              background: dark ? "hsl(209, 23%, 22%)" : "#fff",
              color: dark ? "#fff" : "black",
            }}
          >
            Africa
          </option>
          <option
            value="americas"
            style={{
              background: dark ? "hsl(209, 23%, 22%)" : "#fff",
              color: dark ? "#fff" : "black",
            }}
          >
            America
          </option>
          <option
            value="asia"
            style={{
              background: dark ? "hsl(209, 23%, 22%)" : "#fff",
              color: dark ? "#fff" : "black",
            }}
          >
            Asia
          </option>
          <option
            value="europe"
            style={{
              background: dark ? "hsl(209, 23%, 22%)" : "#fff",
              color: dark ? "#fff" : "black",
            }}
          >
            Europe
          </option>
          <option
            value="oceania"
            style={{
              background: dark ? "hsl(209, 23%, 22%)" : "#fff",
              color: dark ? "#fff" : "black",
            }}
          >
            Oceania
          </option>
        </select>
      </div>

      {show && <div className="display">{displaySearched}</div>}
      {filter && <div className="display">{displayRegion}</div>}
      {!show && !filter ? <Countries /> : null}
    </div>
  );
}

export default Body;
