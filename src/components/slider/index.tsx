import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import styles from './slider.module.scss'
import { useState } from 'react'
import { useMediaQuery } from '@mui/material'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: 'https://i.ibb.co/G2VYw4y/Rectangle-2657.png'
  },
  {
    label: 'Bird',
    imgPath: 'https://i.ibb.co/G2VYw4y/Rectangle-2657.png'
  },
  {
    label: 'Bali, Indonesia',
    imgPath: 'https://i.ibb.co/G2VYw4y/Rectangle-2657.png'
  },
  {
    label: 'Goč, Serbia',
    imgPath: 'https://i.ibb.co/G2VYw4y/Rectangle-2657.png'
  }
]

function Slider() {
  const matches = useMediaQuery('(max-width: 576px)')
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = images.length

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }

  return (
    <Box className={styles['wrapper-slider']}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={4000}
        slideCount={2}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: matches ? 140 : 280,
                  display: 'block',
                  width: '100%'
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box className={styles['step-count']}>
        <Box component="span" className={styles['active-step']}>
          {activeStep + 1}
        </Box>
        <Box component="span" className={styles['max-step']}>
          {` / ${maxSteps}`}
        </Box>
      </Box>
    </Box>
  )
}

export default Slider
