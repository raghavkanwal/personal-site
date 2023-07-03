import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
    return (<div className={styles.footerContainer}>
        <p>{new Date().getFullYear()} © Raghav Kanwal</p>
        
    </div>)
}