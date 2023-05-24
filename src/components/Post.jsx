import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){

    return (
      <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src="https://github.com/ALiandroK.png" />
                <div className={styles.authorInfo}>
                    <strong>Aliandro K.</strong>
                    <span>Developer</span>
                </div>
            </div>

            <time title="15 de Maio 2023 às 21:53h" dateTime="2023-05-11 21:53:30">Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            <p>Fala Galeraa!</p>
            <p>Acabei de subir mais um projeto no git.</p>
            <p><a href="">jane.design/doctorcare</a></p>
            <p>
                <a href="">#novoprojeto</a>{' '}
                <a href="">#novoDesafio</a>
            </p>
        </div>


        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
         
            <textarea 
              placeholder='Deixe um comentário...'
            />
          
            <footer>
                <button type="submit">Publicar</button>
            </footer>  
        </form>

        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>

      </article>
    ); 
}