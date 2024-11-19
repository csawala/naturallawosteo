"use client"

import { useRouter } from "next/navigation"
import { useMemo } from "react"

import globalStyle from "@/app/globalStyle.module.css"
import Accordian, { AccordianItem } from "@/components/Accordian"
import Button from "@/components/Button"
import Card from "@/components/Card"
import { Leaf } from "@/components/Icons"
import { Links } from "@/tools/links"

const Benefits = [
  "Improved circulation",
  "Improved posture",
  "Improved mobility",
  "Improved immune function",
  "Improved mood & mental health",
  "More energy & better sleep",
  "Reduced pain & symptoms",
  "Reduced brain fog",
]

const Faq = () => {
  const router = useRouter()
  const handleClickOsteoKnowledge = () =>
    router.push(Links.WhatIsOsteo + "#OsteoKnowledge")

  const Questions: Array<AccordianItem> = useMemo(
    () => [
      {
        button: "Do I need a referral?",
        panel:
          "No, you do not need a referral to see an Ostepathic Manual Practitioner. You can book an osteopathic appointment whenever you're ready.",
      },
      {
        button: "Do you accept benefits?",
        panel:
          "Yes, check with your extended health insurance provider to see if your plan includes osteopathy services. Treatments may be partially or fully covered.",
      },
      {
        button: "What can Osteopathy help with?",
        panel: (
          <>
            <p className="mb-2">
              {
                "Osteopathy is a highly beneficial treatment for many common medical concerns. It can help provide relief and, in some cases cure chronic physical ailments."
              }
            </p>
            <p className="mb-2">
              {
                "Some commmon conditions that benefit from osteopathic treatment include back pain, joint problems, headaches, and digestive issues, to name a few."
              }
            </p>
          </>
        ),
      },
      {
        button: "What are the benefits of Osteopathy?",
        panel: (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Benefits.map((benefit) => (
              <li className="flex flex-row items-center" key={benefit}>
                <Leaf
                  className="rotate-90 mr-2"
                  fill="primaryDark"
                  size="xsmall"
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        ),
      },
      {
        button: "What does a Manual Osteopath need to know?",
        panel: (
          <>
            <p className="mb-2">
              {
                "Click below to get a glimpse into what Manual Osteopaths need to know before graduating from the Canadian Academy of Osteopathy."
              }
            </p>
            <Button onClick={handleClickOsteoKnowledge} variant="secondary">
              More Info
            </Button>
          </>
        ),
      },
      {
        button: "What should I expect during my appointment?",
        panel: (
          <>
            <p className="mb-2">
              {
                "Each treatment will always consider motion restriction and asymmetries in the body, with the goal of facilitating normal movement. This means that your visit will include a dynamic assessment of the way your body moves, followed by a treatment plan designed specifically for you and the current needs of your body."
              }
            </p>
            <p className="mb-2">
              {
                "Treatment will include joint mobilization and soft tissue treatment to remove any obstacles that interfere with the proper nutrition and drainage of your body’s tissue. It is through a deep understanding of anatomy and physiology, and with excellent palpation skills, that an osteopathic manual therapist is able to detect and treat these restrictions."
              }
            </p>
            <p className="mb-2">
              {
                "This approach to manual therapy aims to treat the cause of the symptom rather than simply reducing it temporarily."
              }
            </p>
          </>
        ),
      },
      {
        button: "Are osteopathic treatments painful?",
        panel: (
          <>
            <p className="mb-2">
              {
                "Everyone reacts differently to treatment. In some cases, you may be sore for a couple days afterwards, similar to muscle soreness you experience after a workout."
              }
            </p>
            <p className="mb-2">
              {
                "The treatment itself is designed to be gentle and comfortable, working in harmony with your body to ease the nervous system. This approach promotes relaxation while enhancing mobility and function, with a strong focus on patient comfort."
              }
            </p>
          </>
        ),
      },
      {
        button: "Are there any risks or side effects?",
        panel: (
          <>
            <p className="mb-2">
              {
                "Yes, while osteopathic treatment is generally safe when performed by a qualified practitioner, there are some potential risks and side effects. Common, mild side effects include temporary soreness, fatigue, or slight bruising, which typically resolve within a day or two. In rare cases, people might experience dizziness, headaches, or muscle stiffness shortly after treatment."
              }
            </p>
            <p className="mb-2">
              {
                "More serious complications, such as nerve or blood vessel damage, are extremely rare, especially when proper screening and gentle techniques are used. Patients with certain conditions—like osteoporosis, bone or joint infections, or recent fractures—should discuss their health with their osteopath to ensure a tailored, safe approach."
              }
            </p>
            <p className="mb-2">
              {
                "Overall, osteopaths prioritize gentle techniques to minimize risk and maximize patient safety, particularly for those with specific health concerns."
              }
            </p>
          </>
        ),
      },
      {
        button:
          "Can osteopathic treatment be combined with other forms of medical care?",
        panel: (
          <>
            <p className="mb-2">
              {
                "Yes, osteopathic treatment can be effectively combined with other forms of medical care. Osteopathy is often used as a complementary therapy alongside conventional medicine, physical therapy, or even mental health support. Many patients benefit from a holistic approach where osteopathy addresses physical alignment, mobility, and pain relief, while other treatments may target specific medical issues, rehabilitation needs, or lifestyle adjustments."
              }
            </p>
            <p className="mb-2">
              {
                "Osteopaths frequently work in collaboration with other healthcare providers to ensure that treatments align and to support overall health goals. Open communication between your osteopath and other practitioners can help create a well-rounded, coordinated care plan tailored to your unique needs."
              }
            </p>
          </>
        ),
      },
      {
        button: "How long does a treatment session last?",
        panel:
          "A typical osteopathic treatment session lasts between 20 to 30 minutes, depending on the complexity of the condition and the goals of the treatment. The initial consultation may take longer, as it includes a thorough assessment of your medical history, lifestyle, and physical condition to develop a tailored treatment plan. Follow-up sessions are often shorter, focusing on specific areas and adjusting techniques as needed to support ongoing progress.",
      },
      {
        button: "How many treatments will I need?",
        panel: (
          <>
            <p className="mb-2">
              {
                "Every patients situation is unique and will impact the amount of treatments required. Factors include how long the issue has persisted, other traumas they've experienced, and the patients overall health."
              }
            </p>
            <p className="mb-2">
              {
                "Regardless of the issue, patients can expect to notice changes within a short time frame (3 to 5 treatments)."
              }
            </p>
            <p className="mb-2">
              {
                "Patients may often see complete restoration of function within a few visits. Others may require a prolonged approach (10 to 15 treatments), while a few may require a maintenance program."
              }
            </p>
          </>
        ),
      },
      {
        button: "What should I expect for my first visit?",
        panel:
          "Initial assessments typically last between 30 and 45 minutes, and will include going over your medical history as well as a physical examination. Treatment will often start on the first visit.",
      },
      {
        button: "What should I wear?",
        panel: (
          <>
            <p className="mb-2">
              {
                "Comfort is key for osteopathy. Since you'll be getting moved around it's best to wear loose, comfortable clothing, like workout clothes."
              }
            </p>
            <p className="mb-2">
              {
                "Avoid wearing restrictive clothing like jeans, or clothing that may shift during movement like skirts. You will be asked to removed any unnecessary accessories before treatment, such as hats and jewellery."
              }
            </p>
          </>
        ),
      },
      {
        button: "What should I do after my treatment?",
        panel:
          "Drink plenty of water, and avoid strenuous physical activity for 24 to 48 hours. Natural movements like walking, swimming and cycling can help to integrate the treatment.",
      },
    ],
    [],
  )

  return (
    <section className={globalStyle.page}>
      <Card className="flex flex-col w-full">
        <h1>Frequently Asked Questions</h1>
        <Accordian className="mt-4" content={Questions} />
      </Card>
    </section>
  )
}

export default Faq
