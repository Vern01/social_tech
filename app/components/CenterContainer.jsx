import React from 'react'

class CenterContainer extends React.Component {
    render() {
        return (
            <div className="center-container">
                {this.props.children}
            </div>
        );
    }
}

export default CenterContainer;