import React from 'react'

import HorizontalContainer from "HorizontalContainer";
import RoundBtn from 'RoundBtn'

let Buttons = ({buttons}) => (
    <HorizontalContainer>
        {buttons.map((button, index) => (
            <RoundBtn key={index} data={{"text": button}}/>
        ))}
    </HorizontalContainer>
);

class RoundBtnGroup extends React.Component {
    render() {
        let btns = this.props.data.buttons;
        return (
            <Buttons buttons={btns}/>
        );
    }
}

export default RoundBtnGroup;