import React from 'react'

import SwitchButton from 'SwitchButton'

let SwitchButtons = ({buttons}) => (
    <div className="switch-button-container full-border">
        {buttons.map((button, index) => (
            <SwitchButton key={index} data={{"text": button}}/>
        ))}
    </div>
);

class SwitchButtonGroup extends React.Component {
    render() {
        return (
                <SwitchButtons buttons={this.props.data.buttons}/>
        );
    }
}

export default SwitchButtonGroup;