import styles from './Avatar.module.css'

type Props = {
  src: string,
  alt?: string
  hasBorder?: boolean,
}

export function Avatar({src, alt, hasBorder = true}: Props) {
  const borderClass = hasBorder ? styles.avatarWithBorder : styles.avatar
  return (
    <img 
      className={borderClass} 
      src={src} alt={alt} 
    />
  )
}