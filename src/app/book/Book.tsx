"use client"

import style from "@/app/book/styles/Book.module.css"
import globalStyle from "@/app/globalStyle.module.css"
import Button from "@/components/Button"
import Card from "@/components/Card"
import InstagramIcon from "@/components/Icons/InstagramIcon"

interface ContactCardProps {
  body: React.ReactNode
  heading: string
  onClickCta: () => void
}

const ContactCard = ({ body, heading, onClickCta }: ContactCardProps) => (
  <Card className={style.contactCard}>
    <h2 className="mb-1">{heading}</h2>
    {body}

    <Button className={style.cardButton} onClick={onClickCta} variant="primary">
      Book Here
    </Button>
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
        <h1>Book</h1>
        <p>Contact me directly at:</p>
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
      </Card>

      {/* A Lyrical Body */}
      <ContactCard
        body={
          <div className={style.cardContent}>
            <div>
              <address>
                <div>Unit 603, 2319 Fairview Street</div>
                <div>Burlington, Ontario</div>
                <div>L7P 2H3</div>
              </address>
              <Button
                onClick={() => window.open("tel:+19056312300")}
                variant="text"
              >
                (905) 631-2300
              </Button>
            </div>
            <ol>
              <li>Tuesday: 7:00am - 7:00pm</li>
              <li>Wednesday: 7:00am - 7:00pm</li>
              <li>Thursday: 7:00am - 7:00pm</li>
            </ol>
          </div>
        }
        heading="A Lyrical Body"
        onClickCta={handleALyricalBody}
      />

      {/* Fit for Life Physiotherapy */}
      <ContactCard
        body={
          <div className={style.cardContent}>
            <div>
              <address>
                <div>18 Plains Rd W UNIT #4</div>
                <div>Burlington, Ontario</div>
                <div>L7T 0B3</div>
              </address>
              <Button
                onClick={() => window.open("tel:+19053333488")}
                variant="text"
              >
                (905) 333-3488
              </Button>
            </div>
            <ol>
              <li>Friday: 12:30pm - 4:00pm</li>
              <li>Saturday: 9:00am - 1:00pm</li>
            </ol>
          </div>
        }
        heading="Fit For Life Physiotherapy"
        onClickCta={handleFitForLifePhysio}
      />
    </section>
  )
}

export default Book
