import styles from './Header.module.css'
import logo from '../assets/Ignite-logo.svg'

export function Header(){
  return (
    <div>
       <header className={styles.header}>
          <img src={logo} alt="Logo Ignite" />
          <strong>Ignite Feed</strong>
       </header>

    </div>

  );

}