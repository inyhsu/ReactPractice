import React, { useState, useRef, useCallback, useMemo } from 'react';
import MenuItem from '../component/MenuItem';
import Menu from '../component/Menu';
import { OpenContext } from '../context/ControlContext';

let menuItemWording = [
    "Like的發問",
    "Like的回答",
    "Like的文章",
    "Like的留言"
];

const MenuPage = () => {
    const [isOpen, setIsOpen] = useState(true);
    /* 定義counter */
    const renderCounter = useRef(0);
    renderCounter.current++;

    /* 定義列印函式 */
    const handleClick = useCallback(() => {
        console.log("counter is " + renderCounter.current);
    },[renderCounters])

    let menuItemArr = useMemo(() => {
        menuItemWording.map((wording) => {
            return <MenuItem text={wording} handleClick={handleClick}/>
        });
    }) 

    return (
        <OpenContext.Provider
            value={{
                openContext: isOpen,
                setOpenContext: setIsOpen
            }}
        >
            <Menu title={"賴可"}>
                {menuItemArr}
            </Menu>
        </OpenContext.Provider>
    );
}

export default MenuPage;