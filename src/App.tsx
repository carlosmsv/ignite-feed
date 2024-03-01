
import { Header } from "./components/Header"
import './globals.css'

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/carlosmsv.png",
      name: "Carlos Viana",
      role: "Full Stack Web Developer"
    },
    content: [
     {type: "paragraph", content: "Hey y'all 👋" },
     {type: "paragraph", content: 'I just posted another project on GitHub.'},
     {type: "link", content: "github.com/carlosmsv"},
    ],
    publishedAt: new Date('2024-02-29 21:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/carlosmsv.png",
      name: "Carlos Matheus",
      role: "Full Stack Web Developer"
    },
    content: [
     {type: "paragraph", content: "Fala galeraa 👋" },
     {type: "paragraph", content: 'Acabei de subir mais um projeto no meu Github.'},
     {type: "link", content: "github.com/carlosmsv"},
    ],
    publishedAt: new Date('2024-02-29 21:31:20'),
  }
]

function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author} 
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>
    </div>
  )
}

export default App
