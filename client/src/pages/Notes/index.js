import React, { useEffect, useState } from 'react'
import styles from './notes.module.scss'
import Wrapper from '../../components/hoc/wrapper'
import Greeting from '../../components/atoms/greeting'
import Note from '../../components/cards/note'
import notesData from '../../data/notes.json'
import utils from '../../utils/localStorage'
import types from '../../config/types'

function Notes() {
  const [notesColl, setNotesColl] = useState([]);
  const data = utils.getFromLocalStorage(types.NOTES_DATA);

  useEffect(()=>{
    if(data && data.length){
      setNotesColl(data);
      return;
    }
    utils.addToLocalStorage(types.NOTES_DATA,notesData);
    setNotesColl(notesData);
  }, [data])
  return (
    <section className={styles.container}>
        <Greeting/>
        <main>
          {notesColl.map((note, i)=><Note key={note.id} text={note.text} date={note.date} color={note.color} />)}
        </main>
    </section>
  )
}

export default Wrapper (Notes)