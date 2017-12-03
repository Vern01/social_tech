import React from 'react'

class HorizontalContainer extends React.Component {
    render() {
        return (
            <button className="round-btn full-border len38">
                {this.props.children}
            </button>
        );
    }
}

export default HorizontalContainer;