"use client"

import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  Transition,
} from "@headlessui/react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import LogoWithLabel from "../../public/logoWithLabel.png"
import Button from "./Button"
import MenuIcon from "./Icons/MenuIcon"
import style from "./styles/Header.module.css"

const Header = () => {
  const router = useRouter()
  const handleGoToBook = () => router.push("book")
  const handleGoToAbout = () => router.push("about")
  const handleGoToHome = () => router.push("/")
  const handleNavigate = (close: () => void, path: string) => {
    router.push(path)
    close()
  }

  return (
    <section className={style.container}>
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
              About
            </Button>
            <Button onClick={handleGoToAbout} variant="outline">
              What is Osteopathy?
            </Button>
            <Button onClick={handleGoToAbout} variant="text">
              Frequently Asked Questions
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
                        className={style.menuButton}
                        onClick={() => handleNavigate(close, "about")}
                      >
                        About
                      </button>
                      <button
                        className={style.menuButton}
                        onClick={() => handleNavigate(close, "osteopathy")}
                      >
                        What is Osteopathy?
                      </button>
                      <button
                        className={style.menuButton}
                        onClick={() => handleNavigate(close, "faq")}
                      >
                        Frequently Asked Questions
                      </button>
                    </>
                  )}
                </PopoverPanel>
              </Transition>
            </Popover>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
