'use client'

import React, { useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf'
import styled from '@emotion/styled'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PDFProps {
  pdf: string
}

const PDFWrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 100%;

  @media (max-width: 600px) {
    padding-top: 50px;
  }
`

export const PDFViewer: React.FC<PDFProps> = ({ pdf }) => {
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  return (
    <PDFWrapper>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </PDFWrapper>
  )
}
