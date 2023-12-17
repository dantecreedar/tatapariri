import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/home/home';
import About from '../components/about/about';

const ReactRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                </Routes>
            </Router>
        </>
    )
}

export default ReactRouter;