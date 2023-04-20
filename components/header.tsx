import Image from 'next/image'
import logo from '../images/logo.png'

export default function Header() {
  return (
    <header className="my-8 flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <Image
          height={32}
          width={32}
          src={logo}
          alt="Matching logo"
          className="h-8 w-8 rounded-md rendering-pixelated"
          unoptimized
        />
        <h1 className="font-semibold text-xl text-gray-950 dark:text-white">Matching</h1>
      </div>
    </header>
  )
}
