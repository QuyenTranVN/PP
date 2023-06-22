import { Box, IconButton, Avatar } from '@mui/material'
import { useState, useEffect } from 'react'
import Text from 'elements/Text'
import styles from './portfolioDetail.module.scss'
// import { PortfolioDetailProps } from './portfolioDetail.type'
import { IPortfolio } from 'types/portfolio.types'
import { useNavigate } from 'react-router-dom'
import ChevronLeftIcon from 'assets/icons/ChevronLeft'
import FavoriteCheckbox from 'elements/Favorite'
import Tag from 'elements/Tag'
import ChevronRight from 'assets/icons/ChevronRight'
import PortfolioImage from 'elements/portfolioImage'
const tempPortfolio: IPortfolio = {
  thumbnail: 'https://www.tapchikientruc.com.vn/wp-content/uploads/2020/05/20B05004-01.jpg',
  title: '신혼 부부가 많이 찾는 모던 신풍 스타일',
  spaceType: '오피스',
  scale: '31평',
  style: '모던',
  listImages: [
    'https://noithatnhadepviet.vn/upload/elfinder/h%C3%ACnh%20thi%E1%BA%BFt%20k%E1%BA%BF/NH%C3%80%20PH%E1%BB%90/NH%C3%80%20PH%E1%BB%90%20QU%E1%BA%ACN%2010/nha%20pho%20quan%2010%203.jpg',
    'https://noithatmanhhe.vn/media/27399/11-thiet-ke-noi-that-phong-khach.jpg',
    'https://soulconcept.vn/wp-content/uploads/2021/11/77cdbb129621915.616ef8d8194df.jpg'
  ],
  partnerInfo: {
    name: '우드텍 디자인',
    avatar: ''
  }
}

const PortfolioDetailPage = () => {
  const navigate = useNavigate()
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  return (
    <div className={`${styles.portfolio_detail}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.navigate_visible}`}>
          <IconButton className={`${styles.close_icon}`} onClick={() => navigate(-1)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div className={`${styles.thumbnail_wrapper}`}>
          <img src={tempPortfolio.thumbnail} />
          <div className={`${styles.favorite_icon}`}>
            <FavoriteCheckbox
              onClick={() => {
                setIsFavorite((prev: boolean) => !prev)
              }}
              checked={isFavorite}
            />
          </div>
        </div>
        <div className={`${styles.portfolio_info_wrapper}`}>
          <p className={`${styles.title}`}>{tempPortfolio.title}</p>
          <div className={`${styles.tags}`}>
            <Tag label={tempPortfolio.spaceType} color="blue" />
            <Tag label={tempPortfolio.scale} color="blue" />
            <Tag label={tempPortfolio.style} color="blue" variant="outlined" />
          </div>
        </div>
        <div className={`${styles.interior_container}`}>
          <div className={`${styles.interior_info}`}>
            <div className={`${styles.info_wrapper}`}>
              <Avatar src={tempPortfolio.partnerInfo.avatar} className={`${styles.avatar}`} />
              <Text bold="lg" size="lg" variant="black">
                {tempPortfolio.partnerInfo.name}
              </Text>
            </div>
            <IconButton>
              <ChevronRight />
            </IconButton>
          </div>
        </div>
        <div className={`${styles.image_list}`}>
          {tempPortfolio.listImages?.map((item, index) => (
            <PortfolioImage placeholderSrc={item} src={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioDetailPage
