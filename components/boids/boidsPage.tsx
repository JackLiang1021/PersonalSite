// TODO
// "use client";
// import { resize } from "motion";
// import React, { useEffect, useRef } from "react";

// const BoidsPage = () => {
//   const ref = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = ref.current!;
//     const ctx = canvas.getContext("2d");
//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       ctx?.beginPath();
//       ctx?.arc(100, 75, 5, 0, 2 * Math.PI);
//       ctx.fillStyle = "white";
//       ctx?.fill();
//       ctx?.stroke();
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     return () => window.removeEventListener("resize", resize);
//   });

//   class Boid {
//     x: number;
//     y: number;
//     rotation: number;
//     velocity_x: number;
//     velocity_y: number;

//     constructor(x: number, y: number) {
//       this.x = x;
//       this.y = y;
//       this.rotation = 0;
//       this.velocity_x = Math.random() * 2 - 1;
//       this.velocity_y = Math.random() * 2 - 1;
//     }
//   }

//   return (
//     <canvas
//       ref={ref}
//       className="bg-background text-foreground h-screen flex justify-center pt-5 overflow-hidden relative bg-[url('/graph-paper.svg')] flex-col items-center"
//     ></canvas>
//   );
// };

// export default BoidsPage;
