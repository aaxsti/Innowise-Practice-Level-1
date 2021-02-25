import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import TasksPage from "./components/TasksPage/TasksPage";
import TaskInfo from "./components/TasksPage/TaskInfo/TaskInfo";

const App = () => {
    return (
        <div className="main-app-wrapper">
            <Switch>
                <Route path='/tasks' render={() => <TasksPage/>}/>
                <Route path='/taskInfo' render={() => <TaskInfo/>}/>
                <Route path='/signIn' render={() => <SignIn/>}/>
                <Route path='/register' render={() => <Register/>}/>
                <Redirect to="/tasks"/>
            </Switch>
        </div>
    );
}

export default App;