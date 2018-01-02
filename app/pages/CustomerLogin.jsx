import React from 'react'
import Body from "Body";
import CenterContainer from "CenterContainer";
import H1 from "H1";
import P1 from "P1";
import FormBuilder from "FormBuilder";
import ApiContainer from "ApiContainer"

class CustomerLogin extends React.Component {
    render() {
        return (
            <Body>
            <CenterContainer data={{styles: {minHeight: "100%"}}}>
                <H1 data={{text: "Login"}}/>
                <P1 data={{text: "Please login or register if you are new."}}/>
                <FormBuilder data={{"types": ["TextInput", "PasswordInput"], "names": ["Email", "Password"], "submitName": "Submit", "links": ["Register"], "linkNames": ["Register"]}}/>
                <ApiContainer/>
            </CenterContainer>
            </Body>
        );
    }
}

export default CustomerLogin;