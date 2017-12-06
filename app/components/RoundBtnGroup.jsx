import React from 'react'
import {Link} from 'react-router-dom'

import HorizontalContainer from "HorizontalContainer";
import RoundBtn from 'RoundBtn'

let Buttons = ({buttons, links}) => (
    <HorizontalContainer>
        {buttons.map((button, index) => (
            <RoundBtn key={index} data={{"text": button, "link": links[index]}}/>
        ))}
    </HorizontalContainer>
);

class RoundBtnGroup extends React.Component {
    render() {
        return (
            <Buttons buttons={this.props.data.buttons} links={this.props.data.links}/>
        );
    }
}

export default RoundBtnGroup;