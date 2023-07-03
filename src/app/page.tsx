'use client'
import { useState } from 'react'

import { CardGoodAfternoor } from '@/components/CardsGoodAfternoor'
import { CardsMade } from '@/components/CardsMade'
import { Footer } from '@/components/Footer'
import { Menu } from '@/components/Menu'
import { NavButton } from '@/components/NavButton'
import { SubTitle, Title } from '@/components/Typograph'

export default function Home() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isPlay, setIsPlay] = useState(false)

  const handleStateMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  const handleStatePlay = () => {
    setIsPlay(!isPlay)
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Menu isOpen={isOpenMenu} setStateMenu={handleStateMenu} />
        <main className="flex-1 px-6 py-4">
          <NavButton />

          <div className="mt-12 md:mt-0">
            <Title title="Good Afternoor" />
          </div>

          <CardGoodAfternoor setStatePlay={handleStatePlay} />

          <SubTitle title="Made for Flank Silva" />
          <CardsMade />
        </main>
      </div>
      <Footer isPlay={isPlay} />
    </div>
  )
}
