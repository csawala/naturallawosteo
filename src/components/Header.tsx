import Image from "next/image"

import LogoWithLabel from "../../public/logoWithLabel.png"
import style from "./styles/Header.module.css"

const Header = () => {
  return (
    <section className={style.container}>
      <div className={style.header}>
        <Image
          alt="Natural Law Osteopathy"
          className={style.logo}
          src={LogoWithLabel}
        />
        <div className={style.buttonContainer}>
          <h2>BOOK</h2>
          <h2>ABOUT</h2>
        </div>
      </div>
    </section>
  )
}

export default Header
