import { PiHandsClapping, PiTrash } from "react-icons/pi"
import styles from './Comment.module.css'
import { Avatar } from "./Avatar"
import { useState } from "react"

type Props = {
  content: string
  onDeleteComment: (content: string) => void
}

export function Comment({content, onDeleteComment}: Props) {
  const [applauseCount, setApplauseCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleApplauses(){
    setApplauseCount((state) => {
      return state + 1
    })
  }

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

            <button 
              onClick={handleDeleteComment}
              title="Deletar comentário">
              <PiTrash size={24} />
            </button>

          </header>
          <p>{content}</p>
        </div>   
        <footer>
            <button onClick={handleApplauses}>
              <PiHandsClapping />
              Aplaudir <span>{applauseCount}</span>
            </button>
        </footer>   
      </div>
    </div>
  )
}