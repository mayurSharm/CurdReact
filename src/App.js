 import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Edituser from "./components/users/Edituser";
import AddUser from "./components/users/Adduser";
import View from "./components/users/View";


function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar/>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users/add" element={<AddUser/>}/>
          <Route path="/users/edit/:id" element={<Edituser/>}> </Route>
          <Route path="/users/:id" element={<View/>}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;