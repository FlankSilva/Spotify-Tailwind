import { Play } from 'lucide-react'
import Image from 'next/image'

interface CardGoodAfternoorProps {
  setStatePlay: () => void
}

export function CardGoodAfternoor({ setStatePlay }: CardGoodAfternoorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-x-10 mt-4 h-52 md:h-auto overflow-y-auto">
      {Array(6)
        .fill('')
        .map((_, index) => (
          <a
            key={`item-card-main-${index}`}
            href="#"
            className="bg-white/5 flex items-center gap-4 group rounded overflow-hidden hover:bg-white/10 transition-colors h-20"
          >
            <Image src={'/album.jpg'} width={80} height={80} alt="" />
            <strong className="text-xs md:text-sm">Wasting Light</strong>
            <button
              className="w-10 h-10 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
              onClick={() => setStatePlay()}
            >
              <Play />
            </button>
          </a>
        ))}
    </div>
  )
}
