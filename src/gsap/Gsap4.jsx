import React from 'react'

export default function Gsap4() {

    const box1Ref=useRef(null)
    const box2Ref=useRef(null)
    const box3Ref=useRef(null)
  return (
    <div className=" h-screen  gap-5">
      <div className='w-full h-full bg-black'><div className='w-[200px] h-[200px] bg-slate-100'></div></div>
      <div className='w-full h-full bg-slate-700'><div className='w-[200px] h-[200px] bg-slate-100'></div></div>
      <div className='w-full h-full bg-red-800'><div className='w-[200px] h-[200px] bg-slate-100'></div></div>
    </div>
  )
}
