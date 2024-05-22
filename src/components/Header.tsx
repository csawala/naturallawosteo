"use client"

import Image from "next/image"

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react"
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

          <div className={style.menu}>
            <Popover className="relative items-center">
              <PopoverButton className="items-center justify-center p-2">
                <MenuIcon />
              </PopoverButton>
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
                  className="flex flex-col gap-y-2 bg-white rounded-md border"
                >
                  <button
                    className="py-3 px-4 items-center justify-center text-sm"
                    onClick={handleGoToAbout}
                  >
                    About
                  </button>
                  <button
                    className="py-3 px-4 items-center justify-center text-sm"
                    onClick={handleGoToAbout}
                  >
                    What is Osteopathy?
                  </button>
                  <button
                    className="py-3 px-4 items-center justify-center text-sm"
                    onClick={handleGoToAbout}
                  >
                    Frequently Asked Questions
                  </button>
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
