import { IconsProps } from './iconsInterface'

export function CalendarIcon({ color = 'white', size = 15 }: IconsProps) {
  return (
    <svg
      width={size}
      height={size + 2}
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4C0 2.89543 0.89543 2 2 2H22C23.1046 2 24 2.89543 24 4V24C24 25.1046 23.1046 26 22 26H2C0.89543 26 0 25.1046 0 24V4ZM22 4H2V24H22V4Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 0C18.5523 0 19 0.447715 19 1V5C19 5.55228 18.5523 6 18 6C17.4477 6 17 5.55228 17 5V1C17 0.447715 17.4477 0 18 0Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0C6.55228 0 7 0.447715 7 1V5C7 5.55228 6.55228 6 6 6C5.44772 6 5 5.55228 5 5V1C5 0.447715 5.44772 0 6 0Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9C0 8.44772 0.447715 8 1 8H23C23.5523 8 24 8.44772 24 9C24 9.55228 23.5523 10 23 10H1C0.447715 10 0 9.55228 0 9Z"
        fill={color}
      />
    </svg>
  )
}
