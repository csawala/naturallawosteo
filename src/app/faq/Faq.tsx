import globalStyle from "@/app/globalStyle.module.css"
import Accordian, { AccordianItem } from "@/components/Accordian"
import Card from "@/components/Card"

const Questions: Array<AccordianItem> = [
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
    panel:
      "Osteopathy is highly beneficial treatment for many common medical concerns. It can help provide relief and, in some cases cure chronic physical ailments.",
  },
  {
    button: "How do osteopathic treatments work?",
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
    panel:
      "Everyone reacts differently to treatment. In some cases, you may be sore for a couple days afterwards, similar to muscle soreness you experience after a workout.",
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
]

const Faq = () => {
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
