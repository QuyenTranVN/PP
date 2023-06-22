import React from 'react'

interface CalculatorIconProps {
  type?: 'black' | 'white'
}

const CalculatorIcon = ({ type = 'black' }: CalculatorIconProps) => {
  return (
    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_595_4556)">
        <path
          d="M16.5229 8.05151C16.5229 8.2396 16.3657 8.39151 16.1711 8.39151H11.0364C10.8418 8.39151 10.6846 8.2396 10.6846 8.05151V5.98258C10.6846 5.79449 10.8418 5.64258 11.0364 5.64258H16.1711C16.3657 5.64258 16.5229 5.79449 16.5229 5.98258V8.05151ZM11.3582 7.66811H15.8492V6.36598H11.3582V7.66811Z"
          fill={type}
        />
        <path d="M13.9779 11.0681H13.0049V12.2256H13.9779V11.0681Z" fill={type} />
        <path d="M16.0736 11.0681H15.1006V12.2256H16.0736V11.0681Z" fill={type} />
        <path d="M11.8064 11.0681H10.9082V12.2256H11.8064V11.0681Z" fill={type} />
        <path d="M11.8064 9.04254H10.9082V10.2H11.8064V9.04254Z" fill={type} />
        <path d="M16.0736 9.04254H15.1006V10.2H16.0736V9.04254Z" fill={type} />
        <path d="M13.9779 9.04254H13.0049V10.2H13.9779V9.04254Z" fill={type} />
        <path d="M13.9779 13.383H13.0049V14.4681H13.9779V13.383Z" fill={type} />
        <path d="M16.0736 13.383H15.1006V14.4681H16.0736V13.383Z" fill={type} />
        <path d="M11.8064 13.383H10.9082V14.4681H11.8064V13.383Z" fill={type} />
        <path
          d="M3.9329 8.66926C3.09234 8.66926 2.4082 8.00806 2.4082 7.19568C2.4082 6.3833 3.09234 5.72211 3.9329 5.72211C4.77347 5.72211 5.4576 6.3833 5.4576 7.19568C5.4576 8.00806 4.77347 8.66926 3.9329 8.66926ZM3.9329 6.40283C3.48006 6.40283 3.1118 6.75875 3.1118 7.19641C3.1118 7.63406 3.48006 7.98998 3.9329 7.98998C4.38575 7.98998 4.75401 7.63406 4.75401 7.19641C4.75401 6.75875 4.38575 6.40283 3.9329 6.40283Z"
          fill={type}
        />
        <path
          d="M6.66142 12.627C5.82085 12.627 5.13672 11.9658 5.13672 11.1534C5.13672 10.3411 5.82085 9.67987 6.66142 9.67987C7.50199 9.67987 8.18612 10.3411 8.18612 11.1534C8.18612 11.9658 7.50199 12.627 6.66142 12.627ZM6.66142 10.3606C6.20858 10.3606 5.84031 10.7165 5.84031 11.1542C5.84031 11.5918 6.20858 11.9477 6.66142 11.9477C7.11426 11.9477 7.48253 11.5918 7.48253 11.1542C7.48253 10.7165 7.11426 10.3606 6.66142 10.3606Z"
          fill={type}
        />
        <path
          d="M2.76011 12.627C2.68376 12.627 2.60741 12.6031 2.54229 12.5539C2.3896 12.4375 2.3634 12.2241 2.48391 12.0765L7.55876 5.85233C7.67927 5.70548 7.90008 5.67944 8.05277 5.7959C8.20547 5.91237 8.23166 6.12578 8.11115 6.27335L3.0363 12.4975C2.96669 12.5822 2.86415 12.627 2.76011 12.627Z"
          fill={type}
        />
        <path
          d="M0 16.2187C0 16.6491 0.342814 17 0.764222 17H11.9004C12.3219 17 12.6647 16.6491 12.6647 16.2187V15.64H16.9446C17.5269 15.64 18 15.1828 18 14.62V5.1C18 4.53792 17.5269 4.08 16.9446 4.08H12.6647V0.781277C12.6647 0.350851 12.3219 0 11.9004 0H3.75449C3.66392 0 3.58234 0.0332766 3.51946 0.0875319C3.48428 0.104894 0.166168 3.69081 0.166168 3.69081C0.0179641 3.83404 0 3.944 0 4.14149V16.2187H0ZM0.713323 4.11038L3.8226 0.68V3.82898H1.4274V4.55238H4.16093C4.34581 4.55238 4.49626 4.40698 4.49626 4.2283V0.68H11.8728C11.9229 0.68 11.9513 0.720511 11.9513 0.781277V4.08H10.1437C9.56138 4.08 9.08832 4.53792 9.08832 5.1V14.62C9.08832 15.1828 9.56138 15.64 10.1437 15.64H11.9513V16.2187C11.9513 16.2795 11.9229 16.32 11.8728 16.32H0.791916C0.741766 16.32 0.713323 16.2795 0.713323 16.2187V4.11038ZM17.2964 14.62C17.2964 14.8081 17.1385 14.96 16.9446 14.96H10.1437C9.9491 14.96 9.79192 14.8081 9.79192 14.62V5.1C9.79192 4.91264 9.9491 4.76 10.1437 4.76H16.9446C17.1385 4.76 17.2964 4.91264 17.2964 5.1V14.62Z"
          fill={type}
        />
      </g>
      <defs>
        <clipPath id="clip0_595_4556">
          <rect width="18" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CalculatorIcon