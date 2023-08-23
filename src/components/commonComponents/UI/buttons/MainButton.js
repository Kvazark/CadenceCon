import React from 'react';
import './mainButton.scss'

const MainButton = ({children, backColor, onClick, icon}) => {
    return (
        <button className='mainButton' style={{backgroundColor: backColor}}
                onClick={onClick}>
            <span>{icon}</span>
            {children}
        </button>
    );
};

export default MainButton;