import clsx from "clsx"

import { useMemo } from "react"
import style from "./styles/Banner.module.css"

interface BannerProps {
  children: React.ReactNode
  className?: string
  variant?: "base" | "green" | "purple"
}

const Banner = ({
  children,
  className = "",
  variant = "base",
}: BannerProps) => {
  const {
    containerStyle,
    contentStyle,
  }: { containerStyle: string; contentStyle: string } = useMemo(() => {
    if (variant === "green") {
      return {
        containerStyle: style.containerGreen,
        contentStyle: style.contentGreen,
      }
    } else if (variant === "purple") {
      return {
        containerStyle: style.containerPurple,
        contentStyle: style.contentPurple,
      }
    } else {
      return {
        containerStyle: style.containerBase,
        contentStyle: style.contentBase,
      }
    }
  }, [variant])

  return (
    <div className={clsx(style.container, containerStyle, className)}>
      <div className={clsx(style.content, contentStyle)}>{children}</div>
    </div>
  )
}

export default Banner
