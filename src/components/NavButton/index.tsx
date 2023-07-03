import { ChevronLeft, ChevronRight } from 'lucide-react'

export function NavButton() {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <button className=" rounded-full bg-black/40 p-1">
        <ChevronLeft size={16} />
      </button>
      <button className=" rounded-full bg-black/40 p-1">
        <ChevronRight size={16} />
      </button>
    </div>
  )
}
