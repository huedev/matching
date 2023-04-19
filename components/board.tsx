import { useState } from "react";
import Card from "./card";

export default function Board() {
  const icons = ["🍎", "🍊", "🍋", "🍐", "🫐", "🍒"];
  const [cardIcons, setCardIcons] = useState(shuffle(icons.concat(icons)));

  function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const cards = cardIcons.map((icon) => {
    return <Card icon={icon} />;
  });

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
      {cards}
    </div>
  )
}
