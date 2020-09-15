import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home/index';
import Header from './pages/Header/index';
import Erro from './pages/Erro';
import Filme from './pages/Filme/index';

const Routes = () =>{
    return (
        <BrowserRouter>
            <Header/>
            <Switch> 
                <Route exact path="/" component = {Home} />
                <Route exact path= "/filme/:id" component= {Filme}/>
                <Route path = "*" component = {Erro}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;