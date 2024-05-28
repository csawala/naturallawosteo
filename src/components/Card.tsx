import clsx from "clsx"

import style from "./styles/Card.module.css"

interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card = ({ children, className = "" }: CardProps) => {
  return <div className={clsx(style.container, className)}>{children}</div>
}

export default Card
