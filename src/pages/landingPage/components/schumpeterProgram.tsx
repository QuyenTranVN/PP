import { Box, Grid } from '@mui/material'
import styles from '../landingPage.module.scss'
import Logos from 'assets/imgs/program-logos.svg'
import slide1 from 'assets/imgs/img1.jpg'
import slide2 from 'assets/imgs/img2.jpg'
import slide3 from 'assets/imgs/img3.jpg'
import slide4 from 'assets/imgs/img4.jpg'
import slide5 from 'assets/imgs/img5.jpg'
import slide6 from 'assets/imgs/img6.jpg'
import slide7 from 'assets/imgs/img7.jpg'
import Slider from "react-slick";

const slideData = [
  {
    id: 1,
    avatar: slide1,
    name: '김OO',
    occupation: '00대학 수료자(취업준비생)',
    comment: '혼자서 생각하기 어려운 아이디어를 이끌어내 주었습니다.',
    content: '새로운 시선으로 창의적인 생각을 할 수 있는 프로그램이었던거 같았어요.'
  },
  {
    id: 2,
    avatar: slide2,
    name: '정OO',
    occupation: '00대학 수료자(취업준비생)',
    comment: '트렌드에 대한 부분을 파악하기 위한 콘텐츠들이 좋았습니다. :) ',
    content:
      '사업가는 현재가 아닌 미래를 내다보기 때문에 저의 커리어 고민 외에도 미래에 대한 넓은 시야를 가질 수 있었습니다.'
  },
  {
    id: 3,
    avatar: slide3,
    name: '임OO',
    occupation: '스포츠 IR 교육 수료자 (직장인)',
    comment: ' 구체적 금액산정을 통해 사업 소득활동 구상에 도움되었습니다.',
    content:
      '수익구조를 그냥 대략적으로만 생각하고 실제로 계산해보질 않았었는데, 프로그램이 자동으로 계산해주고 어떤 요소를 고려해야 하는지 한 번에 알 수 있어서 매우 유용했습니다!'
  },
  {
    id: 4,
    avatar: slide4,
    name: '김OO',
    occupation: '스포츠 IR 교육 수료자 (예비창업자)',
    comment: ' 수익구조에 어려움을 쉽게 방법을 알려주셔서 좋았습니다.',
    content:
      '5가지의 수익구조 중에서 어떤 수익 수단을 가지고 구체적인 매출 목표를 설정할지 구체화 할 수 있었습니다. 사업과 소득 활동의 구상을 가능하게 해주었습니다'
  },
  {
    id: 5,
    avatar: slide5,
    name: '윤OO',
    occupation: '취업준비생',
    comment: '사업계획서 작성하는 방법과 전략 기획방법을 알게된 계기가 되었어요.',
    content:
      '어려웠던 예비창업자 패키지 사업계획서 작성 에 있어서 k-창업준비에 슘페터 프로그램이 ‘국룰’이 되기를 바랍니다'
  },
  {
    id: 6,
    avatar: slide6,
    name: '나OO',
    occupation: '예비창업자',
    comment: "정말 K창업준비는 슘패터가 '국룰'이 되시길 바래요 >ㅅ<",
    content:
      '퇴사를 생각하고 사업할까를 고민했지만 접근성과 혼자 해야한다는 큰 담벼락이 있었지만 해당 프로그램을 통해 방향성과 어떤것들이 필요한지를 알게 되었습니다 비록 직장생화를 계속하고 있지만 프로그램을 수료하고  업무에 더욱 도움이 된거같습니다.'
  },
  {
    id: 7,
    avatar: slide7,
    name: '김OO',
    occupation: '작장인 (예비창업자)',
    comment: '트렌드와 아이디어를 받을수 있는 영감을 얻게 된거같습니다',
    content:
      '창업을 하려는데 무자본으로 하려니 막막해서 정부지원금을 받아서 할수 있다고 듣게되서 지원하게 되었습니다만 사업계획서는 작성하는 방법과 존재자체를 몰랐지만 해당프로그램을 통해 많은것을 배워갑니다.'
  }
]

const SchumpeterProgram = () => {
  return (
    <Box className={styles['session-schumpeter-program']}>
      <Box className={styles.info}>
        <Box className={styles['title-info']}>
          <Box component="p">슘페터 프로그램만의 차별화된 프로그램을 통해</Box>
          <Box component="p">현재까지 수많은 교육생들과 기관과 함께했습니다.</Box>
        </Box>
        <Grid
          className={styles.statistics}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={8}
        >
          <Grid item>
            <div>
              <Box component="p" className={styles.title}>
                함께한 기관
              </Box>
              <Box component="p" className={styles.value}>
                47 <Box component="span">건</Box>
              </Box>
            </div>
          </Grid>
          <Grid item>
            <div>
              <Box component="p" className={styles.title}>
                함께한 대학
              </Box>
              <Box component="p" className={styles.value}>
                102 <Box component="span">건</Box>
              </Box>
            </div>
          </Grid>
          <Grid item>
            <div>
              <Box component="p" className={styles.title}>
                누적교육생
              </Box>
              <Box component="p" className={styles.value}>
                11,470 + <Box component="span">명</Box>
              </Box>
            </div>
          </Grid>
        </Grid>
        <Box className={styles['main-content']}>
          <Box component="p" className={styles['main-content-title']}>
            이렇게 많은 곳에서 메인콘텐츠와 함께했습니다!
          </Box>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
              <Box component="p" className={styles['main-content-p']}>
                서울 : 10개 기관, 22개 대학
              </Box>
            </Grid>
            <Grid item>
              <Box component="p" className={styles['main-content-p']}>
                경기 : 7개 기관, 19개 대학
              </Box>
            </Grid>
            <Grid item>
              <Box component="p" className={styles['main-content-p']}>
                경상도 : 18개 기관, 23개 대학
              </Box>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
              <Box component="p" className={styles['main-content-p']}>
                전라도 : 2개 기관, 9개 대학
              </Box>
            </Grid>
            <Grid item>
              <Box component="p" className={styles['main-content-p']}>
                충청도 : 7개 대학
              </Box>
            </Grid>
            <Grid item>
              <Box component="p" className={styles['main-content-p']}>
                강원도 : 2개 대학
              </Box>
            </Grid>
            <Grid item>
              <Box component="p" className={styles['main-content-p']}>
                제주도 : 3개 기관
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box component="img" className={styles.logos} src={Logos} />
      <Box className={styles.logos}>
        <Box component="p" className={styles['slide-title']}>
          슘페터는 창업 문화를 만들어 가고있습니다
        </Box>
      </Box>
      <div className={styles["slide-container"]}>
        <Slider slidesToScroll={1} slidesToShow={5} autoplay={true} speed={1000} dots={false} arrows={false} infinite={true}>
          {slideData.map((slide, index) => (
            <div className={styles["each-slide"]} key={index}>
              <div className={styles["slide-item"]}>
                <div className={styles["user-info"]}>
                  <Box component="img" src={slide.avatar} />
                  <div className={styles["user-info-content"]}>
                    <p className={styles["user-name"]}>{slide.name}</p>
                    <p className={styles["user-occupation"]}>{slide.occupation}</p>
                  </div>
                </div>
                <div className={styles["user-quote"]}>
                  <div>“ </div>
                  <div>{slide.comment}</div>
                  <div> ”</div>
                </div>
                <div className={styles["slide-content"]}>{slide.content}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Box>
  )
}

export default SchumpeterProgram
