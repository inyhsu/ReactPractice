import React, { useState, useRef, useCallback, useMemo } from 'react';
import MenuItem from '../component/MenuItem';
import Menu from '../component/Menu';
import { OpenContext, SetOpenContext } from '../context/ControlContext';

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
    }, [renderCounter])

    const menuItemArr = useMemo(() => {
        return menuItemWording.map((wording) => <MenuItem text={wording} />)
    }, []);

    return (
        <OpenContext.Provider
            value={isOpen}
        >
            <SetOpenContext.Provider value={setIsOpen}>
                <Menu title={"賴可"}>
                    {menuItemArr}
                </Menu>
            </SetOpenContext.Provider>
        </OpenContext.Provider>
    );
}

export default MenuPage;