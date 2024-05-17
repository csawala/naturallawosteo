"use client"

import Image from "next/image"

import { useRouter } from "next/navigation"
import LogoWithLabel from "../../public/logoWithLabel.png"
import Button from "./Button"
import style from "./styles/Header.module.css"

const Header = () => {
  const router = useRouter()
  const handleGoToBook = () => router.push("book")
  const handleGoToAbout = () => router.push("about")

  return (
    <section className={style.container}>
      <div className={style.header}>
        <Image
          alt="Natural Law Osteopathy"
          className={style.logo}
          src={LogoWithLabel}
        />
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
            <Button onClick={handleGoToAbout} variant="text">
              MENU
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
