import * as React from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import type {
  CardPrimitiveProps,
  ThumbnailProps,
  MetaProps,
  ContentProps,
  HeadingProps,
  ProductBadgesProps,
  DescriptionProps,
} from './types'

const Card = React.forwardRef<HTMLAnchorElement, CardPrimitiveProps>(
  (props, ref) => {
    const {
      children
    } = props
    return (
      <div>
        <div>
          {children}
        </div>
      </div>
    )
  }
)

function Content({ children }: ContentProps) {
  return (
    <div>
      {children}
    </div>
  )
}

function Description({ children }: DescriptionProps) {
  return (
    <p>
      {children}
    </p>
  )
}

Card.displayName = 'Card'
export { Card, Thumbnail, Content }
