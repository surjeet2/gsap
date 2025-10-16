import React, {  useEffect, useRef } from 'react'
import gsap from 'gsap';
export default function Gsap1() {
const box1Ref=useRef(null)
const box2Ref=useRef(null)
useEffect(() => {
    gsap.to(box1Ref.current,{
    x:500,
    duration:2,
    delay:1,
    rotate:360,
    yoyo:true,
    repeat:-1,
    obicity:0,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:1
    });
        gsap.from(box2Ref.current,{
    x:500,
    duration:2,
    obicity:0,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:1,
    yoyo:true,
    repeat:-1,
    });
}, []);


  return (
    <div>
 <div ref={box1Ref} className='w-40 h-40 mt-3 ml-3 bg-red-800 '></div>
 <div ref={box2Ref} className='w-40 mt-3 ml-3 h-40 bg-blue-800 '></div>
    </div>
  )
}
