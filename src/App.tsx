import { Post } from "./Post"
import { Header } from "./components/Header"
import './globals.css'

function App() {
  return (
    <div>
      <Header/>
      <Post 
        author="Carlos Matheus" 
        content="Lorem ipsum"
      />
      <Post 
        author="Carlos Viana" 
        content="Dolor sit"
      />
    </div>
  )
}

export default App
