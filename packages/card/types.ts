import React from 'react'

export interface BaseCardProps {
  apprearance?: 'light' | 'dark'
  withArrow?: boolean
  heading: string
  link: string
}

export interface CardPrimitiveProps extends BaseCardProps {
  children: React.ReactNode
}

export interface ThumbnailProps {
  src: string
  alt: string
}

