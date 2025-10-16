// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// export default function Gsap3() {
//   const box1Ref = useRef(null);
//   const box2Ref = useRef(null);
//   const box3Ref = useRef(null);

//   useEffect(() => {
    
//     const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

//     tl.to(box1Ref.current, { x: 300, backgroundColor: "red", scale: 1.5 })
//       .to(box2Ref.current, { x: 300, backgroundColor: "green", scale: 1.5 })
//       .to(box3Ref.current, { x: 300, backgroundColor: "blue", scale: 1.5 });

//   }, []);

//   return (
//     <div className="p-10 flex gap-5">
//       <div ref={box1Ref} className='w-40 h-40 bg-black'></div>
//       <div ref={box2Ref} className='w-40 h-40 bg-black'></div>
//       <div ref={box3Ref} className='w-40 h-40 bg-black'></div>
//     </div>
//   );
// }

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Gsap3() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    tl.to(box1Ref.current, { x: 300, backgroundColor: "red" })
      .to(box2Ref.current, { x: 300, backgroundColor: "green" })
      .to(box3Ref.current, { x: 300, backgroundColor: "blue" });

  }, []);

  return (
    <div className="p-10  gap-5">
      <div ref={box1Ref} className='w-40 h-40 mt-5 bg-black'></div>
      <div ref={box2Ref} className='w-40 h-40 mt-5 bg-black'></div>
      <div ref={box3Ref} className='w-40 h-40 mt-5 bg-black'></div>
    </div>
  );
}
