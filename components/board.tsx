import { useState } from "react";
import Card from "./card";

import { CardType } from "../interfaces";

const icons = ["🍎", "🍊", "🍋", "🍐", "🫐", "🍒"];
let initialCards = generateCards(icons);

export default function Board() {
  const [cards, setCards] = useState(initialCards);
  const [firstCard, setFirstCard] = useState<CardType>({ id: -1, icon: "", revealed: false, correct: false });
  const [pickingFirstCard, setPickingFirstCard] = useState(true);
  const [moves, setMoves] = useState(0);

  function handleClick(i: number) {
    if (cards[i].revealed) {
      return;
    }

    const nextCards = cards.slice();
    nextCards[i].revealed = true;
    if (pickingFirstCard) {
      setFirstCard(cards[i]);
    } else {
      if (firstCard.icon === cards[i].icon) {
        nextCards[i].correct = true;
        nextCards[firstCard.id].correct = true;
      } else {
        setTimeout(() => {
          const nextCards = cards.slice();
          nextCards[i].revealed = false;
          nextCards[firstCard.id].revealed = false;
          setCards(nextCards);
        }, 750);
      }
      setMoves(moves + 1);
    }
    setCards(nextCards);
    setPickingFirstCard(!pickingFirstCard);
  }

  const finished = calculateFinished(cards);

  function resetGame() {
    setCards(generateCards(icons));
    setMoves(0);
  }

  return (
    <>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        {cards.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            revealed={card.revealed}
            correct={card.correct}
            onCardClick={() => handleClick(card.id)}
          />
        ))}
      </div>
      {finished &&
        <div className="py-4 flex flex-col space-y-4 items-center justify-center">
          <span className="text-lg text-emerald-600 dark:text-emerald-500">
            Nice work! You won in {moves} moves!
          </span>
          <button onClick={resetGame} className="flex items-center justify-center shadow rounded-lg px-4 py-3 border text-gray-950 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
            Play again
          </button>
        </div>
      }
    </>
  )
}

function shuffle(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateCards(array: string[]) {
  const shuffledIconPairs = shuffle(icons.concat(icons));

  return shuffledIconPairs.map((icon, index): CardType => {
    return { id: index, icon: icon, revealed: false, correct: false };
  });
}

function calculateFinished(cards: CardType[]) {
  for (const card of cards) {
    if (!card.correct) {
      return false;
    }
  }
  return true;
}
