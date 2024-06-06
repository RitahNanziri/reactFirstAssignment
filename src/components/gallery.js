import React from "react";

class Gallery extends React.Component {
    render() {
        return (
            <div className="Gallery">
                <h1>Gallery</h1>
                <div className="image-container">
                    {/* <img src={require('../image1.JPG')} alt="Picture 1" /> */}
                    <img src={require('../CHANGE COLOR_2.png')} alt="picture1" />
                    {/* <img src={require('../image3.JPG')} alt="Picture 3" /> */}
                    {/* <img src={require('../image4.JPG')} alt="Picture 4" /> */}
                </div>
            </div>
        );
    }
}

export default Gallery;
