"use client"

import globalStyle from "@/app/globalStyle.module.css"
import Button from "@/components/Button"
import Card from "@/components/Card"
import InstagramIcon from "@/components/Icons/InstagramIcon"

interface ContactCardProps {
  body: React.ReactNode
  cta: string
  heading: string
  onClickCta: () => void
}

const ContactCard = ({ body, cta, heading, onClickCta }: ContactCardProps) => (
  <Card className="flex flex-col w-full mt-4">
    <h2>{heading}</h2>
    {body}

    <Button
      className="self-end w-full sm:w-fit mt-3"
      onClick={onClickCta}
      variant="primary"
    >
      {cta}
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
      <Card className="flex flex-col w-full">
        <h1>Book</h1>
        <p>Contact me directly at:</p>
        <Button
          className="self-end w-full sm:w-fit mt-3"
          onClick={handleEmailAshley}
          variant="primary"
        >
          Send Email
        </Button>
        <Button
          className="self-end w-full sm:w-fit mt-3"
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
          <div>
            <ol>
              <li>Tuesday: 7:00am - 7:00pm</li>
              <li>Wednesday: 7:00am - 7:00pm</li>
              <li>Thursday: 7:00am - 7:00pm</li>
            </ol>
          </div>
        }
        cta="Book Here"
        heading="A Lyrical Body"
        onClickCta={handleALyricalBody}
      />

      {/* Fit for Life Physiotherapy */}
      <ContactCard
        body={
          <div>
            <ol>
              <li>Friday: 12:30pm - 4:00pm</li>
              <li>Saturday: 9:00am - 1:00pm</li>
            </ol>
          </div>
        }
        cta="Book Here"
        heading="Fit For Life Physiotherapy"
        onClickCta={handleFitForLifePhysio}
      />
    </section>
  )
}

export default Book
