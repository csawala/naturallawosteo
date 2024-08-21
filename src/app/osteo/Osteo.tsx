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
              "Andrew Taylor Still (1828–1917) was an American physician and the founder of osteopathy and osteopathic medicine. Born in Lee County, Virginia, he grew up in a medical family and was deeply influenced by his father, who was a Methodist minister and physician."
            }
          </p>
          <p className={style.paragraph}>
            {
              "Still pursued a traditional medical education but became dissatisfied with the conventional medical practices of the time, especially after losing several family members to spinal meningitis in the 1860s. This personal tragedy drove him to seek alternative approaches to healthcare."
            }
          </p>
          <p className={style.paragraph}>
            {
              "In 1874, Still developed the foundational principles of osteopathy, emphasizing the body's ability to heal itself when in proper alignment. He believed that the musculoskeletal system played a key role in overall health and that manual manipulation could restore balance and support the body's natural healing processes."
            }
          </p>
          <p className={style.paragraph}>
            {
              "In 1892, Still founded the American School of Osteopathy (now A.T. Still University) in Kirksville, Missouri, which became the first institution to teach osteopathic medicine. His ideas laid the groundwork for a new branch of medicine, blending manual therapy with a holistic approach to patient care."
            }
          </p>
          <p className={style.paragraph}>
            {
              "Still’s contributions transformed healthcare and led to the establishment of osteopathic medicine as a recognized medical practice in the United States and beyond."
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
