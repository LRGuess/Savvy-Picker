import React, {useState} from 'react';



function Icons({icon, staticIcon, isHovered, alt, width, height}) {
    return (
        <img src={isHovered ? icon : staticIcon} alt= {alt} style={{ width: width, height: height, padding: 0, margin:0 }} />
    );
}

export default Icons;
