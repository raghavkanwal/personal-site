import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
    return (<div className={styles.footerContainer}>
        <p className="whitespace-nowrap overflow-x-auto max-w-[52%]">
        <a className="mr-2 inline-block opacity-75 hover:opacity-100" href="mailto:raghav.kanwal@gmail.com">raghav.kanwal@gmail.com</a> 
        <a className="mr-2 inline-block opacity-75 hover:opacity-100" href="instagram.com/raghavkanwal">Instagram</a> 
        <a className="mr-2 inline-block opacity-75 hover:opacity-100" href="twitter.com/raghavkanwal">Twitter</a> 
        <a className="mr-2 inline-block opacity-75 hover:opacity-100" href="linkedin.com/in/raghavkanwal">LinkedIn</a>
        </p>
        <p>{new Date().getFullYear()} © Raghav Kanwal</p>
    </div>)
}