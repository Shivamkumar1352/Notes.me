import React, { useState } from 'react'
import styles from './note.module.scss'
import { formatDate } from '../../../utils/formatDate'
import { Icon } from '@iconify/react/dist/iconify.js';

function Note(props) {
    const{text, date, color}=props
    const[noteText, setNoteText] = useState("");
    const [expand, setExpand] = useState(false);
  return (
    <article className={styles.container} style={{backgroundColor:color}}>
        <div className={styles.content}>
          {
            !text.length?<textarea value={noteText} onChange={(e)=>setNoteText(e.target.value)} className={styles.textarea}/>:<>
            <p className={expand?styles.expanded:''}>{text}</p>
            {text.length>80?<button onClick={()=>setExpand((prev) => !prev)}>read {expand?"less":"more"}</button>:null}
            </>
          }
        
        </div>
        <footer className={styles.footer}>
        {formatDate(date)}
        <Icon icon={"fluent:delete-48-regular"}/>
        </footer>
    </article>
  )
}

export default Note