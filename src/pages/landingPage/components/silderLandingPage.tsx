// import Slider from "react-slick";
// import Slider from "react-slick"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from '.././landingPage.module.scss'

import { useRef } from 'react'
import { Box, Button, Card } from '@mui/material'
import ElipArrowRight from 'assets/icons/elip-arrow-right'
import ElipArrowLeft from 'assets/icons/elip-arrow-left'
import images1 from 'assets/imgs/images1.png'

const SliderLandingPage = () => {
  const ref: any = useRef({})

  const next = () => {
    ref.current.slickNext()
  }

  const previous = () => {
    ref.current.slickPrev()
  }

  const settings = {
    className: `${styles.slick_slider}`,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true
    // rows: 1,
    // responsive: [
    // {
    //     breakpoint: 1198,
    //     settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     rows: 1
    //     }
    // },
    // {
    //     breakpoint: 576,
    //     settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     rows: 1
    //     }
    // }
    // ]
  }
  return (
    <>
      <Box className={styles['container-grid']}>
        <div className={styles['container-grid-child']}>
          <div onClick={() => previous()}>
            <ElipArrowLeft />
          </div>
          <div className={styles['container-width-landing']}>
            <Slider {...settings} ref={ref}>
              <Box component="span">
                <div className={`${styles['grid-two-column']} ${styles['gap-1']}`}>
                  <img src={images1} className={styles['grid-img']} />
                  <div className={styles['grid-col-1']}>
                    <h4 className={styles['color-h4-slider']}>창조적 파괴 아이디어</h4>
                    <h2>
                      창조적 파괴를 통한 <br></br>아이디어 도출 방법
                    </h2>
                    <h5 className={styles['h5-content']}>
                      산업별 이해와 다양한 기법을 통해 아이디어 발상 방법을 알려드리며 예비창업자들이 사업을 뱡향성과
                      구체화 합니다.
                    </h5>
                    <div>
                      <Button className={styles['button-black']}>창조적파괴</Button>
                      <Button className={styles['button-black']}>아이디어 발상</Button>
                    </div>
                  </div>
                </div>
              </Box>
              <Box component="span">
                <div className={styles['grid-two-column']}>
                  <img src={images1} className={styles['grid-img']} />
                  <div className={styles['grid-col-1']}>
                    <h4 className={styles['color-h4-slider']}>창조적 파괴 아이디어</h4>
                    <h2>
                      창조적 파괴를 통한 <br></br>아이디어 도출 방법
                    </h2>
                    <h5 className={styles['h5-content']}>
                      산업별 이해와 다양한 기법을 통해 아이디어 발상 방법을 알려드리며 예비창업자들이 사업을 뱡향성과
                      구체화 합니다.
                    </h5>
                    <div>
                      <Button className={styles['button-black']}>창조적파괴</Button>
                      <Button className={styles['button-black']}>아이디어 발상</Button>
                    </div>
                  </div>
                </div>
              </Box>
            </Slider>
          </div>
          <div onClick={() => next()}>
            <ElipArrowRight />
          </div>
        </div>
      </Box>
    </>
  )
}

export default SliderLandingPage
