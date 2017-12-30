import React from 'react'
import Body from "Body";
import CenterContainer from "CenterContainer";
import H1 from "H1";
import SwitchButtonGroup from "SwitchButtonGroup";
import ImageGroup from "ImageGroup";
import RoundBtn from 'RoundBtn';

class DesignerDashboard extends React.Component {
    render() {
        return (
            <Body>
            <CenterContainer>
                <H1 data={{text: "Designer Dashboard"}}/>
                <SwitchButtonGroup data={{buttons: ["My Account Info", "Designs", "Requests"], links: ["", "", ""]}}/>
                <ImageGroup data={{images: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], links: []}}/>
                <RoundBtn data={{text: "Upload", link: "NewDesign"}}/>
            </CenterContainer>
            </Body>
        );
    }
}

export default DesignerDashboard;