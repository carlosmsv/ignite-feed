import { PiThumbsUp, PiTrash } from "react-icons/pi"
import styles from './Comment.module.css'
import { Avatar } from "./Avatar"

type Props = {
  content: string
}

export function Comment({content}: Props) {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/carlosmsv.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Carlos Matheus</strong>
              <time title="21 de Janeiro às 14:20h" dateTime="2024-01-21 14:20:00" className={styles.date}>Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <PiTrash size={24} />
            </button>

          </header>
          <p>{content}</p>
        </div>   
        <footer>
            <button>
              <PiThumbsUp />
              Aplaudir <span>20</span>
            </button>
        </footer>   
      </div>
    </div>
  )
}