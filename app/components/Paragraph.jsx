import React from 'react'

class Paragraph extends React.Component {
    render() {
        return (
            <div className="p">
                {this.props.data.text}
            </div>
        );
    }
}

export default Paragraph;