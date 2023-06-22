import ContentUnderSlidePage from './components/contentUnderSliderPage'
import SectionNext from './components/sectionNext'
import SectionNext1 from './components/sectionNext1'
import SectionNext2 from './components/sectionNext2'
import SectionNext3 from './components/sectionNext3'
import SectionNext4 from './components/sectionNext4'
import SliderLandingPage from './components/silderLandingPage'
import UnderContent from './components/underContent'
import { Box } from '@mui/material'
import styles from './landingPage.module.scss'
import VideoIntro from 'assets/imgs/video-intro.svg'
import StartUp from './components/startUp'
import SchumpeterProgram from './components/schumpeterProgram'
import Experience from './components/experience'
import StartBusiness from './components/startBusiness'

const LandingPage = () => {

  return (
    <div className={`${styles.landing_page}`}>
      <StartUp />
      <Box component="img" className={styles['video-intro']} src={VideoIntro} />
      <SchumpeterProgram />
      <Experience />
      <SliderLandingPage />
      <ContentUnderSlidePage />
      <UnderContent />
      <SectionNext />
      <SectionNext1 />
      <SectionNext2 />
      <SectionNext3 />
      <SectionNext4 />
      <StartBusiness />
    </div>
  )
}

export default LandingPage
