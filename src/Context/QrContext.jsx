// src/Context/QrContext.jsx
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
  const [qrHistory, setQrHistory] = useState([]);

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
    setQrHistory
  };

  return (
    <QRCodeContext.Provider value={value}>
      {children}
    </QRCodeContext.Provider>
  );
};

// Custom hook to use the QR Code context
export const useQRCode = () => {
  const context = useContext(QRCodeContext);
  if (!context) {
    throw new Error('useQRCode must be used within a QrContext');
  }
  return context;
};