import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { PortfolioImageProps, IImageSize } from './image.type'

const PortfolioImage = ({ placeholderSrc, src, ...props }: PortfolioImageProps) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src)
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageSize, setImageSize] = useState<IImageSize>({ width: 'auto', height: 'auto' })
  useEffect(() => {
    const img = new Image()
    img.onload = event => {
      try {
        const imageWidth = img?.width || 0
        const imageHeight = img?.height || 0
        const windowWidth = window.innerWidth

        let compareWidth = 694
        if ((windowWidth || 0) < 694) {
          compareWidth = windowWidth || 0
        }
        if (imageWidth <= compareWidth) {
          setImageSize({ width: imageWidth, height: imageHeight })
        } else {
          setImageSize({ width: '100%', height: 'auto' })
        }
        setImgSrc(src)
        setIsLoaded(true)
      } catch (error) {
        console.log(error)
      }
    }
    img.src = src
  }, [src])
  const customClass =
    placeholderSrc && imgSrc === placeholderSrc && !isLoaded
      ? styles['progressive-image-loading']
      : styles['progressive-image-loaded']
  return (
    <>
      {!isLoaded && <div className={`${customClass} ${props.className}`} style={props.style} />}
      {isLoaded && (
        <img
          {...{ src: imgSrc, data: imgSrc, ...props }}
          style={{ ...imageSize }}
          alt={props.alt || ''}
          className={`${customClass} ${props.className}`}
        />
      )}
    </>
  )
}
export default PortfolioImage
