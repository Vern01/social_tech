import React from 'react'

let Images = ({images}) => (
    <div className="image-group">
        {images.map((image, index) => (
            <img key={index} src={image} alt="" className="image"/>
        ))}
    </div>
);

class ImageGroup extends React.Component {
    render() {
        return (
            <div className="image-container">
                <div className="image-category-container"></div>
                <Images images={this.props.data.images} />
            </div>
        );
    }
}

export default ImageGroup;