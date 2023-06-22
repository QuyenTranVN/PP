import React from 'react'
import { TextProps } from './text.type'
import styles from './text.module.scss'
const Text: React.FC<TextProps> = ({ children, size, bold, variant, className }) => {
  return (
    <p className={`${styles['bold-' + bold]} ${styles['size-' + size]} ${styles['color-' + variant]} ${className}`}>
      {children}
    </p>
  )
}

export default Text
