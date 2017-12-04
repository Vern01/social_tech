import React from 'react'

class HorizontalContainer extends React.Component {
    render() {
        return (
            <button className="round-btn full-border len38">
                {this.props.data.text}
            </button>
        );
    }
}

export default HorizontalContainer;