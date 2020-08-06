import React, { useState } from 'react';

export default function SocialIcon({ imgSrc, width, height, link }) {
    const [iconSrc, setIconSrc] = useState(imgSrc[0]);
    
    const handleClick = () => {
        window.location.href = link;
    };

    return (
        <img
            src={iconSrc}
            width={width}
            height={height} 
            onMouseOver={() => setIconSrc(imgSrc[1])}
            onMouseOut={() => setIconSrc(imgSrc[0])}
            onClick={handleClick}

            style={{
                marginRight: "15px"
            }}
        />
    );
};

SocialIcon.defaultProps = {
    imgSrc: undefined,
    altSrc: undefined,
    width: 30,
    height: "auto",
    link: "https://abbasaa.github.io"
};