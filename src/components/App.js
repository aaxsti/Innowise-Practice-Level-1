import React, {useEffect, useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import '../App.css';
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import TasksPage from "./TasksPage/TasksPage";
import TaskInfo from "./TasksPage/TaskInfo/TaskInfo";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import app from "../firebase";

const App = () => {
    const [user, setUser] = useState({});

    useEffect(() => {


    }, [])

    return (
        <div className="main-app-wrapper">
            <Switch>
                <Route path='/tasks' component={TasksPage}/>
                <Route path='/taskinfo/:id?' component={TaskInfo}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={SignUp}/>
                <Redirect to="/tasks"/>
            </Switch>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;