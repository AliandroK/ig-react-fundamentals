import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';

function App() {
 

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
      </div>
      <main>
        <h1>Teste</h1>
      </main>

    </div>
  )
}

export default App
