import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import clsx from "clsx"

interface AccordianProps {
  className?: string
  content: Array<{
    button: string
    panel: string
  }>
}

const Accordian = ({ className, content }: AccordianProps) => {
  return (
    <div className={clsx("flex flex-col items-start", className)}>
      {content.map((item) => (
        <Disclosure key={item.button}>
          <DisclosureButton className="flex flex-row justify-between px-2 py-2 text-lg">
            {item.button}
          </DisclosureButton>
          <DisclosurePanel className="px-2 pt-1 pb-4 text-sm">
            {item.panel}
          </DisclosurePanel>
        </Disclosure>
      ))}
    </div>
  )
}

export default Accordian
