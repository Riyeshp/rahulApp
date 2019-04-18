import React, { Component } from "react";
import "./style.css";
import Sidebar from "./Sidebar";
import Data from "./DatagridView";
class Main extends Component {
  render() {
    return (
      <div className="main">
        <Sidebar />
        <Data className="grid-width" />
      </div>
    );
  }
}

export default Main;
