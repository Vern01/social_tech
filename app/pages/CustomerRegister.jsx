import React from 'react'
import Body from "Body";
import CenterContainer from "CenterContainer";
import H1 from "H1";
import P1 from "P1";
import FormBuilder from "FormBuilder";
import ApiContainer from "ApiContainer"

class CustomerRegister extends React.Component {
    render() {
        return (
            <Body>
            <CenterContainer data={{styles: {minHeight: "100%"}}}>
                <H1 data={{text: "Register"}}/>
                <P1 data={{text: "Please register to create an account."}}/>
                <FormBuilder data={{"types": ["TextInput", "PasswordInput", "PasswordInput"], "names": ["Email", "Password", "Retype Password"], "submitName": "Submit", "links": ["Login"], "linkNames": ["Login"]}}/>
                <ApiContainer/>
            </CenterContainer>
            </Body>
        );
    }
}

export default CustomerRegister;