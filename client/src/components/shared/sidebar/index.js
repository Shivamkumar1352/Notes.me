import React from 'react'
import styles from './sidebar.module.scss'
import BrandLogo from '../brand'
import { Icon } from '@iconify/react/dist/iconify.js'
import sideData from '../../../data/sidebar.json'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <BrandLogo logoOnly={true} type="dark" className={styles.logo}/>
        <section>
            {
                sideData.map((item, index)=>{
                    return(
                    <article key={index} className={styles.item}>
                        <Icon icon={item.icon} color={index===1?"var(--grey-400)":"var(--white)"}/>
                    </article>)
                })
            }
        </section>
        <article className={styles.logout}>
            <Icon icon={"line-md:logout"}/>
        </article>
    </aside>
  )
}

export default Sidebar