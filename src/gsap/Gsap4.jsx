// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
 
// gsap.registerPlugin(ScrollTrigger);

// export default function Gsap4() {
//   const box1Ref = useRef(null);
//   const box2Ref = useRef(null);
//   const box3Ref = useRef(null);

//   useEffect(() => {
    
//     gsap.to(box1Ref.current, {
//       duration: 2,
//       rotate: 360,
//       scale: 1.5,
//       backgroundColor: "blue",
      
//     });

   
//     gsap.to(box2Ref.current, {
//       duration: 0.1,
//       rotate: 360,
//       scale: 0,
//       backgroundColor: "blue",
//       scrollTrigger: {
//         trigger: box2Ref.current,
//         start: "top 80%",
//         end: "top 30%",
//         markers: true,
//         scrub: true,
//       },
//     });

   
//     gsap.to(box3Ref.current, {
//       duration: 2,
//       rotate: 360,
//       scale: 1.5,
//       backgroundColor: "blue",
//       scrollTrigger: {
//         trigger: box3Ref.current,
//         start: "top 80%",
//         end: "top 30%",
//         markers: true,
//         scrub: true,
//       },
//     });
//   }, []);

//   return (
   
//     <div className="h-[300vh]">
     
//       <div className="w-full h-screen flex items-center justify-center bg-white">
//         <div ref={box1Ref} className="w-[200px] h-[200px] bg-slate-100"></div>
//       </div>

       
//       <div className="w-full h-screen flex items-center justify-center bg-slate-700">
//         <div ref={box2Ref} className="w-[200px] h-[200px] bg-slate-100"></div>
//       </div>
 
//       <div className="w-full h-screen flex items-center justify-center bg-red-800">
//         <div ref={box3Ref} className="w-[200px] h-[200px] bg-slate-100"></div>
//       </div>
//     </div>
//   );
// }



// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Gsap4() {
//   const box1Ref = useRef(null);
//   const box2Ref = useRef(null);
//   const box3Ref = useRef(null);
//     const to = gsap.timeline();
//   useEffect(() => {
   
//     gsap.to(box1Ref.current, {
//       duration: 2,
//       rotate: 360,
//       scale: 1.5,
//       backgroundColor: "blue",
//     });

   
//     // const headings = box2Ref.current.querySelectorAll("h1");
//     // headings.forEach((el) => {
//     //   gsap.from(el, {
//     //     opacity: 0,
//     //     x: 200,
//     //     duration: 2,
//     //     scale: 0,
//     //     backgroundColor: "blue",
//     //     scrollTrigger: {
//     //       trigger: el,
//     //       start: "top 80%",
//     //       end: "top 30%",
//     //       markers: true,
//     //       scrub: true,
//     //     },
//     //   });
//     // });
   
//     // const headings2 = box2Ref.current.querySelectorAll("h2");
//     // headings2.forEach((el) => {
//     //   gsap.from(el, {
//     //     opacity: 0,
//     //     x: -200,
//     //     duration: 2,
//     //     scale: 0,
//     //     backgroundColor: "blue",
//     //     scrollTrigger: {
//     //       trigger: el,
//     //       start: "top 80%",
//     //       end: "top 30%",
//     //       markers: true,
//     //       scrub: true,
//     //     },
//     //   });
//     // });
//      // h1 animation (scroll trigger)
//     t1.from(box2Ref.current.querySelector("h1"), {
//       opacity: 0,
//       x: -200,
//       duration: 2,
//       scale: 0.8,
//       scrollTrigger: {
//         trigger: box2Ref.current.querySelector("h1"),
//         start: "top 80%",
//         end: "top 40%",
//         markers: true,
//         scrub: 1,
//       },
//     });

//     // h2 animation (scroll trigger)
//     t1.from(box2Ref.current.querySelector("h2"), {
//       opacity: 0,
//       x: 200,
//       duration: 2,
//       scale: 0.8,
//       scrollTrigger: {
//         trigger: box2Ref.current.querySelector("h2"),
//         start: "top 80%",
//         end: "top 40%",
//         markers: true,
//         scrub: 1,
//       },
//     });
//     gsap.to(box3Ref.current, {
//       duration: 2,
//       rotate: 360,
//       scale: 1.5,
//       backgroundColor: "blue",
//       scrollTrigger: {
//         trigger: box3Ref.current,
//         start: "top 80%",
//         end: "top 30%",
//         markers: true,
//         scrub: true,
//       },
//     });
//   }, []);

//   return (
//     <div className="h-[300vh]">
      
//       <div className="w-full h-screen flex items-center justify-center bg-white">
//         <div ref={box1Ref} className="w-[200px] h-[200px] bg-slate-100"></div>
//       </div>
 
//       <div
//         ref={box2Ref}
//         className="w-full h-screen flex flex-col gap-5 items-center justify-center bg-slate-700"
//       >
//         <h1 className="w-[200px] h-[50px] bg-slate-100 flex justify-center text-2xl">Hello </h1>
//         <h2 className="w-[200px] h-[50px] bg-slate-100 flex justify-center text-2xl">Surjeet</h2>
//       </div>

 
//       <div className="w-full h-screen flex items-center justify-center bg-red-800">
//         <div ref={box3Ref} className="w-[200px] h-[200px] bg-slate-100"></div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gsap4() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    // Box1 animation (runs immediately)
    gsap.to(box1Ref.current, {
      duration: 2,
      rotate: 360,
      scale: 1.5,
      backgroundColor: "blue",
    });

    // h1 animation (triggered once on scroll)
    gsap.from(box2Ref.current.querySelector("h1"), {
      opacity: 0,
      x: -200,
      scale: 0.8,
      duration: 1.5,
      scrollTrigger: {
        trigger: box2Ref.current.querySelector("h1"),
        start: "top 80%",
        toggleActions: "play none none none", // play once, scroll won't control
        markers: true,
        once: true, // only play once
      },
    });

    // h2 animation (triggered once on scroll)
    gsap.from(box2Ref.current.querySelector("h2"), {
      opacity: 0,
      x: 200,
      scale: 0.8,
      duration: 1.5,
      scrollTrigger: {
        trigger: box2Ref.current.querySelector("h2"),
        start: "top 80%",
        toggleActions: "play none none none",
        markers: true,
        once: true,
      },
    });

    // Box3 animation (triggered once on scroll)
    gsap.to(box3Ref.current, {
      rotate: 360,
      scale: 1.5,
      backgroundColor: "blue",
      duration: 2,
      scrollTrigger: {
        trigger: box3Ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
        markers: true,
        once: true,
      },
    });
  }, []);

  return (
    <div className="h-[300vh]">
      {/* Section 1 */}
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <div ref={box1Ref} className="w-[200px] h-[200px] bg-slate-100"></div>
      </div>

      {/* Section 2 */}
      <div
        ref={box2Ref}
        className="w-full h-screen flex flex-col gap-5 items-center justify-center bg-slate-700"
      >
        <h1 className="w-[200px] h-[50px] bg-slate-100 flex justify-center items-center text-2xl">
          Hello
        </h1>
        <h2 className="w-[200px] h-[50px] bg-slate-100 flex justify-center items-center text-2xl">
          Surjeet
        </h2>
      </div>

      {/* Section 3 */}
      <div className="w-full h-screen flex items-center justify-center bg-red-800">
        <div ref={box3Ref} className="w-[200px] h-[200px] bg-slate-100"></div>
      </div>
    </div>
  );
}

