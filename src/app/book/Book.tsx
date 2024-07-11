import globalStyle from "@/app/globalStyle.module.css"
import Card from "@/components/Card"

const Book = () => {
  return (
    <section className={globalStyle.page}>
      <Card className="flex flex-col w-full">
        <h1>Book</h1>
      </Card>
    </section>
  )
}

export default Book
