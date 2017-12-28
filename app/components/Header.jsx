import React from 'react'
import {NavLink} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div className="header divider-border">
                <NavLink exact to='/' activeStyle={{fontWeight: 'bold'}} className="nav-btn">MakeCo</NavLink>
                <NavLink to='/about' activeStyle={{fontWeight: 'bold'}} className="nav-btn">About</NavLink>
                <NavLink to='/Login' activeStyle={{fontWeight: 'bold'}} className="nav-btn">Login</NavLink>
            </div>
        );
    }
}

export default Header;