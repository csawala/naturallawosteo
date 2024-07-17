"use client"

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import clsx from "clsx"

import { ChevronDown, ChevronUp } from "./Icons"
import style from "./styles/Accordian.module.css"

export interface AccordianItem {
  button: string
  panel: React.ReactNode | string
}

interface AccordianProps {
  className?: string
  content: Array<AccordianItem>
}

const Accordian = ({ className, content }: AccordianProps) => {
  return (
    <div className={clsx(style.container, className)}>
      {content.map((item) => (
        <Disclosure key={item.button}>
          {({ open }) => (
            <>
              <DisclosureButton
                className={clsx(style.button, open && style.buttonOpen)}
              >
                {item.button}
                {open ? (
                  <ChevronUp size="xsmall" />
                ) : (
                  <ChevronDown size="xsmall" />
                )}
              </DisclosureButton>
              <DisclosurePanel className={style.panel} transition>
                <div className="mt-2">{item.panel}</div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}

export default Accordian
