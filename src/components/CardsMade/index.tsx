import Image from 'next/image'

export function CardsMade() {
  return (
    <div className="flex flex-wrap  w-[100%]  md:max-w-full overflow-x-auto lg:grid lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4 mt-2">
      {Array(5)
        .fill('')
        .map((_, index) => (
          <a
            href="#"
            key={`item-made-${index}`}
            className="bg-white/5 p-2 rounded-lg hover:bg-white/10 flex flex-col gap-1 w-24 lg:w-32"
          >
            <Image
              src={'/album.jpg'}
              className="w-full"
              width={90}
              height={90}
              alt=""
            />
            <strong className="font-semibold text-xs">Daily Mix 1</strong>
            <span className="text-[9px] text-zinc-400">
              Wallows, COIN, gril inred and more
            </span>
          </a>
        ))}
    </div>
  )
}
