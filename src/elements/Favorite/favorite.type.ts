import { ReactNode } from 'react'

export interface FavoriteProps {
  onClick: () => void
  checked: boolean
  className?: string | undefined
}
