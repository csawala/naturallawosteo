import globalStyle from "@/app/globalStyle.module.css"
import style from "@/app/osteo/styles/Osteo.module.css"
import Banner from "@/components/Banner"
import Card from "@/components/Card"

const Quotes = [
  "The role of the osteopath is to help the body help itself",
  "Osteopathy is founded on natural laws, not on arbitrary theories",
  "The body is a unit, a harmonious whole made of mutually dependent parts",
  "Osteopathy is not a system, it is a truth",
  "Disease is the result of a violation of Natural Law",
]

const Osteo = () => {
  return (
    <section className={globalStyle.page}>
      <Card className={style.card}>
        <h1>What Is Osteopathy?</h1>
        <p className={style.paragraph}>
          Discover the holistic approach of osteopathy, an alternative medicine
          modality that addresses the body's interconnected systems. Through
          meticulous examination, osteopaths delve deep to uncover the root
          causes of dysfunction, focusing on anatomical relationships and
          principles. By restoring the body's natural self-healing mechanisms,
          osteopathy aims to enhance overall function.
        </p>
      </Card>
      <p>SPACER</p>
      <Banner>
        <span className="text-2xl">Enter quote here</span>
      </Banner>
      <Banner className="mt-4" variant="purple">
        <span className="text-2xl">Enter quote here</span>
      </Banner>
      <Banner className="mt-4" variant="green">
        <span className="text-2xl">Enter quote here</span>
      </Banner>
    </section>
  )
}

export default Osteo
