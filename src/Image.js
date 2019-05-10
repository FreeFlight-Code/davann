import React from 'react';


function Image (props) {
    const { url, title } = props.image;
    return (
        <img id={title} alt='floating rotating image' src={url}></img>
    )
}
 

export default Image;