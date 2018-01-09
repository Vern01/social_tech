import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from 'actions';

class Header extends React.Component {
	constructor() {
		super();

		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout() {
		var {dispatch, user} = this.props;

		if (user.length == 0) {
			dispatch(actions.startLogoutUser());
		}
	}

    render() {
		var {user} = this.props;

		if (user.length == 0) {
			user = 'Login';
		} else {
			user = 'Logout ' + user;
		}
        return (
            <div className="header divider-border">
                <NavLink exact to='/' activeStyle={{fontWeight: 'bold'}} className="nav-btn">MakeCo</NavLink>
                <NavLink to="/Search" activeStyle={{fontWeight: 'bold'}} className="nav-btn">Search</NavLink>
                <NavLink to="/Dashboard" activeStyle={{fontWeight: 'bold'}} className="nav-btn">Dashboard</NavLink>
                <div className="expander"/>
                <NavLink to='/Login' activeStyle={{fontWeight: 'bold'}} className="nav-btn" onClick={this.handleLogout}>{user}</NavLink>
            </div>
        );
    }
}

export default connect(
	(state) => {
		return {
			user: state.user
		}
	})(Header);
