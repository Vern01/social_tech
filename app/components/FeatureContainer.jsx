import React from 'react'

let Images = ({images}) => (
    <div className="feature-body">
        {images.map((image, id) => (
            <div key={id} className="center-container">
                <img src={image} alt="" className="image"/>
            </div>
        ))}
    </div>
);

class FeatureContainer extends React.Component {
    render() {
        return (
            <div className="feature-container">
                <div className="feature-title-bar">
                    <div className="feature-title">{this.props.title}</div>
                </div>
                <Images images={this.props.images}/>
            </div>
        );
    }
}

export default FeatureContainer;