import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import TasksPage from "./components/TasksPage/TasksPage";

const App = () => {
    return (
        <div className="main-app-wrapper">
            <div>
                <div>
                    <Switch>
                        <Route path='/signIn' render={() => <SignIn/>}/>
                        <Route path='/register' render={() => <Register/>}/>
                        <Route path='/tasks' render={() => <TasksPage/>}/>
                        <Redirect to="/tasks"/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;