import React from 'react';
import './App.css';
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
import NamePage from "./NamePage";
import Header from "./Header";

function App() {
    return (
        <div className="app">
            <Header/>
            <div className="content">
                <Router>
                    <Route path="/name" exact component={NamePage}/>
                </Router>
            </div>
        </div>
    );
}

export default App;
