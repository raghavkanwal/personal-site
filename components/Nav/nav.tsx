import React from 'react'
import styles from './nav.module.scss'
import { navigationMenuItems } from './navigation'
import Link from 'next/link'

export default function Nav() {
    return (
        <main className={styles.navContainer}>
            { navigationMenuItems.map((item, idx) => {
                return (<Link className={styles.link} key={idx} href={item.path}>{item.name}</Link>)
            }) }
        </main>
    )
}