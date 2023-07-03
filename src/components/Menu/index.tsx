import { Home as HomeIcon, Search, Library, ChevronsRight } from 'lucide-react'

interface MenuProps {
  isOpen: boolean
  setStateMenu: () => void
}

export function Menu({ isOpen, setStateMenu }: MenuProps) {
  return (
    <aside
      className={`w-48 bg-zinc-950 p-6 transition-all duration-300 ${
        isOpen ? 'absolute h-full left-[0rem]' : 'absolute h-full left-[-12rem]'
      } md:static`}
    >
      {!isOpen && (
        <button
          onClick={() => setStateMenu()}
          className="absolute left-[200px] md:hidden"
        >
          <ChevronsRight />
        </button>
      )}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setStateMenu()}
          className="w-3 h-3 bg-red-500 rounded-full"
        />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
        >
          <HomeIcon size={18} />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
        >
          <Search size={18} />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
        >
          <Library size={18} />
          Your Libary
        </a>
      </nav>
      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a
          href=""
          className="text-xs text-zinc-400 hover:text-zinc-100 transition-all duration-200"
        >
          Hot Hits Brasil
        </a>
        <a
          href=""
          className="text-xs text-zinc-400 hover:text-zinc-100 transition-all duration-200"
        >
          Aniver Funk
        </a>
        <a
          href=""
          className="text-xs text-zinc-400 hover:text-zinc-100 transition-all duration-200"
        >
          My Playlist #22
        </a>
        <a
          href=""
          className="text-xs text-zinc-400 hover:text-zinc-100 transition-all duration-200"
        >
          Top Brasil
        </a>
      </nav>
    </aside>
  )
}
