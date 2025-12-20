import React, { createContext, useContext, useState } from 'react';

const QRCodeContext = createContext();

export const QrContext = ({ children }) => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [selectedColor, setSelectedColor] = useState({
    bgColor: "bg-gray-900",
    hexColor: "#111827"
  });
  const [selectedFormat, setSelectedFormat] = useState('PNG');
  const [qrHistory, setQrHistory] = useState(() => {
    const savedHistory = localStorage.getItem('qrHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  // Function to download QR code
  const downloadQR = (qr) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = qr.qrImage;
    downloadLink.download = `qr-code-${qr.destinationType}-${new Date().getTime()}.${selectedFormat.toLowerCase()}`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // Function to delete QR code from history
  const deleteQR = (id) => {
    const updatedHistory = qrHistory.filter(qr => qr.id !== id);
    setQrHistory(updatedHistory);
    localStorage.setItem('qrHistory', JSON.stringify(updatedHistory));
  };

  // Function to clear all history
  const clearHistory = () => {
    setQrHistory([]);
    localStorage.removeItem('qrHistory');
  };

  const value = {
    selectedDestination,
    setSelectedDestination,
    inputValue,
    setInputValue,
    selectedColor,
    setSelectedColor,
    selectedFormat,
    setSelectedFormat,
    qrHistory,
    setQrHistory,
    downloadQR,
    deleteQR,
    clearHistory
  };

  return (
    <QRCodeContext.Provider value={value}>
      {children}
    </QRCodeContext.Provider>
  );
};

export const useQRCode = () => {
  const context = useContext(QRCodeContext);
  if (!context) {
    throw new Error('useQRCode must be used within a QrContext');
  }
  return context;
};