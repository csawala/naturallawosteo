"use client"

import React from "react"

import style from "@/app/book/styles/Book.module.css"
import globalStyle from "@/app/globalStyle.module.css"
import Button from "@/components/Button"
import Card from "@/components/Card"
import InstagramIcon from "@/components/Icons/InstagramIcon"

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
  onClickCta: () => void
}

const ContactCard = ({
  body,
  heading,
  hours,
  onClickCta,
}: ContactCardProps) => (
  <Card className={style.contactCard}>
    <div className="flex-col">
      <h2 className="mb-2">{heading}</h2>
      {body}
    </div>
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
        onClickCta={handleALyricalBody}
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
        onClickCta={handleFitForLifePhysio}
      />
    </section>
  )
}

export default Book
