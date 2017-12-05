import React from 'react'

class SwitchButton extends React.Component {
    render() {
        return (
            <div className="switch-button">{this.props.data.text}</div>
        );
    }
}

export default SwitchButton;