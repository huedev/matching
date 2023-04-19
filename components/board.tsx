import { useState } from "react";
import Card from "./card";

export default function Board() {
  const icons = ["🍎", "🍊", "🍋", "🍐", "🫐", "🍒"];
  const [cardIcons, setCardIcons] = useState(shuffle(icons.concat(icons)));
  const [cardsRevealed, setCardsRevealed] = useState(Array(12).fill(false));
  const [firstCardIcon, setFirstCardIcon] = useState("");
  const [pickingFirstCard, setPickingFirstCard] = useState(true);

  function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleClick(i: number) {
    const nextCardsRevealed = cardsRevealed.slice();
    nextCardsRevealed[i] = true;
    if (pickingFirstCard) {
      setFirstCardIcon(cardIcons[i]);
    }
    else {
      console.log(firstCardIcon === cardIcons[i]);
    }
    setCardsRevealed(nextCardsRevealed);
    setPickingFirstCard(!pickingFirstCard);
  }

  const cards = cardIcons.map((icon, index) => {
    return <Card key={index} icon={icon} revealed={cardsRevealed[index]} onCardClick={() => handleClick(index)} />;
  });

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
      {cards}
    </div>
  )
}
