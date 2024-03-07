import { ImgHTMLAttributes } from "react"
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean,
}

export function Avatar({hasBorder = true, ...props }: AvatarProps) {
  const borderClass = hasBorder ? styles.avatarWithBorder : styles.avatar
  return (
    <img 
      className={borderClass} 
      {...props}
    />
  )
}