
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "./Home.js";


import Addtask from "./components/add-task.component";
import TasksList from "./components/task.list.component";
import Task from "./components/task.component";

 class App extends Component {
  render() {
  <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>

    return (
      
      <div className = "App">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/Home.js" className="navbar-brand">
             Home
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link to={"/tasks"} className="nav-link">
              Tasks
            </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

      <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tasks"]} component={TasksList} />
            <Route exact path="/add" component={Addtask} />
            <Route path="/tasks/:id" component={Task} />
          </Switch>
        </div>
  

      </div>
    );
  }
}

export default App;
