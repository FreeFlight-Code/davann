import React from 'react';

export default function (props){
    const title = 'Annette';
    // console.log(title.split(''))
    var container = document.getElementById('headerContainer');
    // console.log(document.querySelector('#headerContainer'));
    // const span = document.createElement('span').innerHTML = title;
    // container.appendChild(span)
    console.log(container)

    return (
        <div id='headerContainer'>
            <span className='headerTitle'>D</span>
            <span className='headerTitle'>e</span>
            <span className='headerTitle'>a</span>
            <span className='headerTitle'>r</span>
            <span className='headerTitle'>e</span>
            <span className='headerTitle'>s</span>
            <span className='headerTitle'>t</span>
            <span className='headerTitle'> </span>
            <span className='headerTitle'>A</span>
            <span className='headerTitle'>n</span>
            <span className='headerTitle'>n</span>
            <span className='headerTitle'>e</span>
            <span className='headerTitle'>t</span>
            <span className='headerTitle'>t</span>
            <span className='headerTitle'>e</span>
            <span className='headerTitle'>,</span>
        </div>
    )
}