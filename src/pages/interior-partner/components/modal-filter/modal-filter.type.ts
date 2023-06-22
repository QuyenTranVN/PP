export interface ModalFilterProps {
  open: boolean
  handleClose: () => void
  getActiveFilter: (value: any) => void
  onSave: () => void
}
