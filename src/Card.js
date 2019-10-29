import React from 'react';
import './Card.css';

const Card = (props) => {
    return(
        <div className="outer-card">
            {props.type !== 'link' ? 
                <div className="card">
                    <img alt="something" className="card-image" src={props.src} />
                </div>
            :
                <div className="card" style={{backgroundImage: `url(${props.src}`, height: '400px'}}>
                    <a href={props.link}>{props.text}</a>
                </div>
            }
            
        </div>
        
    )
};

export default Card;