import { ListItemProps } from '@mui/material'

export type Anchor = 'top' | 'left' | 'bottom' | 'right'

export interface DrawerProps {
  children: any
  anchor: Anchor
}

export interface ListItemLinkProps extends ListItemProps {
  to?: string
  open?: boolean | undefined | null
  text?: string
  onClick?: () => void | undefined
}
