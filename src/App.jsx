import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SideBar from "./components/SideBar";
import SearchBar from "./Components/SearchBar";
import "./App.css";
import Bell from "./Components/bell";
import SalesInfo from "./Components/SalesInfo";

function App() {
  return (
    <>
      <div className="App">
        <SideBar />

        <div className="MainContent">
          <SearchBar />
          {/* <Bell /> */}
        </div>

      </div>
    </>
  );
}

export default App;
