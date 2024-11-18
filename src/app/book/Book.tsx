"use client"

import Image, { StaticImageData } from "next/image"
import React, { useCallback } from "react"

import style from "@/app/book/styles/Book.module.css"
import globalStyle from "@/app/globalStyle.module.css"
import Button from "@/components/Button"
import Card from "@/components/Card"
import InstagramIcon from "@/components/Icons/InstagramIcon"
import LyricalBodyMap from "../../../public/aLyricalBodyMap.png"
import FitForLifeMap from "../../../public/fitForLifeMap.png"

interface Business {
  address: {
    city: string
    postalCode: string
    province: string
    street: string
  }
  heading: string
  hours: Array<[string, null | string]>
  mapImage: StaticImageData
  mapLink: string
  phone: string
  website: string
}
const businessDetails: { [index: string]: Business } = {
  aLyricalBody: {
    address: {
      city: "Burlington",
      postalCode: "L7P 2H3",
      province: "Ontario",
      street: "Unit 603, 2319 Fairview Street",
    },
    heading: "A Lyrical Body",
    hours: [
      ["SUN", null],
      ["MON", null],
      // ["TUES", "7:00am - 7:00pm"],
      // ["WEDS", "7:00am - 7:00pm"],
      // ["THURS", "7:00am - 7:00pm"],
      ["TUES", null],
      ["WEDS", null],
      ["THURS", null],
      ["FRI", null],
      ["SAT", null],
    ],
    mapImage: LyricalBodyMap,
    mapLink: "https://maps.app.goo.gl/cxwUTkosfFCeAFJs9",
    phone: "+19056312300",
    website: "https://alyricalbody.com/osteopathy/",
  },
  fitForLife: {
    address: {
      city: "Burlington",
      postalCode: "L7T 0B3",
      province: "Ontario",
      street: "18 Plains Rd W UNIT #4",
    },
    heading: "Fit For Life Physiotherapy",
    hours: [
      ["SUN", null],
      ["MON", null],
      ["TUES", null],
      ["WEDS", null],
      ["THURS", null],
      // ["FRI", "12:30pm - 4:00pm"],
      // ["SAT", "9:00am - 1:00pm"],
      ["FRI", null],
      ["SAT", null],
    ],
    mapImage: FitForLifeMap,
    mapLink: "https://maps.app.goo.gl/pycC7MSnPDESxEyG9",
    phone: "+19053333488",
    website: "https://www.fitforlifephysio.ca/About-Us/Osteopath/Ashley-Sawala",
  },
}

interface ContactCardProps {
  business: Business
}

const ContactCard = ({ business }: ContactCardProps) => {
  const {
    address: { city, postalCode, province, street },
    heading,
    hours,
    mapImage,
    mapLink,
    phone,
    website,
  } = business

  const handleClickPhone = useCallback(
    () => window.open(`tel:${phone}`),
    [phone],
  )
  const handleClickMapLink = useCallback(() => window.open(mapLink), [mapLink])
  const handleClickWebsite = useCallback(() => window.open(website), [website])

  return (
    <Card className={style.contactCard}>
      <div className={style.contactCardContent}>
        <h2 className="mb-2">{heading}</h2>
        <div className={style.cardContent}>
          <address>
            <div>{street}</div>
            <div>
              {city}, {province}
            </div>
            <div>{postalCode}</div>
          </address>
          <Button className="mt-3" onClick={handleClickPhone} variant="text">
            {/* TODO: Format phone number */}
            {phone}
          </Button>
        </div>
      </div>
      <button
        className={style.contactCardMapButton}
        onClick={handleClickMapLink}
      >
        <Image alt="map" className={style.contactCardMap} src={mapImage} />
      </button>
      <div className={style.businessTimeContainer}>
        {hours.map(([day, hours]) => (
          <React.Fragment key={`lyricalBody-${day}`}>
            <div className={style.businessDays}>{day}</div>
            <div className={style.businessHours}>
              {hours ?? (
                <div className={style.hoursDashContainer}>
                  <div className={style.hoursDash} />
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
        <Button
          className={style.cardButton}
          onClick={handleClickWebsite}
          variant="primary"
        >
          Book Here
        </Button>
      </div>
    </Card>
  )
}

const Book = () => {
  const handleEmailAshley = () => {
    const subject = encodeURIComponent("Website Inquiry")
    const link = `mailto:info@naturallawosteo.ca?subject=${subject}`

    window.open(link)
  }
  const handleInstagramAshley = () =>
    window.open("https://www.instagram.com/natural.law.osteopathy/")

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
            <span className="min-h-5 min-w-5">
              <InstagramIcon />
            </span>
            <span className="ml-2 break-all">@Natural.Law.Osteopathy</span>
          </Button>
        </div>
      </Card>

      {/* A Lyrical Body */}
      <ContactCard business={businessDetails.aLyricalBody} />

      {/* Fit for Life Physiotherapy */}
      <ContactCard business={businessDetails.fitForLife} />
    </section>
  )
}

export default Book
