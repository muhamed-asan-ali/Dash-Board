import "../App.css";
import React from "react";
import { SideBarData } from "./SideBarData";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const SideBar = () => (
  <div className="SideBar">
    <ul className="SideBarList">
      <p className="title">Medico Sales</p>
      {SideBarData.map((val, key) => (
        <li
          key={key}
          className="row"
          id={window.location.pathname === val.link ? "active" : ""}
          onClick={() => {
            window.location.pathname = val.link;
          }}
        >
          <div id="icon">{val.icon}</div>
          <div id="subtitle">{val.title}</div>
        </li>
      ))}

      <div className="help-icon">
        <HelpOutlineIcon /> 
        <div className="help"> Help </div>
      </div>
    </ul>
  </div> 
);

export default SideBar;
