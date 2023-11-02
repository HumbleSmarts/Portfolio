import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Humble_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(100);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const [numPages, setNumPages] = useState(null);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row className="resume">
          {/* <Document
            file={pdf}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map((page) => (
                <Page pageNumber={page} scale={width > 786 ? 1.7 : 0.6} />
              ))}
          </Document> */}
          {/* <Document file={pdf} className="d-flex justify-content-center">
            {Array.from({ length: 2 }).map(
              (
                _,
                index // Change '2' to the number of pages in your PDF
              ) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.7 : 0.6}
                />
              )
            )}
          </Document> */}
          <Document
            file={pdf}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map((page) => (
                <Page pageNumber={page} scale={width > 6 ? 1.4 : 2.0} />
              ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
