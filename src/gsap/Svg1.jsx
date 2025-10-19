import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Svg1() {
  const pathRef = useRef(null);
  const StringRef = useRef(null);
  var path="M 10 250 Q 500 250 990 250";
  var finalpath="M 10 250 Q 500 250 990 250";

useEffect(() => {
  const element = pathRef.current;
 const String=StringRef.current
     String.addEventListener("mousemove", function(dets){
     path=`M 10 250 Q  ${dets.clientX} ${dets.clientY} 990 250`;
        gsap.to("svg path", {
            attr: { d: path },
            duration: 0.1,
            ease: "power3.inOut",
     });
     
 
    }, []);
  String.addEventListener("mouseleave", function(dets){
        gsap.to("svg path", {
            attr: { d: finalpath },
            duration: 0.5,
            ease: "elastic.out(1, 0.2)",
     });
    });
}, []);

  return (
    <div ref={StringRef} className=" bg-black flex justify-center items-center">
      <svg className="bg-black" width="1200" height="500">
        <path
          ref={pathRef}
          d="M 10 250 Q 500 250 990 250"
          stroke="white"
          strokeWidth="3"
          fill="transparent"
        />
      </svg>
    </div>
  );
}
