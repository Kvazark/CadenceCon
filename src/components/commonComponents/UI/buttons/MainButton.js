import React from 'react';
import './mainButton.scss'

const MainButton = ({children, backColor, onClick}) => {
    return (
        <button className='mainButton' style={{backgroundColor: backColor}}
                onClick={onClick}>
            {children}
        </button>
    );
};

export default MainButton;