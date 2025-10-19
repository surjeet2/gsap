import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const CursorRef = useRef();
  const CursorTextRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
 
    const moveCursor = (e) => {
      gsap.to(CursorRef.current, {
        x: e.clientX,
        y: e.clientY,
    
        duration: 0.2,
      });
    };

   
    const enlargeCursor = () => {
      gsap.to(CursorRef.current, {
        scale: 3,
        duration: 0.3,
        backgroundColor: "red",
        // ease: "elastic.out(1, 0.3)",
      });
      gsap.to(CursorTextRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    };

 
    const resetCursor = () => {
      gsap.to(CursorRef.current, {
        scale: 1,
        duration: 0.3,
        backgroundColor: "white",
        // ease: "elastic.out(1, 0.3)",
      });
      gsap.to(CursorTextRef.current, {
     
        opacity: 0,
        duration: 0.2,
      });
    };

  
    window.addEventListener("mousemove", moveCursor);

    const img = imgRef.current;
    img.addEventListener("mouseenter", enlargeCursor);
    img.addEventListener("mouseleave", resetCursor);

 
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      img.removeEventListener("mouseenter", enlargeCursor);
      img.removeEventListener("mouseleave", resetCursor);
    };
  }, []);

  return (
   <div className="flex items-center justify-center w-full h-screen">
 
  <div
    ref={CursorRef}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "20px",
      height: "20px",
      backgroundColor: "white",
      borderRadius: "50%",
      pointerEvents: "none",
      transform: "translate(-50%, -50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      fontWeight: "bold",
    }}
  >
    <span
 
      ref={CursorTextRef}
      style={{
          fontSize: "8px",
        textAlign: "center",
        opacity: 0,
        pointerEvents: "none",
      }}
    >
      xoxo
    </span>
  </div>

 
  <div className="flex items-center justify-center">
    <img
      ref={imgRef}
      className="h-[250px] w-[200px] object-cover"
      src="https://plus.unsplash.com/premium_photo-1760496808963-78d222781d77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1000"
      alt="Surjeet"
    />
  </div>
</div>
    );
}
