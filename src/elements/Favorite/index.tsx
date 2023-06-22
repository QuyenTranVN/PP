import React from 'react'
import { FavoriteProps } from './favorite.type'
import { IconButton } from '@mui/material'
import HeartBlankIcon from 'assets/icons/HeartBlank'
import HeartIcon from 'assets/icons/Heart'
import styles from './favorite.module.scss'
const Favorite: React.FC<FavoriteProps> = ({ checked, onClick, className }) => {
  return (
    <IconButton
      onClick={onClick}
      aria-label="toggle password visibility"
      className={`${styles.favorite_icon} ${className}`}
    >
      {checked ? <HeartBlankIcon /> : <HeartIcon />}
    </IconButton>
  )
}

export default Favorite
