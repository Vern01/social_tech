//Packages
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux';

//Pages
import Header from 'Header'
import CustomerLogin from 'CustomerLogin'
import CustomerRegister from 'CustomerRegister'
import Customize from 'Customize'
import Dashboard from "Dashboard"
import Home from 'Home'
import MakerDashboard from 'MakerDashboard'
import PickMaker from 'PickMaker'
import ProductView from 'ProductView'
import RegisterMaker from 'RegisterMaker'
import RegisterDesigner from 'RegisterDesigner'
import DesignerDashboard from 'DesignerDashboard'
import NewDesign from "NewDesign";
import Search from 'Search'

//Redux
var store = require('configureStore').configure();

//Styles
import 'style-loader!css-loader!BaseCss'

//reactHistory
import reactHistory from 'reactHistory'

ReactDOM.render((
      <Provider store={store}>
        <Router history={reactHistory}>
            <div>
                <Header status='Register/Login'/>
                <Route exact path="/" component={Home}/>
                <Route path="/RegisterMaker" component={RegisterMaker}/>
                <Route path="/RegisterDesigner" component={RegisterDesigner}/>
                <Route path="/MakerDashboard" component={MakerDashboard}/>
                <Route path="/Dashboard" component={Dashboard}/>
                <Route path="/PickMaker" component={PickMaker}/>
                <Route path="/ProductView" component={ProductView}/>
                <Route path="/Login" component={CustomerLogin}/>
                <Route path="/Register" component={CustomerRegister}/>
                <Route path="/DesignerDashboard" component={DesignerDashboard}/>
                <Route path="/NewDesign" component={NewDesign}/>
                <Route path="/Search" component={Search}/>
                <Route path="/Customize" component={Customize}/>
                <div className="footer divider-border"/>
            </div>
        </Router>
      </Provider>
    ),
    document.getElementById('app')
);
