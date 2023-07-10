import  { BsTwitter, BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function LoadingResume() {
    return (<main>
        <h1><span>Contact</span></h1>
        <p>
        <a className="mx-2 inline-block opacity-75 hover:opacity-100" href="mailto:raghav.kanwal@gmail.com">raghav.kanwal@gmail.com</a> 
        <a className="mx-2 inline-block opacity-75 hover:opacity-100" href="instagram.com/raghavkanwal">Instagram</a> 
        <a className="mx-2 inline-block opacity-75 hover:opacity-100" href="twitter.com/raghavkanwal">Twitter</a> 
        <a className="mx-2 inline-block opacity-75 hover:opacity-100" href="linkedin.com/in/raghavkanwal">LinkedIn</a>
        </p>
        </main>)
}