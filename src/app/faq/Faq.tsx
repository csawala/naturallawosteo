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
    button: "What should I expect for my first visit?",
    panel:
      "Initial assessments typically last between 30 and 45 minutes, and will include going over your medical history as well as a physical examination. Treatment will often start on the first visit.",
  },
  {
    button: "What should I expect after treatment?",
    panel:
      "Everyone reacts differently to treatment. In some cases, you may be sore for a couple days following.",
  },
  {
    button: "What should I do after my treatment?",
    panel:
      "Drink plenty of water, and avoid strenuous physical activity for 24 to 48 hours. Natural movements like walking, swimming and cycling can help to integrate the treatment.",
  },
  {
    button: "What should I wear?",
    panel:
      "Comfort is key for osteopathy. Since you'll be getting moved around it's best to wear loose, comfortable clothing, like workout clothes.\nAvoid wearing restrictive clothing like jeans, or clothing that may shift during movement like skirts. You will be asked to removed any unnecessary accessories before treatment, such as hats and jewellery.",
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
