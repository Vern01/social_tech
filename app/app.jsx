import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'

import Header from 'Header'
import Body from 'Body'
import Home from 'Home'
import About from 'About'

import 'style-loader!css-loader!BaseCss'

ReactDOM.render((
        <HashRouter>
            <div>
               <Header/>
                <Body>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </Body>
                <div className="footer divider-border" />
            </div>
        </HashRouter>
    ),
  document.getElementById('app')
);
