import React from 'react'

class HDivider extends React.Component {
    render() {
        return (
            <div className="h-divider" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export default HDivider;