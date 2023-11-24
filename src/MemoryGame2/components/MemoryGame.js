import React, { useState, useEffect } from 'react';
import '../mg.css';

let img = [
  <img src='https://i.imgur.com/fbnHQJI.png'/>,
  <img src='https://i.imgur.com/qQj2956.png'/>,
  <img src='https://i.imgur.com/FmebIx9.png'/>,
  <img src='https://i.imgur.com/C2IBfJO.png'/>,
  <img src='https://i.imgur.com/k7Fcn8p.png'/>,
  <img src='https://i.imgur.com/UCpiMC9.png'/>,
  <img src='https://i.imgur.com/SNnb4UA.png'/>,
  <img src='https://i.imgur.com/3OyQkJZ.png'/>,
];

function shuffleArray(img){
  let shuffledArray = img.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

function MemoryGame(){
  let [cards, setCards] = useState([]);
  let [flippedIndexes, setFlippedIndexes] = useState([]);
  let [pair, setPair] = useState([]);

  useEffect(() => {
    let initCards = shuffleArray([...img, ...img]);
    setCards(initCards);
  }, []);

  function handleCardClick(index){
    if (flippedIndexes.length === 2)
      return;
    setFlippedIndexes((prevIndexes) => [...prevIndexes, index]);

    if (flippedIndexes.length === 1) {
      let [firstIndex] = flippedIndexes;
      if (cards[firstIndex] === cards[index])
        setPair((prevPairs) => [...prevPairs, cards[firstIndex]]);
      setTimeout(() => {
        setFlippedIndexes([]);
      }, 1000  );
    }
  };

  return (
    <div className="App">
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`cardpp ${flippedIndexes.includes(index) || pair.includes(card) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {flippedIndexes.includes(index) || pair.includes(card) ? (
              <span>{card}</span>
            ) : (
              <span><img className='teste' src='https://i.imgur.com/O9iSgob.jpg'/></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;