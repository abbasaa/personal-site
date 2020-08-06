import React, { useState } from 'react';

const ExpandButton = ({ imgSrc, toggleSrc, width, height }) => {
    const [buttonSrc, setButtonSrc] = useState(imgSrc[0]); 
    
    return (
        <img
            src={buttonSrc}
            width={width}
            height={height}
            onMouseOver={() => setButtonSrc(imgSrc[1])} 
            onMouseOut={() => setButtonSrc(imgSrc[0])} 
            onClick={toggleSrc}
        />
    );
};

export default ExpandButton;