import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl : "https://github.com/ALiandroK.png",
      name : "Aliandro",
      role : "Developer"
    },
    
    content:[
      {type: "paragraph", content:"Fala Galera"},
      {type: "paragraph", content:"Acabei de subir meu novo projeto"},
      {type: "link", content:"jane.design/doctorcare" },
    ],
    publishedAt: new Date('2023-05-28 22:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl : "https://github.com/ALiandroK.png",
      name : "Jose",
      role : "Developer"
    },
    
    content:[
      {type: "paragraph", content:"Fala Galera"},
      {type: "paragraph", content:"Acabei de subir meu novo design"},
      {type: "link", content:"jane.design/doctorcare" },
    ],
    publishedAt: new Date('2023-05-28 23:00'),
  },

];


function App() {
 
   return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
            );
          })}
        </main>
      </div>
      
    </div>
  )
}

export default App
