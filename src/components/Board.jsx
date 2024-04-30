// Board.jsx
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Hollande from "../assets/Hollande.jpg";
import Sarkozy from "../assets/Sarkozy.jpg";
import Chirac from "../assets/Chirac.jpg";
import Macron from "../assets/Macron.jpg";

function Board({setScore, setAttempts}) {
    const [cards, setCards] = useState([
        { id: 1, pair: 2, done: false, active: false, src: Hollande },
        { id: 2, pair: 1, done: false, active: false, src: Hollande },
        { id: 3, pair: 4, done: false, active: false, src: Sarkozy },
        { id: 4, pair: 3, done: false, active: false, src: Sarkozy },
        { id: 5, pair: 6, done: false, active: false, src: Macron },
        { id: 6, pair: 5, done: false, active: false, src: Macron },
        { id: 7, pair: 8, done: false, active: false, src: Chirac },
        { id: 8, pair: 7, done: false, active: false, src: Chirac },
    ]);
    const [flippedCards, setFlippedCards] = useState([]);

    const shuffleCards = () => {
        // Flip all cards back to their initial state
        const resetCards = cards.map(card => ({ ...card, active: false, done: false }));
        setCards(resetCards);
        // Shuffle the cards
        const shuffledCards = [...resetCards];
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        setCards(shuffledCards);
        // Reset score and attempts
        setScore(0);
        setAttempts(0);
    };
    useEffect(() => {
        shuffleCards()
    },[]);

    const handleCardClick = (id) => {
        if (flippedCards.length < 2) {
            const updatedCards = cards.map(card =>
                card.id === id ? { ...card, active: true } : card
            );
            setCards(updatedCards);
            setFlippedCards([...flippedCards, id]);
        }
    };

    useEffect(() => {
        if (flippedCards.length === 2) {
            const [firstCardId, secondCardId] = flippedCards;
            const firstCard = cards.find(card => card.id === firstCardId);
            const secondCard = cards.find(card => card.id === secondCardId);
            if (firstCard.pair === secondCard.id && secondCard.pair === firstCard.id) {
                const updatedCards = cards.map(card =>
                    card.id === firstCardId || card.id === secondCardId ? { ...card, done: true } : card
                );
                setCards(updatedCards);
                setScore(prevScore => prevScore + 1); // Use functional update for score
            } else {
                setTimeout(() => {
                    const updatedCards = cards.map(card =>
                        card.id === firstCardId || card.id === secondCardId ? { ...card, active: false } : card
                    );
                    setCards(updatedCards);
                }, 1000);
            }
            setAttempts(prevAttempts => prevAttempts + 1); // Use functional update for attempts
            setFlippedCards([]);
        }
    }, [flippedCards, cards]);
    

    return (
        <div>
            <Button onClick={shuffleCards} className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-4"/>
            <div className="grid grid-cols-4 gap-4">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        active={card.active}
                        done={card.done}
                        src={card.src}
                        onClick={() => handleCardClick(card.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Board;
