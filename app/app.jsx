import React from 'react'
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';

import Base from 'Base';

import 'style-loader!css-loader!BaseCss'

ReactDOM.render((
        <HashRouter>
            <div>
                <Route exact path="/" component={Base} />
            </div>
        </HashRouter >
    ),
  document.getElementById('app')
);
