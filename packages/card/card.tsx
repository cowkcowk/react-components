import type { CardProps } from './types'
import * as CardPrimitive from './primitives'

function Card({
  appearance,
  heading,
  link,
  thumbnail,
  meta,
  description
}: CardProps) {
  return (
    <CardPrimitive.Card appearance={appearance} heading={heading} link={link}>
      {thumbnail ? (
        <CardPrimitive.Thumbnail src={thumbnail.src} alt={thumbnail.alt} />
      ) : null}
      <CardPrimitive.Content>
        
      </CardPrimitive.Content>
    </CardPrimitive.Card>
  )
}

export default Card
