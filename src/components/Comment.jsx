import styles from './Comment.module.css';
import {Trash, ThumbsUp} from 'phosphor-react'

export function Comment(){

    return(
        <div className={styles.comment}>
            <img src="https://github.com/ALiandroK.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Aliandro K.</strong>
                            <time title="15 de Maio 2023 às 21:53h" dateTime="2023-05-11 21:53:30">Publicado há 1h</time>
                        </div>

                        <button title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito Bom, parabéns!</p>
                </div>

                <footer>
                    <button>
                      <ThumbsUp />  
                      Aplaudir <span>20</span> 
                    </button>
                </footer>
            </div>
        </div>
    );

}