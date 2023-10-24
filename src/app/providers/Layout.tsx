import { gsap } from 'gsap'
// import MouseFollower from 'mouse-follower'
import { FC, ReactNode, useEffect, useState } from 'react'
import Header from '../../widgets/Header/Header'
import Footer from '../../widgets/Footer/Footer'
import { Cursor } from '../../shared/Cursor/Cursor'
import { MainContext } from './MainContext'
import { Preloader } from '../../widgets/Preloader/Preloader'
import { Menu } from '../../widgets/Menu/Menu'
import { useLocation } from 'react-router-dom'

// MouseFollower.registerGSAP(gsap)

interface IProps {
  children: ReactNode
  withPreloader?: boolean
}

export const Layout: FC<IProps> = ({ children, withPreloader = true }) => {
  const [currentPage, setCurrentPage] = useState<string>('')
  const [pageLoaded, setPageLoaded] = useState<boolean>(
    withPreloader ? false : true
  )
  const [activeScreen, setActiveScreen] = useState<number>(0)
  const [direction, setDirection] = useState<string>('')
  const [menuActive, setMenuActive] = useState<boolean>(false)
  const [hash, setHash] = useState<string>('')

  const location = useLocation()

  if (location.hash && hash === '') {
    setHash(location.hash)
  }

  return (
    <MainContext.Provider
      value={{
        activeScreen,
        setActiveScreen,
        direction,
        setDirection,
        pageLoaded,
        setPageLoaded,
        menuActive,
        setMenuActive,
        currentPage,
        setCurrentPage,
        hash,
        setHash,
      }}
    >
      {withPreloader && <Preloader />}
      {/* {window.innerWidth > 768 && <Cursor />} */}
      <Menu />
      <Header />
      {children}
      <Footer />
    </MainContext.Provider>
  )
}
