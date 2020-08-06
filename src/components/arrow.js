import React, { useState } from 'react';

import down_arrow from '../static/downArrow.svg';
import pink_arrow from '../static/downArrowPink.svg';

export default function Arrow({ imgSrc, width, height, scrollLoc, hoverSrc }) {
    const [arrowSrc, setArrowSrc] = useState(imgSrc);
    
    const handleClick = () => {
        window.scrollTo({
            top: scrollLoc, 
            behavior: "smooth"
        });
    };

    return (
        <img 
            src={arrowSrc}
            width={width}
            height={height}
            onClick={handleClick}
            onMouseOver={() => setArrowSrc(hoverSrc)}
            onMouseOut={() => setArrowSrc(imgSrc)}
        />
    );
};

Arrow.defaultProps = {
    imgSrc: down_arrow,
    width: 50,
    height: "auto",
    scrollLoc: 1000,
    hoverSrc: pink_arrow
};