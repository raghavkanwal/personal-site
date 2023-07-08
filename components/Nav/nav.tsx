import React from 'react'
import styles from './nav.module.scss'
import { navigationMenuItems } from './navigation-items'
import Link from 'next/link'

export default function Nav() {
    return (
        <main className={styles.navContainer}>
            { navigationMenuItems.map((item, idx) => {
                return (<span key={idx}>
                    <Link className={styles.link} href={item.path}>{item.name}</Link>
                    { idx === navigationMenuItems.length -1 ? "" : <span className={styles.separator}>/</span> }
                    </span>)
            }) }
        </main>
    )
}