import globalStyle from "@/app/globalStyle.module.css"
import Accordian, { AccordianItem } from "@/components/Accordian"
import Card from "@/components/Card"

const Questions: Array<AccordianItem> = [
  {
    button: "Do you accept benefits?",
    panel: "Yes! Money money money",
  },
  {
    button: "What should I expect for my first visit?",
    panel: "Something something\nMore something.",
  },
  {
    button: "After care?",
    panel: "Something something\nMore something.",
  },
  {
    button: "What should I wear?",
    panel: "Something something\nMore something.",
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
