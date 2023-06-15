import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import {Trash, ThumbsUp} from 'phosphor-react'

export function Comment({content, onDeleteComment}){

   const [likesComment, setLikesComment] = useState(0);

   function handleOnClickLikeComment(){
    setLikesComment((state) => {return state + 1});  
   }

   function handleClinclDeleteComment(){
    onDeleteComment(content);
   }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/ALiandroK.png" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Aliandro K.</strong>
                            <time title="15 de Maio 2023 às 21:53h" dateTime="2023-05-11 21:53:30">Publicado há 1h</time>
                        </div>

                        <button title="Deletar Comentário" onClick={handleClinclDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleOnClickLikeComment}>
                      <ThumbsUp />  
                      Aplaudir <span>{likesComment}</span> 
                    </button>
                </footer>
            </div>
        </div>
    );

}