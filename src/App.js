import React, { component } from "react";
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
     <Nav/>
     <Profile/>
    </div>);
}
export default App;