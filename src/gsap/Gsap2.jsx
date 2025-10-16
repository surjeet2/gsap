// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// export default function Gsap2() {
//   const H1Refs = useRef([]);

//   useEffect(() => {
//     H1Refs.current.forEach((el, index) => {
//       gsap.from(el, {
//         y: 50,
//         opacity: 0,
//         duration: 2,
//         delay: index * 0.5,
       
//         // color mat do → warna GSAP override kar dega
//       });
//     });
//   }, []);

//   return (
//     <div>
//       {[...Array(3)].map((_, i) => (
//         <h1
//           key={i}
//           ref={el => H1Refs.current[i] = el}
//           style={{ color: "gray" }}   // ✅ sab green
//         >
//           {i === 0 ? "Hello i am surjeet" : i === 1 ? "i am also surjeet" : "Main hoon Surjeet"}
//         </h1>
//       ))}
//     </div>
//   );
// }
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Gsap2() {
  const containerRef = useRef(null);

  useEffect(() => {
    // gsap.utils.toArray → parent ke andar sab h1 select karega
    gsap.from(gsap.utils.toArray(containerRef.current.querySelectorAll("h1")), {
      y: 10,
      opacity: 0,
      duration: 1,
      stagger: 0.3,       // ek ke baad ek animate hoga
   
    });
  }, []);

  return (
    <div ref={containerRef}>
      <h1>Hello i am surjeet</h1>
      <h1>i am also surjeet</h1>
      <h1>Main hoon Surjeet</h1>
    </div>
  );
}
