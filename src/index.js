import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Admin from './components/Admin_login';
import About from './components/About_Us';
import List from './components/List';
import Contact from './components/Contact_Us';
import Homepage from './components/Homepage';
import Manage from './components/Manage';
import Blog from './components/Blog';
import Product from './components/Product';


import registerServiceWorker from './registerServiceWorker';


    ReactDOM.render(
        <BrowserRouter>
    <div>
        
    <Switch>
    <Route path="/list/:id" component = {Product} />
    <Route exact path="/" component = {Homepage} />
    <Route path="/aboutus" component = {About}/>
    <Route path="/blog" component = {Blog}/>
    <Route path="/contactus" component = {Contact} />
    <Route path="/list" component = {List} />
    <Route path="/adminlogin" component = {Admin}/>
    <Route path="/adminlogin/manage" component = {Manage}/>
    
    
    
    </ Switch>
    </div>
    
    </BrowserRouter>, 
	document.getElementById('root')
);

registerServiceWorker();
