"use client"
import React, { useState } from 'react';
import jsPDF from 'jspdf';

export default function Dragdrop() {
  const [pdfGenerated, setPdfGenerated] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const convertToPdf = (file) => {
    const reader = new FileReader();
    reader.onload = function(event) {
      const imgData = event.target.result;

      // Create an image element to get image dimensions
      const img = new Image();
      img.onload = function() {
        const pdf = new jsPDF();
        const imgWidth = 210; // A4 width in mm
        const imgHeight = img.height * imgWidth / img.width;
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        const pdfBlob = pdf.output('blob');
        setPdfUrl(URL.createObjectURL(pdfBlob));
        setPdfGenerated(true);
      };
      img.src = imgData;
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (!file) return;

    // Check if the file is an image
    if (file.type.startsWith('image/')) {
      // Check file size (2 MB)
      if (file.size <= 2 * 1024 * 1024) {
        convertToPdf(file);
      } else {
        alert('Please upload an image file smaller than 2 MB.');
      }
    } else {
      alert('Please upload an image file.');
    }
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (!file) return;

    // Check if the file is an image
    if (file.type.startsWith('image/')) {
      // Check file size (2 MB)
      if (file.size <= 2 * 1024 * 1024) {
        convertToPdf(file);
      } else {
        alert('Please upload an image file smaller than 2 MB.');
      }
    } else {
      alert('Please upload an image file.');
    }
  };

  const handleDownloadPdf = () => {
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'converted.pdf';
    a.click();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full" onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            JPG or PNG (MAX. 2 MB)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
      {pdfGenerated && (
        <div className="flex flex-col items-center justify-center mt-4">
          <button onClick={handleDownloadPdf} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}
