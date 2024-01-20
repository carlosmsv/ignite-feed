
import { Header } from "./components/Header"
import './globals.css'

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author = "Carlos Matheus"
            content = "Lorem ipsum"
          />
          <Post
            author = "Carlos Viana"
            content = "Lorem ipsum dolor"
          />
        </main>

      </div>
    </div>
  )
}

export default App
