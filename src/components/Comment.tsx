import { PiThumbsUp, PiTrash } from "react-icons/pi"
import styles from './Comment.module.css'

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/carlosmsv.png" alt="" />
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
          <p>Very well, Dev, congratulations!! 👏👏</p>
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