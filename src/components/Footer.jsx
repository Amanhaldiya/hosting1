import { useState } from "react";

const Footer = () => {
  const [showDownloadConfirmation, setShowDownloadConfirmation] = useState(false);

  const handleDownloadCV = () => {
    // Replace the link with the actual link to your CV
    const cvLink = "https://drive.google.com/file/d/1lJUeS3IMj1svXocGd4JxnAQKiwDlXBLS/view?usp=drive_link";
    window.open(cvLink, "_blank");
    setShowDownloadConfirmation(true);
  };

  return (
    <>
      <div className="py-5 border bg-gray-100 flex justify-between px-72">
        <div>
          <p>
            @2023 Aman Haldiya <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="space-x-5">
          {/* Download CV Button */}
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
            onClick={handleDownloadCV}
          >
            Download CV
          </button>

          {/* Optional: Download Confirmation Message */}
          {showDownloadConfirmation && (
            <p className="text-green-500">
              CV download started! Check your browser's download section.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;
