import { useState } from "react"

type Props = {
  icon: string
}

export default function Card({ icon }: Props) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      onClick={() => setRevealed(!revealed)}
      className="flex items-center justify-center bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 shadow rounded-lg p-4 h-24 md:h-32"
    >
      <h1 className="font-semibold text-4xl md:text-5xl text-gray-950 dark:text-white">{revealed && icon}</h1>
    </button>
  )
}
