import React, { Component } from "react";
import { Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Login from "./components/login"
import AddClip from "./components/add-clip.component";
import ClipList from "./components/clip-list.component";
import Profile from "./components/about.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/about"}>Home</Link>
            </li>
            <li>
              <Link to={"/clips"}>Clips</Link>
            </li>
            <li>
              <Link to={"/add"}>Add</Link>
            </li>
           
          </ul>
        </nav>

        <div className="container-body">
          <Routes>
          <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route exact path="/clips" element={<ClipList />} />
            <Route exact path="/add" element={<AddClip />} />
            <Route exact path="/about" element={<Profile />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App
