import React from 'react'
import { DialogProps } from '@mui/material'

export type AlertPopupProps = DialogProps & {
  title: string
  description?: React.ReactNode
  cancelTitle?: string
  submitTitle?: string
  onSubmit?: () => void
  onCancel?: () => void
} & (
    | {
        onSubmit: () => void
      }
    | {
        onCancel?: () => void
      }
  )
