import "./../../assets/styles/reset.css";
import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "../Home";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import NewIn from "../NewIn";
import NewOut from "../NewOut";
import { useState } from "react";
import UserContext from "./../../contexts/UserContext.jsx";
import axios from "axios";

export default function App() {
    const [token, setToken] = useState("");

    function updateTransactions() {
        const config = {headers: { Authorization: `Bearer ${token}`}};
        const URL_USER = 'http://localhost:5000/user';
        const request = axios.get(URL_USER, config);
        
        request.then(() => console.log("Atualizado."));
        request.catch(error => console.log(error));
    }

    return (
        <UserContext.Provider value={{token, setToken, updateTransactions}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/new-in" element={<NewIn/>}/>
                    <Route path="/new-out" element={<NewOut/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>  
    );
}