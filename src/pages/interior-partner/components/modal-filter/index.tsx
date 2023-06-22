import { forwardRef, ReactElement, Ref, useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { ModalFilterProps } from './modal-filter.type'
import { Box, useMediaQuery } from '@mui/material'
import styles from './modal-filter.module.scss'
import CircleArrowIcon from 'assets/icons/circle-arrow'
import GroupItem from '../group-filter'
import { useFilter } from 'hooks/use-filter'
import CloseGreyIcon from 'assets/icons/close-grey'
import { useWindowSize } from 'hooks/useWindowSize'
import Button from 'elements/button'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const spaceClassification = [
  { eng: 'a', kor: '전체', isActive: false },
  { eng: 'b', kor: '주거', isActive: false },
  { eng: 'c', kor: '상업', isActive: false }
]

const serviceProvided = [
  { eng: 'd', kor: '전체', isActive: false },
  { eng: 'e', kor: '주거', isActive: false },
  { eng: 'f', kor: '상업', isActive: false }
]

const area = [
  { eng: 'g', kor: '전체', isActive: false },
  { eng: 'h', kor: '주거', isActive: false },
  { eng: 'k', kor: '상업', isActive: false }
]

const ModalFilter = ({ open, handleClose, getActiveFilter, onSave }: ModalFilterProps) => {
  const matches = useMediaQuery('(max-width: 576px)')
  const size = useWindowSize()
  console.log(size)
  const [
    filterSpaceClassification,
    resetFilterSpaceClassification,
    onClickFilterSpaceClassification,
    filterActiveSpaceClassification
  ] = useFilter(spaceClassification)

  const [filterServiceProvided, resetFilterServiceProvided, onClickFilterServiceProvided, filterActiveServiceProvided] =
    useFilter(serviceProvided)

  const [filterArea, resetFilterArea, onClickFilterArea, filterActiveArea] = useFilter(area)

  const resetAllFilter = () => {
    resetFilterArea(area)
    resetFilterServiceProvided(serviceProvided)
    resetFilterSpaceClassification(spaceClassification)
  }

  useEffect(() => {
    getActiveFilter([...filterActiveArea, ...filterActiveServiceProvided, ...filterActiveSpaceClassification])
  }, [filterActiveArea, filterActiveServiceProvided, filterActiveSpaceClassification])

  const heightModal = size.height ? size.height - 200 : 0

  return (
    <Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          '&.MuiDialog-root': {
            top: matches ? 'unset' : 0
          }
        }}
        PaperProps={{
          style: matches
            ? {
                width: size.width,
                height: heightModal,
                padding: 16,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                margin: 0,
                overflowX: 'unset'
              }
            : {
                width: '100%',
                height: '100%',
                maxWidth: 680,
                maxHeight: 400,
                padding: '16px 22px 16px 16px',
                borderRadius: 16
              }
        }}
      >
        <Box className={styles['header-modal']}>
          <Box className={styles['left-header']}>
            <Box component="p">필터</Box>
            <Box role="button" onClick={resetAllFilter}>
              <CircleArrowIcon />
              <Box component="span">초기화</Box>
            </Box>
          </Box>
          {matches ? (
            <Box role="button" className={styles['close-title']} onClick={handleClose}>
              닫기
            </Box>
          ) : (
            <Box className={styles['right-header']}>
              <Box role="button" onClick={onSave}>
                저장
              </Box>
              <Box role="button" onClick={handleClose}>
                <CloseGreyIcon />
              </Box>
            </Box>
          )}
        </Box>
        <DialogContent sx={{ padding: 0, margin: 0 }}>
          <GroupItem title="공간분류" data={filterSpaceClassification} onClick={onClickFilterSpaceClassification} />
          <GroupItem title="제공 서비스" data={filterServiceProvided} onClick={onClickFilterServiceProvided} />
          <GroupItem title="지역" data={filterArea} onClick={onClickFilterArea} />
        </DialogContent>
        {matches ? (
          <Button cate="standard" onClick={onSave}>
            적용
          </Button>
        ) : null}
      </Dialog>
    </Box>
  )
}

export default ModalFilter
