"use client";

import Image from "next/image"
import AcmeLogo from "../assets/images/acme.png"
import quantumLogo from "../assets/images/quantum.png"
import echoLogo from "../assets/images/echo.png"
import pulseLogo from "../assets/images/pulse.png"
import apexLogo from "../assets/images/apex.png"
import celestialLogo from "../assets/images/celestial.png"

const Images = [
  { src: AcmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "ApexLogo" },
  { src: celestialLogo, alt: "celestial Logo" },
]

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">Trusted  by the world's most innovative teams</h2>
      </div>
      <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
        <div className="flex justify-center gap-16">
          {Images.map(({ src, alt }, index) =>
            <Image src={src} alt={alt} key={index} className="flex-none h-8 w-auto" />
          )}
        </div>
      </div>
    </div>

  )
}