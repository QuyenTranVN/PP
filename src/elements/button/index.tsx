import { Box } from '@mui/material'
import Loading from 'elements/Loading'
import React from 'react'
import { convertToRem } from 'utils/convertToRem'
import styles from './button.module.scss'
import { ButtonProps } from './button.type'

const Button: React.FC<ButtonProps> = ({
  children,
  width = '100%',
  height = 56,
  onClick,
  radius = 4,
  isLoading,
  style = '',
  cate,
  disabled
}) => {
  let className = ''
  switch (cate) {
    case 'standard':
      className = styles.button_standard
      break
    default:
      className = styles.button_outlined
  }
  return (
    <Box
      component="button"
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${style}`}
      style={{
        borderRadius: convertToRem(radius),
        height: convertToRem(height),
        width: convertToRem(width)
      }}
    >
      {isLoading ? <Loading type="standard" size="small" /> : children}
    </Box>
  )
}

export default Button
