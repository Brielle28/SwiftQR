import React, { useState } from "react";
import { useQRCode } from "../context/QrContext";
import { QRColors } from "../Utils/QRColors";

const Configuration = () => {
  const {
    selectedDestination,
    inputValue,
    setInputValue,
    selectedColor,
    setSelectedColor,
  } = useQRCode();

  // Local states for specific inputs (email case)
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [messagePhone, setMessagePhone] = useState("");
  const [messageText, setMessageText] = useState("");

  // Function to return the appropriate placeholder
  const getPlaceholder = () => {
    switch (selectedDestination?.type.toLowerCase()) {
      case "whatsapp":
        return "Enter your whatsapp link...";
      case "email":
        return "Enter email address...";
      case "url":
        return "Enter website URL...";
      case "message":
        return "Enter message content...";
      case "call":
        return "Enter phone number to call...";
      case "wifi":
        return "Enter WiFi network details...";
      case "crypto":
        return "Enter cryptocurrency wallet address...";
      case "text":
        return "Enter your text...";
      case "facebook":
        return "Enter Facebook profile or page URL...";
      case "twitter":
        return "Enter Twitter handle or profile URL...";
      case "linkedin":
        return "Enter LinkedIn profile URL...";
      case "instagram":
        return "Enter Instagram profile URL...";
      case "youtube":
        return "Enter YouTube channel or video URL...";
      case "discord":
        return "Enter Discord server invite link...";
      case "reddit":
        return "Enter Reddit profile or subreddit link...";
      case "github":
        return "Enter GitHub profile or repository URL...";
      case "twitch":
        return "Enter Twitch channel URL...";
      case "amazon":
        return "Enter Amazon store or product URL...";
      case "netflix":
        return "Enter Netflix profile or content URL...";
      case "spotify":
        return "Enter Spotify track, playlist, or profile URL...";
      case "telegram":
        return "Enter Telegram username or group link...";
      default:
        return "Select a destination type...";
    }
  };

  // Function to return the appropriate input field(s)
  const renderInputField = () => {
    switch (selectedDestination?.type.toLowerCase()) {
      case "whatsapp":
      case "call":
      case "url":
      case "crypto":
      case "text":
      case "facebook":
      case "twitter":
      case "linkedin":
      case "instagram":
      case "youtube":
      case "discord":
      case "reddit":
      case "github":
      case "amazon":
      case "netflix":
      case "spotify":
      case "telegram":
        return (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full py-3 rounded-[10px] border-[2px] border-green-500 outline-none mt-1 pl-2"
            placeholder={getPlaceholder()}
            disabled={!selectedDestination}
          />
        );

      case "email":
        return (
          <>
            <div className="flex flex-col items-start justify-center w-full border-[2px] border-green-500 rounded-[10px]">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setInputValue({
                    email: e.target.value,
                    subject: subject,
                    message: message,
                  });
                }}
                className="w-full py-1 border-gray-300 border-b-[1px] outline-none mt-1 pl-2"
                placeholder="Enter Email Address"
                disabled={!selectedDestination}
              />
              <input
                type="text"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  setInputValue({
                    email: email,
                    subject: e.target.value,
                    message: message,
                  });
                }}
                className="w-full py-1 border-gray-300 border-b-[1px] outline-none mt-1 pl-2"
                placeholder="Enter Subject"
                disabled={!selectedDestination}
              />
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setInputValue({
                    email: email,
                    subject: subject,
                    message: e.target.value,
                  });
                }}
                className="w-full rounded-[10px] outline-none mt-1 pl-2"
                placeholder="Enter Message"
                disabled={!selectedDestination}
              />
            </div>
          </>
        );
      // Add these state variables at the top of your Configuration component

      // Then update the message case in renderInputField:
      case "message":
        return (
          <div className="flex flex-col items-start justify-center w-full border-[2px] border-green-500 rounded-[10px]">
            <input
              type="tel"
              value={messagePhone}
              onChange={(e) => {
                setMessagePhone(e.target.value);
                setInputValue({
                  number: e.target.value,
                  message: messageText,
                });
              }}
              className="w-full py-1 border-gray-300 border-b-[1px] outline-none mt-1 pl-2"
              placeholder="Enter Phone Number"
              disabled={!selectedDestination}
            />
            <textarea
              value={messageText}
              onChange={(e) => {
                setMessageText(e.target.value);
                setInputValue({
                  number: messagePhone,
                  message: e.target.value,
                });
              }}
              className="w-full rounded-[10px] outline-none mt-1 pl-2"
              placeholder="Enter your message..."
              disabled={!selectedDestination}
            />
          </div>
        );

      case "wifi":
        return (
          <>
            <div className="w-full flex flex-col items-start justify-center border-[2px] border-green-500 rounded-[10px]">
              <input
                type="text"
                name="ssid"
                value={inputValue.ssid || ""}
                onChange={(e) =>
                  setInputValue((prev) => ({ ...prev, ssid: e.target.value }))
                }
                className="w-full py-1 border-b-[1px] border-gray-300  outline-none mt-1 pl-2"
                placeholder="WiFi SSID"
              />
              <input
                type="password"
                name="password"
                value={inputValue.password || ""}
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                className="w-full  py-1 border-b-[1px] border-gray-300 outline-none mt-1 pl-2"
                placeholder="WiFi Password"
              />
              <select
                name="security"
                value={inputValue.security || ""}
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...prev,
                    security: e.target.value,
                  }))
                }
                className="w-full py-1 outline-none mt-1 pl-2"
              >
                <option value="">Select Security Type</option>
                <option value="WPA">WPA</option>
                <option value="WEP">WEP</option>
                <option value="nopass">No Password</option>
              </select>
            </div>
          </>
        );

      default:
        return (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full py-3 rounded-[10px] border-[2px] border-green-500 outline-none mt-1 pl-2"
            placeholder="Select a desired Destination"
            disabled={!selectedDestination}
          />
        );
    }
  };

  return (
    <div className="md:w-[40%] flex flex-col items-center justify-start py-5 w-[100%] bg-white rounded-[10px] shadow-2xl h-[400px] px-[10px] overflow-y-scroll">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-[20px] font-bold">
          {selectedDestination
            ? `Enter ${selectedDestination.type} Details`
            : "Select Destination"}
        </h1>
        {renderInputField()}
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-5">
        <h1 className="text-[20px] font-bold">Background color</h1>
        <div className="w-[100%] flex flex-wrap gap-3 items-start justify-start mt-3 h-[180px] overflow-y-scroll">
          {QRColors.map((color) => (
            <button
              key={color.id}
              onClick={() =>
                setSelectedColor({
                  bgColor: color.bgColor,
                  hexColor: color.hexColor,
                })
              }
              className={`bg-green-50 w-[65px] h-[35px] flex items-center justify-center rounded-[4px] ${
                selectedColor.bgColor === color.bgColor
                  ? "border-2 border-green-500"
                  : ""
              }`}
            >
              <div
                className={`${color.bgColor} w-[15px] h-[15px] rounded-[2px]`}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configuration;
