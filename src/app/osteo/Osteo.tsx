import Image from "next/image"
import { useCallback } from "react"

import globalStyle from "@/app/globalStyle.module.css"
import style from "@/app/osteo/styles/Osteo.module.css"
import BallDivider from "@/components/BallDivider"
import Banner from "@/components/Banner"
import Card from "@/components/Card"
import { Leaf } from "@/components/Icons"
import ATStill from "../../../public/ATStill.jpg"

const Quotes = [
  "The role of the osteopath is to help the body help itself",
  "Osteopathy is founded on natural laws, not on arbitrary theories",
  "The body is a unit, a harmonious whole made of mutually dependent parts",
  "Osteopathy is not a system, it is a truth",
  "Disease is the result of a violation of Natural Law",
]
const RANDOM_QUOTE = Math.floor(Math.random() * Quotes.length)

const KnownThings = [
  {
    heading: "Muscles",
    text: "Identify each muscle's attachment points, functions, possible issues, and methods for healing and rehabilitation.",
  },
  {
    heading: "Bones",
    text: "Describe each bone’s location, shape, function, and techniques for manipulation to restore optimal positioning.",
  },
  {
    heading: "Ligaments",
    text: "Outline each ligament’s attachments, common injury mechanisms, and strategies to promote healing and recovery.",
  },
  {
    heading: "Blood Vessels",
    text: "Explain the pathways of blood flow and drainage, including a focus on circulation health.",
  },
  {
    heading: "Lymphatic System",
    text: "Understand causes of lymphatic dysfunction and major drainage sites, along with ways to support lymphatic flow.",
  },
  {
    heading: "Digestive System",
    text: "Detail the organs involved, their positioning, food processing flow, and insight into common gut conditions.",
  },
  {
    heading: "Cardiovascular System",
    text: "Examine factors positively or negatively impacting heart health and ways to support cardiovascular function.",
  },
  {
    heading: "Immunology",
    text: "Identify factors affecting immune system function and methods to strengthen immune response.",
  },
  {
    heading: "Neurology",
    text: "Emphasize the nervous system’s importance in osteopathy, understanding nerve functions, and supporting neural health.",
  },
  {
    heading: "Endocrinology",
    text: "Analyze hormone functions and effects, with an emphasis on balance and health.",
  },
  {
    heading: "Biomechanics",
    text: "Describe optimal body movement, methods to assess dysfunction, and techniques for improving biomechanics.",
  },
  {
    heading: "Compensation Patterns",
    text: "Recognize how the body compensates to maintain homeostasis under various conditions.",
  },
  {
    heading: "Stress",
    text: "Understand patients’ stress levels and how stress may contribute to their symptoms.",
  },
  {
    heading: "Palpation",
    text: "Learn how to interpret tactile information, what to feel for, and its clinical significance.",
  },
  {
    heading: "Psychology",
    text: "Explore patients’ mental frameworks and self-talk, considering the impact on their physical and mental health.",
  },
  {
    heading: "Pathophysiology of Pain",
    text: "Differentiate types of pain, associated tissues, and protocols for effective treatment.",
  },
  {
    heading: "Diet/Exercise/Lifestyle",
    text: "Assess the patient's diet, exercise, and lifestyle factors as part of holistic care.ou would like any further adjustments!",
  },
]

const Osteo = () => {
  const selectQuote = useCallback((quoteCall: number) => {
    const quoteNumber =
      quoteCall + RANDOM_QUOTE > Quotes.length - 1
        ? 0
        : RANDOM_QUOTE + quoteCall
    return `"${Quotes[quoteNumber]}"`
  }, [])

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
        <div className={style.bannerContent}>
          <span className={style.quote}>{selectQuote(0)}</span>
          <span className={style.quoteAttribution}>- A.T. Still</span>
        </div>
      </Banner>

      <Card className={style.card}>
        <div className={style.foundationsContainer}>
          <h2>The Foundations of Osteopathy</h2>
          <p>
            {
              "At the heart of osteopathy lie three core principles that guide every treatment, ensuring a holistic approach to your health and well-being."
            }
          </p>

          {/* Columns */}
          <div className={style.columnContainer}>
            <p className={style.columnText}>{"The Body Is a Dynamic Unit"}</p>
            <BallDivider />
            <p className={style.columnText}>{"The Body Is Self-Healing"}</p>
            <BallDivider />
            <p className={style.columnText}>
              {"Structure and Function Are Interrelated"}
            </p>
          </div>

          <div>
            <dl>
              <div className="mb-2">
                <dt className={style.descriptionTitle}>
                  <Leaf
                    className={style.leafIcon}
                    fill="primaryDark"
                    size="xsmall"
                  />
                  <span className={style.leafLabel}>
                    The Body Is a Dynamic Unit
                  </span>
                </dt>
                <dd className={style.description}>
                  {
                    "Your body functions as an interconnected whole, where every part influences the others. By addressing imbalances, we aim to restore harmony and support your overall health."
                  }
                </dd>
              </div>

              <div className="mb-2">
                <dt className={style.descriptionTitle}>
                  <Leaf
                    className={style.leafIcon}
                    fill="primaryDark"
                    size="xsmall"
                  />
                  <span className={style.leafLabel}>
                    The Body Is Self-Healing
                  </span>
                </dt>
                <dd className={style.description}>
                  {
                    "The body has an innate ability to heal itself when supported correctly. Osteopathy works with your natural healing mechanisms to promote recovery and resilience."
                  }
                </dd>
              </div>
              <div className="mb-2">
                <dt className={style.descriptionTitle}>
                  <Leaf
                    className={style.leafIcon}
                    fill="primaryDark"
                    size="xsmall"
                  />
                  <span className={style.leafLabel}>
                    Structure and Function Are Interrelated
                  </span>
                </dt>
                <dd className={style.description}>
                  {
                    "The way your body is built affects the way it works. By improving alignment and addressing structural issues, we help enhance your body's function and performance."
                  }
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="text-xl">Why These Principles Matter</h3>
            <p>
              {
                "These principles shape every aspect of osteopathic care, allowing us to look beyond symptoms and focus on the root cause of discomfort. By understanding your body as a whole, we aim to help you feel and move better, naturally."
              }
            </p>
          </div>
        </div>
      </Card>

      <Banner className={style.banner} variant="purple">
        <div className={style.bannerContent}>
          <span className={style.quote}>{selectQuote(1)}</span>
          <span className={style.quoteAttribution}>- A.T. Still</span>
        </div>
      </Banner>

      <div id="OsteoKnowledge" />
      <Card className={style.card}>
        <h2>What Do Manual Osteopaths Need To Know?</h2>
        <p>
          {
            "Graduates of the Canadian Academy of Osteopathy have received training that meets or exceeds international standards for graduate-level education. The education is comprehensive, and the following simply scratches the surface of what a graduate knows:"
          }
        </p>
        <div>
          <dl>
            {KnownThings.map(({ heading, text }) => (
              <div className="mb-2" key={heading}>
                <dt className={style.descriptionTitle}>
                  <Leaf
                    className={style.leafIcon}
                    fill="primaryDark"
                    size="xsmall"
                  />
                  <span className={style.leafLabel}>{heading}</span>
                </dt>
                <dd className={style.description}>{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Card>

      <Banner className={style.banner}>
        <div className={style.bannerContent}>
          <span className={style.quote}>{selectQuote(2)}</span>
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
    </section>
  )
}

export default Osteo
