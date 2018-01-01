//Packages
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux';

//Pages
import Header from 'Header'
import About from 'About'
import CustomerLogin from 'CustomerLogin'
import Dashboard from "Dashboard"
import Home from 'Home'
import MakerDashboard from 'MakerDashboard'
import PickMaker from 'PickMaker'
import ProductView from 'ProductView'
import RegisterMakerDesigner from 'RegisterMakerDesigner'
import Test from 'Test'
import DesignerDashboard from 'DesignerDashboard'
import NewDesign from "NewDesign";
import Search from 'Search'

//Redux
var store = require('configureStore').configure();

//Styles
import 'style-loader!css-loader!BaseCss'

ReactDOM.render((
      <Provider store={store}>
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
                <Route path="/Login" component={CustomerLogin}/>
                <Route path="/DesignerDashboard" component={DesignerDashboard}/>
                <Route path="/NewDesign" component={NewDesign}/>
                <Route path="/Search" component={Search}/>
                <div className="footer divider-border"/>
            </div>
        </HashRouter>
      </Provider>
    ),
  document.getElementById('app')
);
