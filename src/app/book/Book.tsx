"use client"

import Image, { StaticImageData } from "next/image"
import React from "react"

import style from "@/app/book/styles/Book.module.css"
import globalStyle from "@/app/globalStyle.module.css"
import Button from "@/components/Button"
import Card from "@/components/Card"
import InstagramIcon from "@/components/Icons/InstagramIcon"
import LyricalBodyMap from "../../../public/aLyricalBodyMap.png"
import FitForLifeMap from "../../../public/fitForLifeMap.png"

const businessHours = {
  aLyricalBody: [
    ["SUN", null],
    ["MON", null],
    ["TUES", "7:00am - 7:00pm"],
    ["WEDS", "7:00am - 7:00pm"],
    ["THURS", "7:00am - 7:00pm"],
    ["FRI", null],
    ["SAT", null],
  ],
  fitForLife: [
    ["SUN", null],
    ["MON", null],
    ["TUES", null],
    ["WEDS", null],
    ["THURS", null],
    ["FRI", "12:30pm - 4:00pm"],
    ["SAT", "9:00am - 1:00pm"],
  ],
}

interface ContactCardProps {
  body: React.ReactNode
  heading: string
  hours: (string | null)[][]
  map: StaticImageData
  onClickCta: () => void
  onClickMap: () => void
}

const ContactCard = ({
  body,
  heading,
  hours,
  map,
  onClickCta,
  onClickMap,
}: ContactCardProps) => (
  <Card className={style.contactCard}>
    <div className="flex-col h-min">
      <h2 className="mb-2">{heading}</h2>
      {body}
    </div>
    <button className={style.contactCardMapButton} onClick={onClickMap}>
      <Image alt="map" className={style.contactCardMap} src={map} />
    </button>
    <div className={style.businessTimeContainer}>
      {hours.map(([day, hours]) => (
        <React.Fragment key={`lyricalBody-${day}`}>
          <div className={style.businessDays}>{day}</div>
          <div className={style.businessHours}>{hours ?? "-"}</div>
        </React.Fragment>
      ))}
      <Button
        className={style.cardButton}
        onClick={onClickCta}
        variant="primary"
      >
        Book Here
      </Button>
    </div>
  </Card>
)

const Book = () => {
  const handleEmailAshley = () => {
    const subject = encodeURIComponent("Website Inquiry")
    const link = `mailto:info@naturallawosteo.ca?subject=${subject}`

    window.open(link)
  }
  const handleInstagramAshley = () =>
    window.open("https://www.instagram.com/natural.law.osteopathy/")
  const handleALyricalBody = () =>
    window.open("https://alyricalbody.com/osteopathy/")
  const handleFitForLifePhysio = () =>
    window.open(
      "https://www.fitforlifephysio.ca/About-Us/Osteopath/Ashley-Sawala",
    )
  const handleALyricalBodyMap = () =>
    window.open(
      "https://www.google.com/maps/place/A+Lyrical+Body+Pilates+Studio/@43.3441378,-79.8053061,16z/data=!4m14!1m7!3m6!1s0x882b61dca286c157:0xde48a5ed41bbbe7c!2sA+Lyrical+Body+Pilates+Studio!8m2!3d43.3441339!4d-79.8027312!16s%2Fg%2F1tql5dw1!3m5!1s0x882b61dca286c157:0xde48a5ed41bbbe7c!8m2!3d43.3441339!4d-79.8027312!16s%2Fg%2F1tql5dw1?entry=ttu",
    )
  const handleFitForLifePhysioMap = () =>
    window.open(
      "https://www.google.com/maps/place/Fit+For+Life+Physiotherapy/@43.3062477,-79.855297,17z/data=!4m14!1m7!3m6!1s0x882c9db48f844201:0x29d14fa4cca44b4d!2sFit+For+Life+Physiotherapy!8m2!3d43.3062438!4d-79.8527221!16s%2Fg%2F1w4f8rbn!3m5!1s0x882c9db48f844201:0x29d14fa4cca44b4d!8m2!3d43.3062438!4d-79.8527221!16s%2Fg%2F1w4f8rbn?entry=ttu",
    )

  return (
    <section className={globalStyle.page}>
      <Card className={style.card}>
        <div className="flex-col">
          <h1>Book</h1>
          <p>Contact me directly at:</p>
        </div>
        <div>
          <Button
            className={style.cardButton}
            onClick={handleEmailAshley}
            variant="primary"
          >
            Send Email
          </Button>
          <Button
            className={style.cardButton}
            onClick={handleInstagramAshley}
            variant="text"
          >
            <InstagramIcon />
            <span className="ml-2">@Natural.Law.Osteopathy</span>
          </Button>
        </div>
      </Card>

      {/* A Lyrical Body */}
      <ContactCard
        body={
          <div className={style.cardContent}>
            <address>
              <div>Unit 603, 2319 Fairview Street</div>
              <div>Burlington, Ontario</div>
              <div>L7P 2H3</div>
            </address>
            <Button
              className="mt-3 mb-3 sm:mb-0"
              onClick={() => window.open("tel:+19056312300")}
              variant="text"
            >
              (905) 631-2300
            </Button>
          </div>
        }
        heading="A Lyrical Body"
        hours={businessHours.aLyricalBody}
        map={LyricalBodyMap}
        onClickCta={handleALyricalBody}
        onClickMap={handleALyricalBodyMap}
      />

      {/* Fit for Life Physiotherapy */}
      <ContactCard
        body={
          <div className={style.cardContent}>
            <address>
              <div>18 Plains Rd W UNIT #4</div>
              <div>Burlington, Ontario</div>
              <div>L7T 0B3</div>
            </address>
            <Button
              className="mt-3 mb-3 sm:mb-0"
              onClick={() => window.open("tel:+19053333488")}
              variant="text"
            >
              (905) 333-3488
            </Button>
          </div>
        }
        heading="Fit For Life Physiotherapy"
        hours={businessHours.fitForLife}
        map={FitForLifeMap}
        onClickCta={handleFitForLifePhysio}
        onClickMap={handleFitForLifePhysioMap}
      />
    </section>
  )
}

export default Book
