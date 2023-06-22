import { ReactNode } from 'react'

export interface CheckboxProps {
  label: ReactNode
  onClick: () => void
  checked: boolean
  className?: string | undefined
}
