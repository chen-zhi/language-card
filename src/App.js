import React, { Component } from "react";
import "./App.css";
import WordCard from "./components/WordCard/WordCard";
import Menu from "./components/Menu/Menu";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content-wrapper">
          <div className="header">
            <Menu />
          </div>
          <div className="sidebar">
            <SidebarMenu />
          </div>
          <div className="main-content" style={{ margin: "0 50px 100px 0" }}>
            <WordCard />
            <WordCard />
            <WordCard />
            <WordCard />
            <WordCard />
            <WordCard />
            <WordCard />
            <WordCard />
            <WordCard />
            <WordCard />
          </div>
        </div>
        <div className="footer">Made by Zhi</div>
      </div>
    );
  }
}

export default App;
