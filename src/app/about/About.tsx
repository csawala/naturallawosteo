import Image from "next/image"

import style from "@/app/about/styles/About.module.css"
import globalStyle from "@/app/globalStyle.module.css"
import Card from "@/components/Card"
import CAO from "../../../public/CAO.png"
import Ostcan from "../../../public/OSTCAN.png"

const About = () => {
  return (
    <section className={globalStyle.page}>
      <Card className={style.card}>
        <h1>About Ashley</h1>
        <p className={style.paragraph}>
          Ashley Sawala is a dedicated wellness professional who has recently
          transitioned from her role as a Pilates instructor to focus full-time
          on her new path as an Osteopathic Manual Practitioner. With a
          deep-rooted commitment to holistic health and a passion for manual
          therapy, Ashley brings a unique blend of expertise and compassion to
          her practice.
        </p>
        <p className={style.paragraph}>
          Having graduated from the Canadian Academy of Osteopathy, Ashley is
          equipped with a profound understanding of the human body and its
          interconnected systems. Her journey into osteopathy was driven by a
          desire to delve deeper into the body&apos;s natural healing mechanisms
          and provide comprehensive care to her clients.
        </p>
        <p className={style.paragraph}>
          With a background in Pilates, Ashley possesses a strong foundation in
          movement and body awareness, which she now complements with her skills
          in osteopathic manipulation. Ashley&apos;s experience in movement
          modalities informs her approach to treatment with a holistic
          perspective.
        </p>
        <p className={style.paragraph}>
          Ashley is known for her compassionate nature and her ability to
          connect with her clients on a personal level. She takes the time to
          listen attentively to their concerns, working collaboratively with
          them to develop individualized treatment plans that address their
          unique needs and goals.
        </p>
        <p className={style.paragraph}>
          As an Osteopathic Manual Practitioner, Ashley is dedicated to helping
          her clients achieve optimal health and wellness. Through hands-on
          techniques and a deep understanding of anatomy and physiology, she
          aims to restore balance, alleviate pain, and improve overall function.
        </p>
        <p className={style.paragraph}>
          Continuing her commitment to professional growth, Ashley actively
          pursues ongoing education and training in osteopathy, ensuring that
          she remains at the forefront of her field. She is deeply passionate
          about empowering her clients to take an active role in their health
          and is grateful for the opportunity to make a positive impact in their
          lives.
        </p>

        <div className={style.logoContainer}>
          <Image
            alt="Canadian Academy of Osteopathy Logo"
            className={style.logo}
            src={CAO}
          />
          <Image
            alt="Osteopathy Canada Logo"
            className={style.logo}
            src={Ostcan}
          />
        </div>
      </Card>
    </section>
  )
}

export default About
