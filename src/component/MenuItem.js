import React, { useState, useContext, memo } from 'react';
import { SetOpenContext } from '../context/ControlContext';

const menuItemStyle = {
    marginBottom: "7px",
    paddingLeft: "26px",
    listStyle: "none"
};

function MenuItem(props) {
    const setIsOpen  = useContext(SetOpenContext);
    console.log('MenuItem Render')
    return <li
        style={menuItemStyle}
        onClick={()=>{setIsOpen(false)}}
    >
        {props.text}
    </li>
}

export default MenuItem