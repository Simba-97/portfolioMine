import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}})
    return (
        <animated.div className="H-card-info" style={style}>
            <p className="H-card-title">{props.title}</p>
            <p className="H-card-subtitle">{props.subtitle}</p>
            <a href ={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>

    );
}

export default CardInfo;
