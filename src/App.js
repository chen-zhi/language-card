import React, { Component } from "react";
import "./App.css";
import WordCard from "./components/WordCard/WordCard";
import Menu from "./components/Menu/Menu";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-wrapper">
          <Menu />
          <div className="main-content">
            <div className="sidebar">
              <SidebarMenu />
            </div>
            <div
              className="card-container"
              style={{ margin: "0 50px 100px 0" }}
            >
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
        </div>
        <footer>
          <div>Made by Zhi</div>
        </footer>
      </div>
    );
  }
}

export default App;
