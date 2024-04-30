// Card.jsx
import React from 'react';
import backCard from "../assets/backCard.jpg";

function Card({ active, done, onClick, src }) {
    return (
        <div>
            <div 
                onClick={() => !done && onClick()}
                className={`relative card ${active ? 'cardFlip' : ''}`}
            >
                <div className='front'>
                    <img src={backCard} alt="back of card" className="w-60 h-96" />
                </div>
                <div className="absolute top-0 back">
                    <img src={src} alt="front of card" className="w-60 h-96" />
                </div>
            </div>
        </div>
    );
}

export default Card;
