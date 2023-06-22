export interface InputProps {
  label?: string
  name: string
  control: any
  startAdornment?: any
  endAdornment?: any
  type: string
  height?: number
  width?: number | string
  customStyle?: string
  onKeyDown?: (event: any) => void
  placeholder?: string
  containerStyle?: string
  radius?: number
  disabled?: boolean
  register?: any
}
