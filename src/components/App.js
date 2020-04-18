import React from 'react';
import { Router } from '@reach/router';


import {GlobalStyle} from './styles/GlobalStyle';

import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import Footer from './elements/Footer'
import NotFound from './NotFound';

const App = () => (
    <>
        <Header/>
        <Router>
            <Home path="/"/>
            <Movie path="/:movieId" />
            <NotFound default />
        </Router>
        <Footer />        
        <GlobalStyle />
    </>
)

export default App;
