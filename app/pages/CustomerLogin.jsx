import React from 'react';
import {connect} from 'react-redux';

import Body from "Body";
import CenterContainer from "CenterContainer";
import H1 from "H1";
<<<<<<< HEAD
import Paragraph from "Paragraph";
import ApiContainer from "ApiContainer";
import SwitchButtonContainer from 'SwitchButtonContainer';
import SwitchButton from 'SwitchButton';

import * as actions from 'actions';
=======
import P1 from "P1";
import FormBuilder from "FormBuilder";
import ApiContainer from "ApiContainer"
>>>>>>> 7d53de5acdae9cb7061ae412bfa74fe6a0f68cb0

class CustomerLogin extends React.Component {
	constructor() {
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

	    var {dispatch} = this.props;
	    var username = this.refs.username.value;
	    var password = this.refs.password.value;

	    if (username.length > 0 && password.length > 0) {
	      this.refs.username.value = '';
	      this.refs.password.value = '';
	      dispatch(actions.startLoginUser(username, password));
	    } else if (username.length == 0) {
	      this.refs.username.focus();
	    } else {
	      this.refs.password.focus();
	    }
	}

	render() {
        return (
            <Body>
            <CenterContainer data={{styles: {minHeight: "100%"}}}>
                <H1 data={{text: "Login"}}/>
<<<<<<< HEAD
                <Paragraph data={{text: "Please login or register to create an account."}}/>
                <form onSubmit={this.handleSubmit} className="form">
                  <div>
                    <div className="form-label">Email:</div>
                    <input className="form-input" type="text" name="Email" ref="username"/>
                  </div>
                  <div>
                    <div className="form-label">Password:</div>
                    <input type="password" className="form-input" name="Password" ref="password"/>
                  </div>
				  <SwitchButtonContainer>
					  <button type="submit" className="switch-button">
						  Login
					  </button>
					  <button type="submit" className="switch-button">
						  Register
					  </button>
				  </SwitchButtonContainer>
                </form>
=======
                <P1 data={{text: "Please login or register if you are new."}}/>
                <FormBuilder data={{"types": ["TextInput", "PasswordInput"], "names": ["Email", "Password"], "submitName": "Submit", "links": ["Register"], "linkNames": ["Register"]}}/>
>>>>>>> 7d53de5acdae9cb7061ae412bfa74fe6a0f68cb0
                <ApiContainer/>
            </CenterContainer>
            </Body>
        );
    }
}

//<FormBuilder data={{"types": ["TextInput", "PasswordInput"], "names": ["Email", "Password"], "submitName": "Login", "links": [""], "linkNames": ["Register"]}}/>

export default connect()(CustomerLogin);
