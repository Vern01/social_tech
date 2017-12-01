import React from 'react'

class Paragraph extends React.Component {
    render() {
        return (
            <div className="p">
                {this.props.children}
            </div>
        );
    }
}

export default Paragraph;