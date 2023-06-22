import { ReactNode } from 'react'
export interface TextProps {
  children: ReactNode
  size: 'md' | 'lg' | 'xl' | 'sm' | '2xl'
  bold: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant: 'black' | 'gray200' | 'gray300' | 'gray400' | 'white' | 'error' | 'blue'
  className?: any
}
