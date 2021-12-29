import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Country({ dark }) {
  const location = useLocation();
  const { data } = location.state;
  const history = useHistory();

  return (
    <div
      className="main-content"
      style={{
        background: dark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
      }}
    >
      <div className="single-content">
        <Link to="/">
          <p
            onClick={history.goBack}
            className="btn"
            style={{
              background: dark ? "hsl(209, 23%, 22%)" : "#fff",
              color: dark ? "#fff" : "hsl(209, 23%, 22%)",
            }}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ marginRight: "10px" }}
            />
            Back
          </p>
        </Link>

        <div className="details" style={{ color: dark ? "white" : "black" }}>
          <div className="flag">
            <img src={data.flags.svg} alt={data.name.official} />
          </div>

          <div className="country-detail">
            <h1>{data.name.common}</h1>

            <div className="others">
              <div className="first">
                <p>
                  Official name: <span>{data.name.official}</span>
                </p>
                <p>
                  Population: <span>{data.population}</span>
                </p>
                <p>
                  Region: <span>{data.region}</span>
                </p>
                <p>
                  Sub Region: <span>{data.subregion}</span>
                </p>
                <p>
                  Capital: <span>{data.capital[0]}</span>
                </p>
              </div>

              <div className="two">
                <p>
                  Continent: <span>{data.continents[0]}</span>
                </p>
                <p>
                  Currencies: <span></span>
                </p>
                <p>
                  Timezone: <span>{data.timezones[0]}</span>
                </p>
              </div>
            </div>

            <div className="third">
              <p>Borders: {data.borders}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Country);
