import React from 'react'
import styles from './sidebar.module.scss'
import BrandLogo from '../brand'
import { Icon } from '@iconify/react/dist/iconify.js'
import sideData from '../../../data/sidebar.json'
import { useNavigate } from 'react-router-dom'
import utils from '../../../utils/localStorage'
import types from '../../../config/types'

function Sidebar() {
    const navigate = useNavigate()
    const handleClick = (item)=>{
        if(item.path==='/notes'){
           let data =  utils.getFromLocalStorage(types.NOTES_DATA)
           let updatedData = [{id: data.length+1, color: "#FBEB9566", text:"", date:new Date().toISOString()}, ...data]
           utils.addToLocalStorage(types.NOTES_DATA, updatedData);
        }
    }
  return (
    <aside className={styles.sidebar}>
        <BrandLogo logoOnly={true} type="dark" className={styles.logo}/>
        <section>
            {
                sideData.map((item, index)=>{
                    return(
                    <article key={index} className={styles.item} onClick={()=>handleClick(item)}>
                        <Icon icon={item.icon} color={index===1?"var(--grey-400)":"var(--white)"}/>
                    </article>)
                })
            }
        </section>
        <article className={styles.logout}>
            <Icon icon={"material-symbols:logout"} onClick={()=>navigate("/")}/>
        </article>
    </aside>
  )
}

export default Sidebar