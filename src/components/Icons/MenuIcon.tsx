const sizeMap = {
  large: "46",
  medium: "38",
  small: "30",
}

interface IconProps {
  fill?: string
  size?: keyof typeof sizeMap
}

const MenuIcon = ({ fill = "#282923", size = "small" }: IconProps) => {
  const iconSize = sizeMap[size]

  return (
    <svg
      fill="none"
      height={iconSize}
      viewBox="0 0 24 24"
      width={iconSize}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5V5.5C22 6.05228 21.5523 6.5 21 6.5H3C2.44772 6.5 2 6.05228 2 5.5V5Z"
        fill={fill}
      />
      <path
        d="M2 11.75C2 11.1977 2.44772 10.75 3 10.75H21C21.5523 10.75 22 11.1977 22 11.75V12.25C22 12.8023 21.5523 13.25 21 13.25H3C2.44772 13.25 2 12.8023 2 12.25V11.75Z"
        fill={fill}
      />
      <path
        d="M2 18.5C2 17.9477 2.44772 17.5 3 17.5H21C21.5523 17.5 22 17.9477 22 18.5V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V18.5Z"
        fill={fill}
      />
    </svg>
  )
}

export default MenuIcon
