import React from 'react'
import styles from './notes.module.scss'
import Wrapper from '../../components/hoc/wrapper'
import Greeting from '../../components/atoms/greeting'
import Note from '../../components/cards/note'
import notesData from '../../data/notes.json'

function Notes() {
  return (
    <section className={styles.container}>
        <Greeting/>
        <main>
          {notesData.map((note, i)=><Note key={note.id} text={note.text} date={note.date} color={note.color} />)}
        </main>
    </section>
  )
}

export default Wrapper (Notes)