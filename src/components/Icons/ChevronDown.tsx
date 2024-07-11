import { IconSizeMap } from "."

interface IconProps {
  fill?: string
  size?: keyof typeof IconSizeMap
}

const ChevronDown = ({ fill = "#282923", size = "small" }: IconProps) => {
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
        d="M11.9898 19L22.4497 6.36073C22.765 5.9219 23 5 23 5H19.9066C19.9066 5 19.7689 5.73917 19.5073 6.10331L12.0377 15.1292L4.48626 5.96052C4.24008 5.6045 4.20298 5 4.20298 5L1 5C1 5 1.12876 5.74373 1.4188 6.16314L11.9898 19Z"
        fill={fill}
      />
    </svg>
  )
}

export default ChevronDown
