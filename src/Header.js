import React from 'react';

export default function (props){
    const title = props.text;
    // console.log(title.split(''))
    var container = document.getElementById('headerContainer');
    // console.log(document.querySelector('#headerContainer'));
    // const span = document.createElement('span').innerHTML = title;
    // container.appendChild(span)
    console.dir(document)

    return (
        <div id='headerContainer'>
            <span className='headerTitle'>D</span>
            <span className='headerTitle'>e</span>
            <span className='headerTitle'>a</span>
            <span className='headerTitle'>r</span>
            <span className='headerTitle'> </span>
            <span className='headerTitle'>D</span>
            <span className='headerTitle'>r</span>
            <span className='headerTitle'>e</span>
            <span className='headerTitle'>a</span>
            <span className='headerTitle'>m</span>
            <span className='headerTitle'> </span>
            <span className='headerTitle'>G</span>
            <span className='headerTitle'>i</span>
            <span className='headerTitle'>r</span>
            <span className='headerTitle'>l</span>
            <span className='headerTitle'>,</span> 

        </div>
        )
    }