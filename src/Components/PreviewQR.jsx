// // import React from "react";
// import QRCode from "react-qr-code";
// import { useQRCode } from "../context/QrContext";


// const PreviewQR = () => {
//   const { 
//     inputValue, 
//     selectedColor, 
//     selectedFormat, 
//     setSelectedFormat 
//   } = useQRCode();

//   console.log(selectedColor.hexColor, "selectedColor")
//   console.log(inputValue, "this is inputValue")
//   const handleDownload = () => {
//     // Implement download logic here
//     const svg = document.querySelector('#qr-code svg');
//     if (!svg) return;

//     const svgData = new XMLSerializer().serializeToString(svg);
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');
//     const img = new Image();
    
//     img.onload = () => {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);
      
//       const downloadLink = document.createElement('a');
//       downloadLink.download = `qr-code.${selectedFormat.toLowerCase()}`;
//       downloadLink.href = canvas.toDataURL(`image/${selectedFormat.toLowerCase()}`);
//       downloadLink.click();
//     };
    
//     img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
//   };

//   return (
//     <div className="md:w-[25%] w-[100%] flex-col bg-white rounded-[10px] shadow-2xl h-[400px] flex items-center py-5 justify-start">
//       <h1 className="text-[23px] font-bold">Preview QR</h1>
//       <div id="qr-code">
//         <QRCode
//           value={inputValue || 'https://example.com'}
//           bgColor={selectedColor.hexColor}
//           // bgColor= "yellow"
//           fgColor="white"
//           className="w-full h-[190px] mt-2"
//         />
//       </div>
//       <div className="w-full mt-4 px-3">
//         <div className="w-full items-center flex justify-between">
//           {['PNG', 'SVG', 'JPEG'].map((format) => (
//             <button
//               key={format}
//               onClick={() => setSelectedFormat(format)}
//               className={`py-3 px-5 md:py-2 md:px-3 flex items-center justify-center rounded-[8px] font-bold
//                 ${selectedFormat === format ? 'bg-green-500 text-white' : 'bg-green-50'}`}
//             >
//               {format}
//             </button>
//           ))}
//         </div>
//         <button 
//           onClick={handleDownload}
//           className="w-full py-3 bg-green-500 mt-4 rounded-[8px] text-white font-bold"
//         >
//           Download
//         </button>
//       </div>
//     </div>
//   );
// };
// export default PreviewQR;

import React from "react";
import QRCode from "react-qr-code";
import { useQRCode } from "../context/QrContext";

const PreviewQR = () => {
  const { 
    inputValue, 
    selectedColor, 
    selectedFormat, 
    setSelectedFormat 
  } = useQRCode();

  // Function to create scannable QR value based on destination type
  const getQRValue = () => {
    if (!inputValue) return 'https://example.com';
    
    // Make sure we have a valid string to encode
    const value = inputValue.trim();
    if (!value) return 'https://example.com';

    return value;
  };

  const handleDownload = () => {
    const svg = document.querySelector('#qr-code svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const downloadLink = document.createElement('a');
      downloadLink.download = `qr-code.${selectedFormat.toLowerCase()}`;
      downloadLink.href = canvas.toDataURL(`image/${selectedFormat.toLowerCase()}`);
      downloadLink.click();
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <div className="md:w-[25%] w-[100%] flex-col bg-white rounded-[10px] shadow-2xl h-[400px] flex items-center py-5 justify-start">
      <h1 className="text-[23px] font-bold">Preview QR</h1>
      <div id="qr-code" className="p-4 bg-white rounded-lg">
        <QRCode
          value={getQRValue()}
          bgColor="white"  // Keep background white for better contrast
          fgColor={selectedColor?.hexColor || "#000000"}  // Use selected color for QR code
          size={200}  // Fixed size for better quality
          level="H"  // Highest error correction level
          className="w-full "
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        />
      </div>
      <div className="w-full px-3 ">
        <div className="w-full items-center flex justify-between">
          {['PNG', 'SVG', 'JPEG'].map((format) => (
            <button
              key={format}
              onClick={() => setSelectedFormat(format)}
              className={`py-3 px-5 md:py-2 md:px-3 flex items-center justify-center rounded-[8px] font-bold
                ${selectedFormat === format ? 'bg-green-500 text-white' : 'bg-green-50'}`}
            >
              {format}
            </button>
          ))}
        </div>
        <button 
          onClick={handleDownload}
          className="w-full py-3 bg-green-500 mt-2 rounded-[8px] text-white font-bold"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default PreviewQR;