import React from 'react'
import {Link} from 'react-router-dom'

import HorizontalContainer from "HorizontalContainer";
import RoundBtn from 'RoundBtn'

let Buttons = ({buttons, links}) => (
    <HorizontalContainer>
        {buttons.map((button, index) => (
            <Link key={index} to={"/" + links[index]}>
                <RoundBtn data={{"text": button}}/>
            </Link>
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