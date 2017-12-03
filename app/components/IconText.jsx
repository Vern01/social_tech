import React from 'react'

class IconText extends React.Component {
    render() {
        return (
            <div className="center-container">
                <div className="icon-text-container">
                    <img src={this.props.image} alt="" className="icon-text-icon"/>
                        <div className="icon-text-text">{this.props.text}</div>
                </div>
            </div>
        );
    }
}

export default IconText;