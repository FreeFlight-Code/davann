import React from 'react';


function Text (props) {
    const { text, title } = props.text;
    return (
        <div className='image-text' id={title}>{text}</div>
    )
}
 

export default Text;