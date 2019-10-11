import React from 'react';


function Video (props) {
    const {url, title, start, end, mute} = props.video;
    return (
        <iframe id={title} title={title} width="700" height="550" src={`https://www.youtube.com/embed/${url}?autoplay=1&start=${start}&end=${end}&mute=${mute}&controls=0`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}
 

export default Video;