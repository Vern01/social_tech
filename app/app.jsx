import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'

import Header from 'Header'
import About from 'About'
import Dashboard from "Dashboard"
import Home from 'Home'
import MakerDashboard from 'MakerDashboard'
import PickMaker from 'PickMaker'
import ProductView from 'ProductView'
import RegisterMakerDesigner from 'RegisterMakerDesigner'
import Test from 'Test'

import 'style-loader!css-loader!BaseCss'

ReactDOM.render((
        <HashRouter>
            <div>
               <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/RegisterMakerDesigner" component={RegisterMakerDesigner}/>
                <Route path="/MakerDashboard" component={MakerDashboard}/>
                <Route path="/Dashboard" component={Dashboard}/>
                <Route path="/Test" component={Test}/>
                <Route path="/PickMaker" component={PickMaker}/>
                <Route path="/ProductView" component={ProductView}/>
                <div className="footer divider-border"/>
            </div>
        </HashRouter>
    ),
  document.getElementById('app')
);
