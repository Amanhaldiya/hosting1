import { useState, useRef, useEffect } from "react";
import bannerImage from "../assets/Screenshot 2023-11-04 161301.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";

const Banner = () => {
  const el = useRef(null);
  const [showContactDetails, setShowContactDetails] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Android Developer", "Frontend Developer", "Backend Developer"],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const toggleContactDetails = () => {
    setShowContactDetails(!showContactDetails);
  };

  const contactDetails = showContactDetails && (
    <div className="contact-details blue-500">
      {/* Include your contact details here */}
      <p style={{color:"ghostwhite"}}>Email: Amanhaldiya512@gmail.com</p>
      <p>Phone: +918005711851(India)</p>
      {/* Add more details as needed */}
    </div>
  );

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      {/* first dabba */}
      <div className="w-full flex items-center justify-center text-white ">
        {/* text */}
        <div className="w-2/3 space-y-2  ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Aman Haldiya</h1>
          <h2 className="text-3xl ">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <div className="icons-container flex space-x-5">
            <a className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
             <i class="fa-brands text-4xl  fa-facebook"></i>
          </a>

           <a className=" hover:bg-orange-600   border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
             <i class="fa-brands text-4xl  fa-instagram"></i>
           </a>

           <a className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
             <i class="fa-brands text-4xl  fa-youtube"></i>
           </a>

          <a className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
            <i class="fa-brands text-4xl  fa-linkedin-in"></i>
          </a>
       </div>
          <p>{contactDetails}</p>
          <div className="icons-container flex space-x-5">
            {/* ... existing code ... */}
          </div>
          <br />
          <button
            className="text-2xl px-3 py-2 bg-orange-500 rounded-full shadow-lg"
            onClick={toggleContactDetails}
          >
            Contact Me
          </button>
        </div>
      </div>
      

      {/* second  dabba */}
      <div className=" w-full flex justify-center">
        {/* image */}
        <img className="rounded-full my-2 shadow-lg w-1/2" src={bannerImage} alt="Aman Haldiya" />
      </div>
    </div>
  );
};

export default Banner;


// import bannerImage from "../assets/Screenshot 2023-11-04 161301.png";
// import bannerBackground from "../assets/banner_wallpaper.svg";
// import Typed from "typed.js";
// import { useRef } from "react";
// import { useEffect } from "react";
// const Banner = () => {
//   const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ["Android Developer", "Frontend Developer", "Backend Developer"], // Strings to display
//       // Speed settings, try diffrent values untill you get good results
//       startDelay: 100,
//       typeSpeed: 50,
//       backSpeed: 10,
//       backDelay: 100,
//       loop: true,
//     });

//     // Destropying
//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bannerBackground})`,
//         backgroundSize: "cover",
//       }}
//       className="main-container flex items-center"
//     >
//       {/* first dabba */}
//       <div className="w-full flex items-center justify-center text-white ">
//         {/* text */}
//         <div className="w-2/3 space-y-2  ms-10">
//           <h3 className="text-3xl font-semibold">Hi, I am</h3>
//           <h1 className="text-5xl font-bold">Aman Haldiya</h1>
//           <h2 className="text-3xl ">
//             I am <span className="font-bold underline" ref={el}></span>
//           </h2>
//           <p className="">
           
//           </p>

//           <div className="icons-container flex space-x-5">
//             <a className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
//               <i class="fa-brands text-4xl  fa-facebook"></i>
//             </a>

//             <a className=" hover:bg-orange-600   border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
//               <i class="fa-brands text-4xl  fa-instagram"></i>
//             </a>

//             <a className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
//               <i class="fa-brands text-4xl  fa-youtube"></i>
//             </a>

//             <a className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
//               <i class="fa-brands text-4xl  fa-linkedin-in"></i>
//             </a>
//           </div>
//           <br />
//           <a
//             className=" text-2xl     px-3  py-2 bg-orange-500  rounded-full shadow-lg"
//             href="/contact"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>

//       {/* second  dabba */}

//       <div className=" w-full flex justify-center">
//         {/* image */}
//         <img className="rounded-full my-2 shadow-lg w-1/2" src={bannerImage} />
//       </div>
//     </div>
//   );
// };

// export default Banner;
