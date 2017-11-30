import React from 'react'
import {NavLink} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div className="header divider-border">
                <NavLink to='/' activeStyle={{fontWeight: 'bold'}} className="nav-btn">MakeCo</NavLink>
            </div>
        );
    }
}

export default Header;