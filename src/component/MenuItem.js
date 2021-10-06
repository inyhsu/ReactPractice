import React, { useState, useContext, memo } from 'react';
import { OpenContext } from '../context/ControlContext';

const menuItemStyle = {
    marginBottom: "7px",
    paddingLeft: "26px",
    listStyle: "none"
};

function MenuItem(props) {
    //const isOpenUtil = useContext(OpenContext);
    console.log('MenuItem Render')
    return <li
        style={menuItemStyle}
        onClick={() => { props.handleClick() }}
    >
        {props.text}
    </li>
}

export default memo(MenuItem)