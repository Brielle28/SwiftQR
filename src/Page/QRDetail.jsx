// import { useParams, Link } from "react-router-dom";
// import { qrCodes } from "../Utils/QRCodes";

// const QRDetail = () => {
//   const { id } = useParams(); // Get the ID from the URL
//   const qr = qrCodes.find((item) => item.id === parseInt(id)); // Find the matching QR code

//   if (!qr) {
//     return <p className="text-center text-red-500">QR Code not found!</p>;
//   }

//   return (
//     <div className=" flex  items-center justify-center min-h-screen  p-8">
//       <div className="flex flex-col items-center justify-center ">
//         <h1 className="font-bold text-[30px]"> QR Code Details</h1>
//         <div className="flex flex-row items-center justify-center mt-10">
//           <div className="w-[50%]">
//             <div
//               className="w-16 h-20 md:w-[300px] md:h-[300px] bg-cover bg-center"
//               style={{ backgroundImage: "url('/qr.png')" }}
//             ></div>
//           </div>
//           <div className="w-[50%] text-start flex flex-col item-start justify-center md:ml-5">
//             <h2 className="text-sm md:text-2xl font-semibold text-red-500 mb-2">
//               Type: {qr.type}
//             </h2>
//             <div className="flex gap-2 text-sm md:text-lg w-full mb-2">
//               <p className="text-gray-700 "> Action: </p>
//               <a href={qr.actions} className="text-blue-500">
//                 {qr.actions}
//               </a>
//             </div>
//             <p className="text-gray-700 text-sm md:text-lg">
//               Created: {qr.modified}
//             </p>
//             <Link
//               to="/history"
//               className="mt-3 inline-block text-green-600 hover:text-green-800 font-semibold"
//             >
//               ⬅ Go Back
//             </Link>
//             <button className="bg-green-500 mt-6 py-3 rounded-[8px] text-white font-semibold hover:bg-green-700"> Download Qr code </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QRDetail;
import { useParams, Link } from "react-router-dom";
import { qrCodes } from "../Utils/QRCodes";

const QRDetail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const qr = qrCodes.find((item) => item.id === parseInt(id)); // Find the matching QR code

  if (!qr) {
    return <p className="text-center text-red-500 mt-10">QR Code not found!</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 w-full max-w-2xl">
        <h1 className="text-center text-xl md:text-3xl font-bold text-gray-900">QR Code Details</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start mt-6 md:mt-10">
          {/* QR Image */}
          <div className="flex-shrink-0">
            <div
              className="w-32 h-32 md:w-64 md:h-64 bg-cover bg-center rounded-lg shadow-md"
              style={{ backgroundImage: "url('/qr.png')" }}
            ></div>
          </div>

          {/* Details Section */}
          <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left w-full">
            <h2 className="text-lg md:text-2xl font-semibold text-red-500 mb-2">
              Type: {qr.type}
            </h2>
            <div className="flex flex-col md:flex-row gap-1 md:gap-2 text-sm md:text-lg">
              <p className="text-gray-700 font-medium">Action:</p>
              <a href={qr.actions} className="text-blue-500 break-all hover:underline">
                {qr.actions}
              </a>
            </div>
            <p className="text-gray-700 text-sm md:text-lg mt-1">
              Created: <span className="font-medium">{qr.modified}</span>
            </p>

            {/* Navigation & Action Buttons */}
            <div className="mt-3 flex flex-col items-center md:items-start gap-4">
              <Link
                to="/history"
                className="text-green-600 hover:text-green-800 font-semibold text-sm md:text-lg"
              >
                ⬅ Go Back
              </Link>
              <button className="bg-green-500 px-5 py-2 md:py-3 rounded-md text-white font-semibold hover:bg-green-700 text-sm md:text-base transition duration-300 ease-in-out">
                Download QR Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRDetail;
