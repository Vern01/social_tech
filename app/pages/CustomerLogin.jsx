import React from 'react'
import Body from "Body";
import CenterContainer from "CenterContainer";
import H1 from "H1";
import Paragraph from "Paragraph";
import FormBuilder from "FormBuilder";
import ApiContainer from "ApiContainer"

class CustomerLogin extends React.Component {
    render() {
        return (
            <Body>
            <CenterContainer data={{styles: {minHeight: "100%"}}}>
                <H1 data={{text: "Login"}}/>
                <Paragraph data={{text: "Please login or register to create an account."}}/>
                <FormBuilder data={{"types": ["TextInput", "PasswordInput"], "names": ["Email", "Password"], "submitName": "Login", "links": [""], "linkNames": ["Register"]}}/>
                <ApiContainer/>
            </CenterContainer>
            </Body>
        );
    }
}

export default CustomerLogin;