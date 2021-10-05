import React, { useState } from 'react';

const menuItemStyle = {
    marginBottom: "7px",
    paddingLeft: "26px",
    listStyle: "none"
};

export default function MenuItem(props) {
    return <li style={menuItemStyle}>{props.text}</li>
}

