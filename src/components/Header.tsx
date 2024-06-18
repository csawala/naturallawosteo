"use client"

import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  Transition,
} from "@headlessui/react"
import clsx from "clsx"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

import { LinkName, Links } from "@/tools/links"
import LogoWithLabel from "../../public/logoWithLabel.png"
import Button from "./Button"
import MenuIcon from "./Icons/MenuIcon"
import style from "./styles/Header.module.css"

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleGoToBook = () => router.push(Links.Book)
  const handleGoToAbout = () => router.push(Links.About)
  const handleGoToHome = () => router.push(Links.Home)
  const handleGoToWhatIsOsteo = () => router.push(Links.WhatIsOsteo)
  const handleGoToFaq = () => router.push(Links.FAQ)
  const handleNavigate = (close: () => void, path: string) => {
    router.push(path)
    close()
  }

  return (
    <nav className={style.container}>
      <div className={style.innerContainer}>
        <div className={style.header}>
          <button onClick={handleGoToHome}>
            <Image
              alt="Natural Law Osteopathy"
              className={style.logo}
              src={LogoWithLabel}
            />
          </button>
          <div className={style.buttonContainer}>
            <div className={style.buttons}>
              <Button onClick={handleGoToAbout} variant="secondary">
                {LinkName[Links.About]}
              </Button>
              <Button onClick={handleGoToWhatIsOsteo} variant="outline">
                {LinkName[Links.WhatIsOsteo]}
              </Button>
              <Button onClick={handleGoToFaq} variant="text">
                {LinkName[Links.FAQ]}
              </Button>
            </div>
            <Button onClick={handleGoToBook}>Book</Button>

            <div className={style.menuContainer}>
              <Popover className="relative">
                <PopoverButton className="items-center justify-center p-2">
                  <MenuIcon />
                </PopoverButton>
                <PopoverOverlay className={style.menuOverlay} />
                <Transition
                  enter="transition-opacity duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <PopoverPanel
                    anchor={{ to: "top end", gap: 8 }}
                    className={style.menu}
                  >
                    {({ close }) => (
                      <>
                        <button
                          className={clsx(
                            style.menuButton,
                            pathname === Links.About &&
                              style.menuButtonSelected,
                          )}
                          onClick={() => handleNavigate(close, Links.About)}
                        >
                          {LinkName[Links.About]}
                        </button>
                        <button
                          className={clsx(
                            style.menuButton,
                            pathname === Links.WhatIsOsteo &&
                              style.menuButtonSelected,
                          )}
                          onClick={() =>
                            handleNavigate(close, Links.WhatIsOsteo)
                          }
                        >
                          {LinkName[Links.WhatIsOsteo]}
                        </button>
                        <button
                          className={clsx(
                            style.menuButton,
                            pathname === Links.FAQ && style.menuButtonSelected,
                          )}
                          onClick={() => handleNavigate(close, Links.FAQ)}
                        >
                          {LinkName[Links.FAQ]}
                        </button>
                      </>
                    )}
                  </PopoverPanel>
                </Transition>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
