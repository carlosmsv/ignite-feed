import styles from './Avatar.module.css'

type Props = {
  src: string,
  alt?: string
  hasBorder?: boolean,
}

export function Avatar({src, alt, hasBorder = true}: Props) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} alt={alt} 
    />
  )
}