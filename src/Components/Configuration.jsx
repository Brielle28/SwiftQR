import React from "react";
import { useQRCode } from "../context/QrContext";
import { QRColors } from "../Utils/QRColors";
const Configuration = () => {
  const { 
    selectedDestination, 
    inputValue, 
    setInputValue,
    selectedColor,
    setSelectedColor 
  } = useQRCode();

  const getPlaceholder = () => {
    switch (selectedDestination?.type.toLowerCase()) {
      case 'whatsapp':
        return 'Enter phone number...';
      case 'email':
        return 'Enter email address...';
      case 'url':
        return 'Enter website URL...';
      case 'vcard':
        return 'Enter contact details...';
      case 'message':
        return 'Enter message content...';
      case 'call':
        return 'Enter phone number to call...';
      case 'wifi':
        return 'Enter WiFi network details...';
      case 'crypto':
        return 'Enter cryptocurrency wallet address...';
      case 'text':
        return 'Enter your text...';
      case 'facebook':
        return 'Enter Facebook profile or page URL...';
      case 'twitter':
        return 'Enter Twitter handle or profile URL...';
      case 'linkedin':
        return 'Enter LinkedIn profile URL...';
      case 'instagram':
        return 'Enter Instagram profile URL...';
      case 'youtube':
        return 'Enter YouTube channel or video URL...';
      case 'snapchat':
        return 'Enter Snapchat username...';
      case 'discord':
        return 'Enter Discord server invite link...';
      case 'reddit':
        return 'Enter Reddit profile or subreddit link...';
      case 'github':
        return 'Enter GitHub profile or repository URL...';
      case 'twitch':
        return 'Enter Twitch channel URL...';
      case 'google':
        return 'Enter Google profile or service URL...';
      case 'microsoft':
        return 'Enter Microsoft service or profile URL...';
      case 'paypal':
        return 'Enter PayPal payment link...';
      case 'amazon':
        return 'Enter Amazon store or product URL...';
      case 'netflix':
        return 'Enter Netflix profile or content URL...';
      case 'spotify':
        return 'Enter Spotify track, playlist, or profile URL...';
      case 'telegram':
        return 'Enter Telegram username or group link...';
      default:
        return 'Select a destination type...';
    }    
  };

  return (
    <div className="md:w-[40%] flex flex-col items-center justify-start py-5 w-[100%] bg-white rounded-[10px] shadow-2xl h-[400px] px-[10px]">
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-[20px] font-bold">
        {selectedDestination ? `Enter ${selectedDestination.type} Details` : 'Select Destination'}
      </h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full py-3 rounded-[10px] border-[3px] border-green-500 outline-0 outline-none mt-1 pl-2"
        placeholder={getPlaceholder()}
        disabled={!selectedDestination}
      />
    </div>
    
    <div className="w-full flex flex-col items-center justify-center mt-5">
      <h1 className="text-[20px] font-bold">Background color</h1>
      <div className="w-[100%] flex flex-wrap gap-3 items-start justify-start mt-3 h-[180px] overflow-y-scroll">
        {QRColors.map((color) => (
          <button
            key={color.id}
            onClick={() => {
              console.log('Setting color:', color); // Debug log
              setSelectedColor({
                bgColor: color.bgColor,
                hexColor: color.hexColor
              });
            }}
            className={`bg-green-50 w-[65px] h-[35px] flex items-center justify-center rounded-[4px] 
              ${selectedColor.bgColor === color.bgColor ? 'border-2 border-green-500' : ''}`}
          >
            <div className={`${color.bgColor} w-[15px] h-[15px] rounded-[2px]`}></div>
          </button>
        ))}
      </div>
    </div>
  </div>
  );
};
export default Configuration