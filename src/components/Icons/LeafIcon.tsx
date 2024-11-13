import { IconColour, IconSizeMap } from "."

interface IconProps {
  className?: string
  fill?: keyof typeof IconColour
  size?: keyof typeof IconSizeMap
}

const LeafIcon = ({ className, fill = "dark", size = "small" }: IconProps) => {
  const iconColour = IconColour[fill]
  const iconSize = IconSizeMap[size]

  return (
    <svg
      className={className}
      fill="none"
      height={iconSize}
      viewBox="0 0 24 24"
      width={iconSize}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.676 23C23.7255 11.3614 24.2456 4.22463 12.365 1.3887C7.68383 7.62004 9.79569 10.855 10.7949 16.3762C5.91966 9.46143 8.99768 5.09023 10.6019 1C-5.64241 8.92825 8.75374 15.5396 11.676 23Z"
        fill={iconColour}
      />
    </svg>
  )
}

export default LeafIcon
