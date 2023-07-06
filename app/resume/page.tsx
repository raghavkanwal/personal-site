"use client";

import resume from "@/public/resume.pdf"
import {pdfjs, Document, Page} from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

import myResume from '@/public/resume.pdf'

export default function ResumePage() {
    return (
        <main>
            <h1><span>Resume</span></h1>
            <Document file={myResume}>
                <Page pageIndex={0}/>
            </Document>
        </main>
    )
}