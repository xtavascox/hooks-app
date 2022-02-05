import React from 'react';
import { AboutScreen } from './AboutScreen.tsx';
import { LoginScreen } from './LoginScreen.tsx';
import { HomeScreen } from './HomeScreen.tsx';
import { NavBar } from './NavBar.tsx';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { NotFound } from './NotFound.tsx';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div className='container'>
                <Routes>
                    <Route path='/' element={<HomeScreen />}></Route>
                    <Route path='/about' element={<AboutScreen />}></Route>
                    <Route path='/login' element={<LoginScreen />}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>

                </div>
            </div>
        </Router>
    );
};
