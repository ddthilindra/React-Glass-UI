import React, { Component } from "react";
import "./Account.css";
import Sidebar from "../Sidebar/Sidebar";
import {Link}  from "react-router-dom";
import Maincontent from "../MainContent/MainContent";

class Account extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
            <Sidebar/>
            {/* <Link/> */}
            <Maincontent/>
        </div>
      </div>
    );
  }
}

export default Account;