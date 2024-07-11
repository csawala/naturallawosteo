import { IconSizeMap } from "."

interface IconProps {
  fill?: string
  size?: keyof typeof IconSizeMap
}

const ChevronUp = ({ fill = "#282923", size = "small" }: IconProps) => {
  const iconSize = IconSizeMap[size]

  return (
    <svg
      fill="none"
      height={iconSize}
      viewBox="0 0 24 24"
      width={iconSize}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9898 5L22.4497 17.6393C22.765 18.0781 23 19 23 19H19.9066C19.9066 19 19.7689 18.2608 19.5073 17.8967L12.0377 8.87084L4.48626 18.0395C4.24008 18.3955 4.20298 19 4.20298 19L1 19C1 19 1.12876 18.2563 1.4188 17.8369L11.9898 5Z"
        fill={fill}
      />
    </svg>
  )
}

export default ChevronUp
