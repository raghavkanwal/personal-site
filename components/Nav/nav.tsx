import React from 'react'
import styles from './nav.module.scss'
import { navigationMenuItems } from './navigation-items'
import Link from 'next/link'
import { ThemeToggle } from '../ui/theme-toggle'

export default function Nav() {
    return (
        <main className={`${styles.navContainer}`}>
            <div className="flex justify-between items-center">
                <span className="font-bold">Raghav Kanwal</span>
                <div className="flex items-center">
                { navigationMenuItems.map((item, idx) => {
                    return (<span key={idx}>
                        <Link className={styles.link} href={item.path}>{item.name}</Link>
                        { idx === navigationMenuItems.length -1 ? <span className="mx-2"></span> : <span className={styles.separator}>/</span> }
                        </span>)
                }) }
            <ThemeToggle />
                </div>
            </div>
        </main>
    )
}