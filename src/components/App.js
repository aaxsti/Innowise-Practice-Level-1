import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import '../App.css';
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import TasksPage from "./TasksPage/TasksPage";
import TaskInfo from "./TasksPage/TaskInfo/TaskInfo";

const App = () => {
    return (
        <div className="main-app-wrapper">
                <Switch>
                    <Route path='/tasks' component={TasksPage}/>
                    <Route path='/taskinfo' component={TaskInfo}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={SignUp}/>
                    <Redirect to="/tasks"/>
                </Switch>
        </div>
    );
}

export default App;