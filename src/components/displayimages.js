import React from "react";


const Displayimages=({images}) => {
    return(
        <div className="images">
            {images && 
            images.map(image => <img   key={image.id} src={image.urls.small} alt="Not Found" />)}
        </div>
    )
}

export default Displayimages;