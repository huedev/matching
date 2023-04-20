type CardProps = {
  icon: string,
  revealed: boolean,
  correct: boolean,
  onCardClick: React.MouseEventHandler;
}

export default function Card({ icon, revealed, correct, onCardClick }: CardProps) {
  return (
    <button
      onClick={onCardClick}
      className={`
        flex items-center justify-center shadow rounded-lg p-4 h-24 md:h-32 border
        ${correct ? 'bg-emerald-50 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-900'
        : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-800'}
      `}
    >
      <h1 className="font-semibold text-4xl md:text-5xl text-gray-950 dark:text-white">{revealed && icon}</h1>
    </button>
  )
}
