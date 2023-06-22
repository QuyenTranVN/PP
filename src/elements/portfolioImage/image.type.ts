import React from 'react'
export interface PortfolioImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderSrc: string
  src: string
}

export interface IImageSize {
  width: number | string
  height: number | string
}
