import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Admin from './components/Admin_login';
import About from './components/About_Us';
import List from './components/List';
import Contact from './components/Contact_Us';
import Homepage from './components/Homepage';
import Manage from './components/Manage';
import Blog from './components/Blog';


export default (
<Route path="/" component = {Homepage} >
<IndexRoute component ={Homepage}/>
<Route path="aboutus" component = {About}/>
<Route path="blog" component = {Blog}/>
<Route path="contactus" component = {Contact} />
<Route path="list" component = {List} />
<Route path="contactus" component = {Contact} />
    </Route>
);


