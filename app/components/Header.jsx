import React from 'react'
import {NavLink} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div className="header divider-border">
                <NavLink exact to='/' activeStyle={{fontWeight: 'bold'}} className="nav-btn">MakeCo</NavLink>
                <NavLink to="/Search" activeStyle={{fontWeight: 'bold'}} className="nav-btn">Search</NavLink>
                <NavLink to="/Dashboard" activeStyle={{fontWeight: 'bold'}} className="nav-btn">Dashboard</NavLink>
                <div className="expander"/>
                <NavLink to='/Login' activeStyle={{fontWeight: 'bold'}} className="nav-btn">{this.props.status}</NavLink>
            </div>
        );
    }
}

export default Header;
