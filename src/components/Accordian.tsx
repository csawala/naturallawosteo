"use client"

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import clsx from "clsx"
import { ChevronDown, ChevronUp } from "./Icons"

interface AccordianProps {
  className?: string
  content: Array<{
    button: string
    panel: React.ReactNode | string
  }>
}

const Accordian = ({ className, content }: AccordianProps) => {
  return (
    <div className={clsx("flex flex-col items-start", className)}>
      {content.map((item) => (
        <Disclosure key={item.button}>
          {({ open }) => (
            <>
              <DisclosureButton className="flex flex-row w-full items-center justify-between px-2 py-2 text-lg">
                {item.button}
                {open ? (
                  <ChevronUp size="xsmall" />
                ) : (
                  <ChevronDown size="xsmall" />
                )}
              </DisclosureButton>
              <DisclosurePanel className="px-2 pt-1 pb-4 text-sm">
                {item.panel}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}

export default Accordian
