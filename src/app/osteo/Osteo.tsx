import globalStyle from "@/app/globalStyle.module.css"
import style from "@/app/osteo/styles/Osteo.module.css"
import Banner from "@/components/Banner"
import Card from "@/components/Card"
import Image from "next/image"
import ATStill from "../../../public/ATStill.jpg"

const Quotes = [
  "The role of the osteopath is to help the body help itself",
  "Osteopathy is founded on natural laws, not on arbitrary theories",
  "The body is a unit, a harmonious whole made of mutually dependent parts",
  "Osteopathy is not a system, it is a truth",
  "Disease is the result of a violation of Natural Law",
]
const RANDOM_QUOTE = Math.floor(Math.random() * Quotes.length)

const Osteo = () => {
  return (
    <section className={globalStyle.page}>
      <Card className={style.card}>
        <h1>What Is Osteopathy?</h1>
        <p className={style.paragraph}>
          {
            "Osteopathy is a holistic approach to healthcare that focuses on diagnosing, treating, and preventing musculoskeletal issues, as well as providing holistic care for various other health conditions. Osteopaths use manual techniques to restore balance within the body's structure, promoting overall health and well-being. This practice is based on the belief that the body has the inherent ability to heal itself, and osteopathic treatment aims to support this natural healing process. It emphasizes the interconnectedness of the body's structure and function, recognizing that dysfunction in one area can impact other areas of the body."
          }
        </p>
      </Card>

      <Banner className={style.banner} variant="green">
        <div className="flex flex-col">
          <span className={style.quote}>{`"${Quotes[RANDOM_QUOTE]}"`}</span>
          <span className={style.quoteAttribution}>- A.T. Still</span>
        </div>
      </Banner>

      <Card className={style.card}>
        <h2>Andrew Taylor Still</h2>
        <div>
          <Image
            alt="A.T. Still holding a femur"
            className={style.image}
            src={ATStill}
          />
          <p className={style.paragraph}>
            {
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut impedit ipsum explicabo vel! Aperiam aliquam, accusantium nostrum perspiciatis eius ipsam esse eum nobis est dolores eligendi, repellat, et error fugiat?"
            }
          </p>
        </div>
      </Card>

      <Banner className="mt-4" variant="purple">
        <span className={style.quote}>Enter quote here</span>
      </Banner>
      <Banner className="mt-4" variant="green">
        <span className={style.quote}>Enter quote here</span>
      </Banner>
    </section>
  )
}

export default Osteo
