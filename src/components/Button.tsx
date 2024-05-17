import clsx from "clsx"
import { ButtonHTMLAttributes } from "react"

import style from "./styles/Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "outline" | "primary" | "secondary" | "text"
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        style.button,
        variant === "secondary" ? style.lightText : style.darkText,
        variant === "outline" && style.outline,
        variant === "primary" && style.primary,
        variant === "secondary" && style.secondary,
        variant === "text" && style.text,
      )}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default Button
