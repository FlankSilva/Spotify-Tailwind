import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from 'lucide-react'
import Image from 'next/image'

interface FooterProps {
  isPlay: boolean
}

export function Footer({ isPlay }: FooterProps) {
  return (
    <footer
      className={`
      bg-zinc-800 border-t border-zinc-700 px-6 py-3 flex items-center gap-8 md:gap-0 justify-center md:justify-between fixed  w-full
      transition-all duration-300
      ${isPlay ? 'bottom-0' : 'bottom-[-81px]'}
    `}
    >
      <div className="hidden md:flex items-center gap-3">
        <Image src={'/album.jpg'} width={52} height={52} alt="" />
        <div className="flex flex-col">
          <strong className="font-normal text-[0.65rem] md:text-sm">
            Rope
          </strong>
          <span className="text-[8px] md:text-[10px] text-zinc-400">
            Foo Fighters
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={16} className="text-zinc-200" />
          <SkipBack size={16} className="text-zinc-200" />

          <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play size={18} />
          </button>

          <SkipForward size={16} className="text-zinc-200" />
          <Repeat size={16} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-60 md:w-64 lg:w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-[40%] h-1 rounded-full" />
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Mic2 size={16} />
        <LayoutList size={16} />
        <Laptop2 size={16} />
        <div className="flex items-center gap-2">
          <Volume size={16} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-[40%] h-1 rounded-full" />
          </div>
        </div>
        <Maximize2 size={16} />
      </div>
    </footer>
  )
}
