import React from 'react'
import { CheckboxProps } from './checkbox.type'
import { IconButton } from '@mui/material'
import Text from '../Text'
import CheckboxIcon from 'assets/icons/Checkbox'
import CheckboxCheckedIcon from 'assets/icons/CheckboxChecked'
import styles from './checkbox.module.scss'
const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onClick, className }) => {
  return (
    <div
      className={`${styles.checkbox_wraper} ${className || ''}`}
      onClick={() => {
        onClick()
      }}
    >
      <IconButton aria-label="toggle password visibility">
        {checked ? <CheckboxCheckedIcon /> : <CheckboxIcon />}
      </IconButton>
      <Text variant="gray400" bold="md" size="md">
        {label}
      </Text>
    </div>
  )
}

export default Checkbox
