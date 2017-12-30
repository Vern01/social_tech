import React from 'react'

import Body from "Body";
import CenterContainer from "CenterContainer";
import SwitchButtonGroup from "SwitchButtonGroup";
import H2 from "H2";
import P1 from "P1";
import FormBuilder from "FormBuilder";

// let array = {
//     "name": "body",
//     "data": "",
//     "children": [{
//         "name": "centercontainer",
//         "data": {"styles": {minHeight: "100%"}},
//         "children": [{
//             "name": "SwitchButtonGroup",
//             "data": {"buttons": ["Maker", "Designer"], "links": ["PickMaker", ""]}
//         }, {
//             "name": "h2",
//             "data": {"text": "Register to become a Maker"}
//         }, {
//             "name": "p1",
//             "data": {
//                 "text": "This is some text, for test purposes. The paragraph " +
//                 "needs to be long ish, so type type type. da da something longer. " +
//                 "And some more texts da boom ba da pa."
//             }
//         }, {
//             "name": "p1",
//             "data": {
//                 "text": "This is some text, for test purposes. The paragraph " +
//                 "needs to be long ish, so type type type. da da something longer."
//             }
//         }, {
//             "name": "p1",
//             "data": {
//                     "text": "This is some text, for test purposes. The paragraph " +
//                     "needs to be long ish, so type type type. da da something longer. " +
//                     "And some more texts da boom."
//             }
//         }, {
//             "name": "h2",
//             "data": {"text": "Details:"}
//         }, {
//             "name": "FormBuilder",
//             "data": {
//                 "types": ["TextInput", "TextInput", "TextArea"], "names": ["Name", "Email", "Description"],
//                 "submitName": "Submit", "links": ["MakerDashboard"], "linkNames": ["Dashboard-TestOnly"]
//             }
//         }]
//     }]
// };

class RegisterMakerDesigner extends React.Component {
    render() {
        return (
            <Body>
            <CenterContainer data={{"styles": {minHeight: "100%"}}}>
                <SwitchButtonGroup data={{"buttons": ["Maker", "Designer"], "links": ["PickMaker", "DesignerDashboard"]}}/>
                <H2 data={{"text": "Register to become a Maker"}}/>
                <P1 data={{"text": "This is some text, for test purposes. The paragraph needs to be long ish, so type type type. da da something longer. And some more texts da boom ba da pa."}}/>
                <P1 data={{"text": "This is some text, for test purposes. The paragraph needs to be long ish, so type type type. da da something longer."}}/>
                <P1 data={{"text": "This is some text, for test purposes. The paragraph needs to be long ish, so type type type. da da something longer. And some more texts da boom."}}/>
                <H2 data={{"text": "Details:"}}/>
                <FormBuilder data={{"types": ["TextInput", "TextInput", "TextArea"], "names": ["Name", "Email", "Description"], "submitName": "Submit", "links": [], "linkNames": []}}/>
            </CenterContainer>
            </Body>
        );
    }
}

export default RegisterMakerDesigner;