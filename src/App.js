import "./App.css";
import React, { useState } from "react";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Country from "./components/body/Country";

function App() {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    setDark(!dark);
  };

  return (
    <BrowserRouter basename="/" forceRefresh>
      <div className={`App ${dark ? "dark" : null} `}>
        <Header handleDarkMode={darkMode} dark={dark} />

        <Route path="/" component={Body} exact />
        <Route path="/country" render={() => <Country dark={dark} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
