import React, { useState } from "react";
import { MDBCol } from "mdb-react-ui-kit";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Invoice ID", width: 220},
  { field: "firstName", headerName: "Date", width: 220 },
  { field: "Customer", headerName: "Customer", width: 220 },
  { field: "pay", headerName: "Payable Amount", width: 220 },
  { field: "paid", headerName: "Paid Amount", width: 220 },
  { field: "DueName", headerName: "Due", width: 220 },
];

const rows = [
  {
    id: "#AHGA68",
    firstName: "23/09/2022",
    Customer: "Jacob Marcus",
    pay: "$100",
    paid: "$000",
    DueName: "$000",
  },
  {
    id: "#AHGA68",
    firstName: "23/09/2022",
    Customer: "Jacob Marcus",
    pay: "$100",
    paid: "$000",
    DueName: "$000",
  },
  {
    id: "#AHGA68",
    firstName: "23/09/2022",
    Customer: "Jacob Marcus",
    pay: "$100",
    paid: "$000",
    DueName: "$000",
  },
  {
    id: "#AHGA68",
    firstName: "23/09/2022",
    Customer: "Jacob Marcus",
    pay: "$100",
    paid: "$000",
    DueName: "$000",
  },
  {
    id: "#AHGA68",
    firstName: "23/09/2022",
    Customer: "Jacob Marcus",
    pay: "$100",
    paid: "$000",
    DueName: "$000",
  },
  {
    id: "#AHGA68",
    firstName: "23/09/2022",
    Customer: "Jacob Marcus",
    pay: "$100",
    paid: "$000",
    DueName: "$000",
  },
  {
    id: "#AHGA68",
    firstName: "23/09/2022",
    Customer: "Jacob Marcus",
    pay: "$100",
    paid: "$000",
    DueName: "$000",
  },
  {
    id: "#AHGA68",
    firstName: "23/09/2022",
    Customer: "Jacob Marcus",
    pay: "$100",
    paid: "$000",
    DueName: "$000",
  },
  {
    id: "#AHGA68",
    firstName: "23/09/2022",
    Customer: "Jacob Marcus",
    pay: "$100",
    paid: "$000",
    DueName: "$000",
  },
  {
    id: "#AHGA68",
    firstName: "23/09/2022",
    Customer: "Jacob Marcus",
    pay: "$100",
    paid: "$000",
    DueName: "$000",
  },
];

const SearchBar = () => {
  return (
    <div className="SearchBox">
      <div className="search-bell">
      <MDBCol md="6" className="form-control1">
          <input
            className="input-disapp"
            type="text"
            placeholder="Search"
          />
      </MDBCol>
      <div className="bella">
            <div class="notification">
              <i className="fa fa-bell-o"></i>
              <span class="badge"></span>
            </div>
          </div>
      </div>

      <span className="title-details">Sales Information</span>

      <div className="rowing">
        <div className="inputBX1">
          <Form.Label className="title-label">Customer</Form.Label>
          <br></br>
          <Form.Control
            className="input-in"
            required
            type="text"
            placeholder="Enter Costumer Name"
          />
        </div>

        <div className="inputBX2">
          <Form.Label className="title-label">Invoice ID</Form.Label>
          <br></br>
          <Form.Control
            className="input-in"
            required
            type="text"
            placeholder="Enter Invoice ID"
          />
        </div>

        <div className="inputBX3">
          <Form.Label className="title-label">Start Date</Form.Label>
          <br></br>
          <Form.Control
            className="input-in"
            required
            type="text"
            placeholder="Start Date"
          />
        </div>

        <div className="inputBX4">
          <Form.Label className="title-label">End Date</Form.Label>
          <br></br>
          <Form.Control
            className="input-in"
            required
            type="text"
            placeholder="End Date"
          />
        </div>
      </div>

      <div className="data-rows" style={{ height: 550, width: "99%" }}>
        <DataGrid className="colorOfData" rows={rows} columns={columns}  checkboxSelection />
      </div>
    </div>
  );
};

export default SearchBar;
