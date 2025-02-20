// import React from "react";
// import QRCode from "react-qr-code";
// import { useQRCode } from "../context/QrContext";
// import { v4 as uuidv4 } from "uuid";

// const PreviewQR = () => {
//   const {
//     inputValue,
//     selectedColor,
//     selectedFormat,
//     setSelectedFormat,
//     selectedDestination,
//     qrHistory,
//     setQrHistory,
//   } = useQRCode();

//   const getQRValue = () => {
//     if (!selectedDestination || !inputValue) return "https://example.com";

//     switch (selectedDestination.type.toLowerCase()) {
//       case "url":
//         return inputValue.startsWith("http") ? inputValue : `https://${inputValue}`;

//       case "email":
//         if (typeof inputValue !== "object") return `mailto:${inputValue}`;
//         const email = inputValue.email?.trim() || "";
//         const subject = encodeURIComponent(inputValue.subject || "");
//         const body = encodeURIComponent(inputValue.message || "");
//         return `mailto:${email}?subject=${subject}&body=${body}`;

//       case "wifi":
//         if (typeof inputValue !== "object") return "WIFI:T:nopass;;";
//         return `WIFI:T:${inputValue.security || "nopass"};S:${inputValue.ssid};P:${inputValue.password};;`;

//       case "call":
//         const cleanPhone = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
//         return `tel:${cleanPhone}`;

//       case "message":
//         if (typeof inputValue !== "object") return `SMSTO:${inputValue}`;
//         const smsNumber = inputValue.number.replace(/\D/g, ""); // Clean phone number
//         const smsText = encodeURIComponent(inputValue.message || ""); // Ensure proper encoding
//         return `SMSTO:${smsNumber}:${smsText}`;

//       case "whatsapp":
//         const whatsappNumber = inputValue.replace(/\D/g, "");
//         return `https://wa.me/${whatsappNumber}`;

//       case "facebook":
//         return inputValue.startsWith("http") ? inputValue : `https://facebook.com/${inputValue}`;

//       case "twitter":
//         return inputValue.startsWith("http") ? inputValue : `https://twitter.com/${inputValue.replace("@", "")}`;

//       case "linkedin":
//         return inputValue.startsWith("http") ? inputValue : `https://linkedin.com/in/${inputValue}`;

//       case "instagram":
//         return inputValue.startsWith("http") ? inputValue : `https://instagram.com/${inputValue.replace("@", "")}`;

//       case "youtube":
//         return inputValue.startsWith("http") ? inputValue : `https://youtube.com/${inputValue}`;

//       case "discord":
//         return inputValue.startsWith("http") ? inputValue : `https://discord.gg/${inputValue}`;

//       case "reddit":
//         return inputValue.startsWith("http") ? inputValue : `https://reddit.com/${inputValue}`;

//       case "github":
//         return inputValue.startsWith("http") ? inputValue : `https://github.com/${inputValue}`;

//       case "telegram":
//         return inputValue.startsWith("http") ? inputValue : `https://t.me/${inputValue}`;

//       case "crypto":
//         return `cryptocurrency:${inputValue}`;

//       case "text":
//         return inputValue;

//       default:
//         return inputValue;
//     }
//   };

//   const saveToHistory = (imageUrl) => {
//     const historyItem = {
//       id: uuidv4(),
//       qrImage: imageUrl,
//       destinationType: selectedDestination?.type || "Unknown",
//       inputValue: inputValue || "No input",
//       createdAt: new Date().toISOString(),
//       color: selectedColor.hexColor,
//     };

//     const updatedHistory = [historyItem, ...qrHistory];
//     setQrHistory(updatedHistory);
//     localStorage.setItem("qrHistory", JSON.stringify(updatedHistory));
//   };

//   const handleDownload = () => {
//     const svg = document.querySelector("#qr-code svg");
//     if (!svg) return;

//     const svgData = new XMLSerializer().serializeToString(svg);
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");
//     const img = new Image();

//     img.onload = () => {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);

//       const imageUrl = canvas.toDataURL(`image/${selectedFormat.toLowerCase()}`);
//       saveToHistory(imageUrl);

//       const downloadLink = document.createElement("a");
//       downloadLink.download = `qr-code.${selectedFormat.toLowerCase()}`;
//       downloadLink.href = imageUrl;
//       downloadLink.click();
//     };

//     img.src = "data:image/svg+xml;base64," + btoa(svgData);
//   };

//   return (
//     <div className="md:w-[25%] w-[100%] flex-col bg-white rounded-[10px] shadow-2xl h-[400px] flex items-center py-5 justify-start">
//       <h1 className="text-[23px] font-bold">Preview QR</h1>
//       <div id="qr-code" className="p-4 bg-white rounded-lg">
//         <QRCode
//           value={getQRValue()}
//           bgColor="white"
//           fgColor={selectedColor?.hexColor || "#000000"}
//           size={200}
//           level="H"
//           className="w-full"
//           style={{ height: "auto", maxWidth: "100%", width: "100%" }}
//         />
//       </div>
//       <div className="w-full px-3">
//         <div className="w-full items-center flex justify-between">
//           {["PNG", "JPEG"].map((format) => (
//             <button
//               key={format}
//               onClick={() => setSelectedFormat(format)}
//               className={`py-3 px-5 md:py-2 md:px-11 flex items-center justify-center rounded-[8px] font-bold
//                 ${
//                   selectedFormat === format
//                     ? "bg-green-500 text-white"
//                     : "bg-green-50"
//                 }`}
//             >
//               {format}
//             </button>
//           ))}
//         </div>
//         <button
//           onClick={handleDownload}
//           className="w-full py-3 bg-green-500 mt-2 rounded-[8px] text-white font-bold"
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
import { v4 as uuidv4 } from "uuid";

const PreviewQR = () => {
  const {
    inputValue,
    selectedColor,
    selectedFormat,
    setSelectedFormat,
    selectedDestination,
    qrHistory,
    setQrHistory,
  } = useQRCode();

  const getQRValue = () => {
    if (!selectedDestination || !inputValue) return "https://example.com";

    switch (selectedDestination.type.toLowerCase()) {
      case "email":
        // Fixed email formatting to properly trigger email client
        if (typeof inputValue !== "object") return `mailto:${inputValue}`;
        const emailData = {
          email: inputValue.email?.trim() || "",
          subject: inputValue.subject?.trim() || "",
          message: inputValue.message?.trim() || ""
        };
        
        let mailtoUrl = `mailto:${emailData.email}`;
        const params = [];
        
        if (emailData.subject) {
          params.push(`subject=${encodeURIComponent(emailData.subject)}`);
        }
        if (emailData.message) {
          params.push(`body=${encodeURIComponent(emailData.message)}`);
        }
        
        if (params.length > 0) {
          mailtoUrl += "?" + params.join("&");
        }
        
        return mailtoUrl;

      case "message":
        // Fixed SMS formatting to properly trigger messaging app
        if (typeof inputValue !== "object") return `sms:${inputValue}`;
        const messageData = {
          number: inputValue.number?.replace(/\D/g, "") || "",
          message: inputValue.message?.trim() || ""
        };
        
        let smsUrl = `sms:${messageData.number}`;
        if (messageData.message) {
          // Different format for iOS and Android compatibility
          smsUrl += `?&body=${encodeURIComponent(messageData.message)}`;
        }
        
        return smsUrl;

      case "call":
        // Fixed phone formatting to properly trigger phone app
        const phoneNumber = typeof inputValue === 'string' 
          ? inputValue.replace(/\D/g, "")
          : "";
        return `tel:${phoneNumber}`;

      case "wifi":
        // Keep the existing WiFi format as it works correctly
        if (typeof inputValue !== "object") return "WIFI:T:nopass;;";
        const wifiStr = `WIFI:T:${inputValue.security || "nopass"};S:${inputValue.ssid};P:${inputValue.password};;`;
        return wifiStr;

      case "whatsapp":
        // Improved WhatsApp format
        const whatsappNumber = inputValue.replace(/\D/g, "");
        return `whatsapp://send?phone=${whatsappNumber}`;

      case "url":
        return inputValue.startsWith("http") ? inputValue : `https://${inputValue}`;

      case "facebook":
        return inputValue.startsWith("http") ? inputValue : `https://facebook.com/${inputValue}`;

      case "twitter":
        return inputValue.startsWith("http") ? inputValue : `https://twitter.com/${inputValue.replace("@", "")}`;

      case "linkedin":
        return inputValue.startsWith("http") ? inputValue : `https://linkedin.com/in/${inputValue}`;

      case "instagram":
        return inputValue.startsWith("http") ? inputValue : `https://instagram.com/${inputValue.replace("@", "")}`;

      case "youtube":
        return inputValue.startsWith("http") ? inputValue : `https://youtube.com/${inputValue}`;

      case "discord":
        return inputValue.startsWith("http") ? inputValue : `https://discord.gg/${inputValue}`;

      case "reddit":
        return inputValue.startsWith("http") ? inputValue : `https://reddit.com/${inputValue}`;

      case "github":
        return inputValue.startsWith("http") ? inputValue : `https://github.com/${inputValue}`;

      case "telegram":
        return inputValue.startsWith("http") ? inputValue : `https://t.me/${inputValue}`;

      case "crypto":
        return `cryptocurrency:${inputValue}`;

      case "text":
        return inputValue;

      default:
        return inputValue;
    }
  };

  // Rest of the component remains the same
  const saveToHistory = (imageUrl) => {
    const historyItem = {
      id: uuidv4(),
      qrImage: imageUrl,
      destinationType: selectedDestination?.type || "Unknown",
      inputValue: inputValue || "No input",
      createdAt: new Date().toISOString(),
      color: selectedColor.hexColor,
    };

    const updatedHistory = [historyItem, ...qrHistory];
    setQrHistory(updatedHistory);
    localStorage.setItem("qrHistory", JSON.stringify(updatedHistory));
  };

  const handleDownload = () => {
    const svg = document.querySelector("#qr-code svg");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageUrl = canvas.toDataURL(`image/${selectedFormat.toLowerCase()}`);
      saveToHistory(imageUrl);

      const downloadLink = document.createElement("a");
      downloadLink.download = `qr-code.${selectedFormat.toLowerCase()}`;
      downloadLink.href = imageUrl;
      downloadLink.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div className="md:w-[25%] w-[100%] flex-col bg-white rounded-[10px] shadow-2xl h-[400px] flex items-center py-5 justify-start">
      <h1 className="text-[23px] font-bold">Preview QR</h1>
      <div id="qr-code" className="p-4 bg-white rounded-lg">
        <QRCode
          value={getQRValue()}
          bgColor="white"
          fgColor={selectedColor?.hexColor || "#000000"}
          size={200}
          level="H"
          className="w-full"
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        />
      </div>
      <div className="w-full px-3">
        <div className="w-full items-center flex justify-between">
          {["PNG", "JPEG"].map((format) => (
            <button
              key={format}
              onClick={() => setSelectedFormat(format)}
              className={`py-3 px-5 md:py-2 md:px-11 flex items-center justify-center rounded-[8px] font-bold
                ${selectedFormat === format ? "bg-green-500 text-white" : "bg-green-50"}`}
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