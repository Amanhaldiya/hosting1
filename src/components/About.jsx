import { useState } from "react";
import bannerImage from "../assets/undraw_Coding_re_iv62.png";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const additionalText = showMore && (
    <div>
      <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Docker</span> <br />
      <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Application Hosting</span>  <br />
      <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Git and Github Copilot</span>    <br />
      <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Application Dockerization</span>    <br />
      <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Running Multiple Servers on a Single Machine using Docker(like Nginx and Apache)</span>  <br />
      {/* Add more lines as needed */}
    </div>
  );

  return (
    <>
      <div className="main-container  bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit rounded-full"
              src={bannerImage}
              alt="Aman Haldiya"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold "> Title</h1>
              <p>
                <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Java Developer</span>
                <br />
                <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Android Developer</span>
                <br />
                <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Frontend Developer</span>
                <br />
                <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Backend Developer</span>
                <br />
                <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Full Stack Developer</span>
                <br />
                <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~AWS Cloud Hosting</span>    
                <br /> <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Flutter Developer</span>   
                <br/><span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~MongoDB</span>    
              </p>

              {additionalText}
              <button
                className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg"
                onClick={toggleShowMore}
              >
                {showMore ? "Read Less" : "Read More.."}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
// import { useState } from "react";
// import bannerImage from "../assets/undraw_Coding_re_iv62.png";
// const About = () => {
//   const [data, setData] = useState({
//     image: bannerImage,






// //     title: (<div>
// // <b>Java Developer</b><br/> Android Developer"



//     //</div>),
//     desc1: (
      
//            <div>
//             <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Java Developer</span>
//             <br />
//             <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Android Developer</span>
//             <br />
//             <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Frontend Developer</span>
//             <br />
//             <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Backend Developer</span>
//             <br />
//             <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~Full Stack Developer</span>
//             <br />
//             <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '8px' }}>~AWS Cloud Hosting</span>
        
//           <br />  
//           <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>~Flutter Developer</span>
//       </div>
//   ),
// //     desc2: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. A
// //     dignissimos esse itaque impedit quas omnis odit, velit ullam
// //     suscipit? Vel obcaecati pariatur voluptatem sapiente.
// //     Necessitatibus vero laborum nam quaerat ullam?
// // `,
//     actionButton: {
//       title: "Read More..",
//       link: "/readmore",
//     },
//   });
  
//   return (
//     <>
    
//       <div className="main-container  bg-gray-100 border py-16">
//         <h1 className="text-center pb-16  text-5xl underline font-bold">
//           About Me
//         </h1>
            
//         <div className="flex items-center">
//           {/* image container */}
//           <div className="w-full flex justify-center">
//             <img
//               className="w-fit rounded-full"
//               src={data.image}
//               alt="Aman Haldiya"
//             />
//           </div>

//           {/* text container  */}
//           <div className="w-full  flex justify-center">
//             <div className="space-y-5   w-2/3">
//               <h1 className="text-5xl  font-semibold ">{data.title}</h1>
//               <p>{data.desc1}</p>
//               <p>{data.desc2}</p>
//               <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
//                 {data.actionButton.title}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;