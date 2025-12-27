import { useState } from "react";
import { useQRCode } from "../Context/QrContext";
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
            className="w-full py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-[6px] sm:rounded-[8px] border-[2px] border-green-500 outline-none mt-1 pl-2 sm:pl-2.5 text-[11px] sm:text-xs md:text-sm lg:text-base"
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
                className="w-full py-1 sm:py-1.5 border-gray-300 border-b-[1px] outline-none mt-1 pl-2 sm:pl-2.5 text-[11px] sm:text-xs md:text-sm"
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
                className="w-full py-1 sm:py-1.5 border-gray-300 border-b-[1px] outline-none mt-1 pl-2 sm:pl-2.5 text-[11px] sm:text-xs md:text-sm"
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
                className="w-full rounded-[6px] sm:rounded-[8px] outline-none mt-1 pl-2 sm:pl-2.5 py-1 sm:py-1.5 md:py-2 text-[11px] sm:text-xs md:text-sm"
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
                className="w-full py-1 sm:py-1.5 border-gray-300 border-b-[1px] outline-none mt-1 pl-2 sm:pl-2.5 text-[11px] sm:text-xs md:text-sm"
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
              className="w-full rounded-[8px] outline-none mt-1 pl-2 py-1.5 text-xs sm:text-sm"
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
                className="w-full py-1 sm:py-1.5 md:py-2 border-b-[1px] border-gray-300 outline-none mt-1 pl-2 sm:pl-2.5 md:pl-3 text-[11px] sm:text-xs md:text-sm lg:text-base"
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
                className="w-full py-1 xs:py-1.5 border-b-[1px] border-gray-300 outline-none mt-1 pl-2 xs:pl-2.5 text-[11px] xs:text-xs sm:text-sm"
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
                className="w-full py-1 sm:py-2 outline-none mt-1 pl-2 sm:pl-3 text-sm sm:text-base"
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
            className="w-full py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-[6px] sm:rounded-[8px] border-[2px] border-green-500 outline-none mt-1 pl-2 sm:pl-2.5 text-[11px] sm:text-xs md:text-sm lg:text-base"
            placeholder="Select a desired Destination"
            disabled={!selectedDestination}
          />
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-start py-2 sm:py-2.5 md:py-3 lg:py-4 xl:py-4 w-full max-h-[350px] sm:max-h-[480px] md:max-h-[520px] lg:h-full xl:h-full bg-white rounded-[8px] sm:rounded-[10px] shadow-lg sm:shadow-xl lg:shadow-2xl overflow-hidden px-2 sm:px-2.5 md:px-3 lg:px-5 xl:px-5">
      <div className="w-full flex flex-col items-center justify-center mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 flex-shrink-0">
        <h1 className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[17px] font-bold text-center">
          {selectedDestination
            ? `Enter ${selectedDestination.type} Details`
            : "Select Destination"}
        </h1>
        <div className="w-full mt-1.5 sm:mt-2 md:mt-2.5">
          {renderInputField()}
        </div>
      </div>

      <div className="flex-1 w-full flex flex-col items-center justify-start overflow-y-auto min-h-0 pb-1.5 sm:pb-2">
        <h1 className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[17px] font-bold mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-2.5 xl:mb-2.5 flex-shrink-0">Background color</h1>
        <div className="w-full flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-3 items-start justify-start">
          {QRColors.map((color) => (
            <button
              key={color.id}
              onClick={() =>
                setSelectedColor({
                  bgColor: color.bgColor,
                  hexColor: color.hexColor,
                })
              }
              className={`bg-green-50 w-[38px] h-[24px] sm:w-[42px] sm:h-[26px] md:w-[48px] md:h-[30px] lg:w-[55px] lg:h-[32px] xl:w-[55px] xl:h-[32px] 2xl:w-[68px] 2xl:h-[38px] flex items-center justify-center rounded-[3px] sm:rounded-[4px] transition-transform hover:scale-105 active:scale-95 ${
                selectedColor.bgColor === color.bgColor
                  ? "border-2 border-green-500"
                  : ""
              }`}
            >
              <div
                className={`${color.bgColor} w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px] xl:w-[12px] xl:h-[12px] 2xl:w-[15px] 2xl:h-[15px] rounded-[2px]`}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configuration;
