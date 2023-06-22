import { Dialog, Button, DialogContent } from '@mui/material'
import { useState, SyntheticEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './alertPopup.module.scss'
import { AlertPopupProps } from './alertPopup.type'
import Text from '../Text'
export default function AlertPopup({
  title,
  description,
  onSubmit,
  onCancel,
  submitTitle,
  cancelTitle,
  onClose,
  ...props
}: AlertPopupProps) {
  const handleClose = (event: any, reason: 'backdropClick' | 'escapeKeyDown') => {
    if (reason === 'backdropClick' && props.disableEscapeKeyDown) {
      event.preventDefault()
      return
    } else {
      if (onCancel) {
        onCancel()
      } else if (onSubmit) {
        onSubmit()
      }
    }
  }
  return (
    <Dialog
      onClose={handleClose}
      {...props}
      classes={{ paper: styles.popup_paper, container: styles.popup_container, root: styles.popup_root }}
    >
      <DialogContent className={`${styles.popup_wrapper}`}>
        <div className={`${styles.content_wrapper}`}>
          <Text variant="black" size="lg" bold="xl" className={`${styles.title}`}>
            {title}
          </Text>
          <Text variant="gray400" size="md" bold="md" className={`${styles.description}`}>
            {description}
          </Text>
        </div>
        <div className={`${styles.action_wrapper}`}>
          {cancelTitle !== undefined ||
            (onCancel !== undefined && (
              <Button onClick={onCancel}>
                <Text variant="blue" size="md" bold="md">
                  {cancelTitle || '취소'}
                </Text>
              </Button>
            ))}
          {submitTitle !== undefined ||
            (onSubmit !== undefined && (
              <Button onClick={onSubmit}>
                <Text variant="blue" size="md" bold="md">
                  {submitTitle || '확인'}
                </Text>
              </Button>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
