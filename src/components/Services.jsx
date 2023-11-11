import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
    const Services = () => {
      const servicesData = [
        {
          id: 1,
          title: "frontend Development",
          description:
           "",
           symbolClass: "fa-solid fa-code",
          actionButton: {
            title: "Check On Github",
            link: "https://github.com/Amanhaldiya/Django/tree/master",
          },
        },
        {
          id: 2,
          title: "Android Development",
          description:
            "",
          symbolClass: "fa-solid fa-mobile",
          actionButton: {
            title: "Check On Github",
            link: "https://github.com/Amanhaldiya/FlutterApplication",
          },
        },
        {
          id: 3,
          title: "Backend Development",
          description:
           "",
          symbolClass: "fa-solid fa-server",
          actionButton: {
            title: "Check On Github",
            link: "https://github.com/Amanhaldiya/NextJS",
          },
        },
       { // Add more service data objects as needed
      id: 2,
      title: "Java Development",
      description:
        "",
        symbolClass: "fa-brands fa-java",
      actionButton: {
        title: "Check On Github",
        link: "https://github.com/Amanhaldiya/ReactSpring",
      },
       },
    {
      id: 2,
      title: "Application Hosting",
      description:
        "",
        symbolClass: "fa-brands fa-aws",
      actionButton: {
        title: "Check On Github",
        link: "#",
      },
    },
    // Add more service data objects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000, // Set the speed for automatic sliding (in milliseconds)
  };

  return (
    <div className="main-container py-14">
      <h1 className="text-5xl font-bold text-center underline">My Services</h1>
      <div className="flex justify-center items-center my-5">
        {/* Move the <a> tag inside the button */}
        <button
          className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg"
          onClick={() => {
            window.open("https://github.com/Amanhaldiya?tab=repositories", "_blank");
          }}
        >
          Click here to check my Github
        </button>
      </div>
  
      <div className="services-container mt-12">
        <Slider {...settings}>
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-4"
            >
              <i className={`text-5xl ${service.symbolClass}`}></i>
              <h1 className="text-4xl">{service.title}</h1>
              <p>{service.description}</p>
              <button
                className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg"
                onClick={() => window.open(service.actionButton.link, "_blank")}
              >
                {service.actionButton.title}
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
  
};
export default Services;
// export default Services;
// import { useState } from "react";

// const Services = () => {
//   useState([
//     {
//       id: "",
//       title: "",
//       description: "",
//       actionButton: {
//         title: "",
//         link: "",
//       },
//     },
//   ]);
//   return (
//     <>
//       <div className="main-container py-14">
//         <h1 className="text-5xl font-bold text-center underline">
//           My Services
//         </h1>
//         <div className="services-container space-x-5 px-10 flex mt-12">
//           <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
//             <i class=" text-5xl fa-brands fa-aws"></i>
//             <h1 className="text-4xl">Web Development</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
//               veniam eius optio? Eveniet facilis dolorum quis exercitationem,
//               repudiandae sed dolores.
//             </p>
//             <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
//               Check
//             </button>
//           </div>
//           <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
//             <i class=" text-5xl fa-solid fa-mobile"></i>
//             <h1 className="text-4xl">Android Development</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
//               veniam eius optio? Eveniet facilis dolorum quis exercitationem,
//               repudiandae sed dolores.
//             </p>
//             <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
//               Check
//             </button>
//           </div>
//           <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
//             <i class=" text-5xl fa-solid fa-server"></i>
//             <h1 className="text-4xl">Backend Development</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
//               veniam eius optio? Eveniet facilis dolorum quis exercitationem,
//               repudiandae sed dolores.
//             </p>
//             <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
//               Check
//             </button>
//           </div>
//           <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
//             <i class=" text-5xl fa-solid fa-server"></i>
//             <h1 className="text-4xl">Backend Development</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
//               veniam eius optio? Eveniet facilis dolorum quis exercitationem,
//               repudiandae sed dolores.
//             </p>
//             <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
//               Check
//             </button>
//           </div>
//           <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
//             <i class=" text-5xl fa-solid fa-server"></i>
//             <h1 className="text-4xl">Backend Development</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
//               veniam eius optio? Eveniet facilis dolorum quis exercitationem,
//               repudiandae sed dolores.
//             </p>
//             <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
//               Check
//             </button>
//           </div>
//           <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
//             <i class=" text-5xl fa-solid fa-server"></i>
//             <h1 className="text-4xl">Backend Development</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
//               veniam eius optio? Eveniet facilis dolorum quis exercitationem,
//               repudiandae sed dolores.
//             </p>
//             <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
//               Check
//             </button>
//           </div>
//           <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
//             <i class=" text-5xl fa-solid fa-server"></i>
//             <h1 className="text-4xl">Backend Development</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
//               veniam eius optio? Eveniet facilis dolorum quis exercitationem,
//               repudiandae sed dolores.
//             </p>
//             <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
//               Check
//             </button>
//           </div>
//           <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
//             <i class=" text-5xl fa-solid fa-server"></i>
//             <h1 className="text-4xl">Backend Development</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
//               veniam eius optio? Eveniet facilis dolorum quis exercitationem,
//               repudiandae sed dolores.
//             </p>
//             <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
//               Check
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;