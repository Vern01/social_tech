import React from 'react'

import RecursivePageBuilder from 'RecursivePageBuilder'

let array = {
    "name": "body",
    "data": "",
    "children": [{
        "name": "centercontainer",
        "data": {"styles": {height: "100%"}},
        "children": [{
            "name": "SwitchButtonGroup",
            "data": {"buttons": ["Maker", "Designer"], "links": ["", ""]}
        }, {
            "name": "h2",
            "data": {"text": "Register to become a Maker"}
        }, {
            "name": "p1",
            "data": {
                "text": "This is some text, for test purposes. The paragraph " +
                "needs to be long ish, so type type type. da da something longer. " +
                "And some more texts da boom ba da pa."
            }
        }, {
            "name": "p1",
            "data": {
                "text": "This is some text, for test purposes. The paragraph " +
                "needs to be long ish, so type type type. da da something longer."
            }
        }, {
            "name": "p1",
            "data": {
                    "text": "This is some text, for test purposes. The paragraph " +
                    "needs to be long ish, so type type type. da da something longer. " +
                    "And some more texts da boom."
            }
        }, {
            "name": "h2",
            "data": {"text": "Details:"}
        }, {
            "name": "FormBuilder",
            "data": {
                "types": ["TextInput", "TextInput", "TextArea"], "names": ["Name", "Email", "Description"],
                "submitName": "Submit", "links": [], "linkNames": []
            }
        }]
    }]
};

class RegisterMakerDesigner extends React.Component {
    render() {
        return (
            <RecursivePageBuilder root={array}/>
        );
    }
}

export default RegisterMakerDesigner;