"use client";

import { usePathname } from "next/navigation";
import HeroSlider from "./HeroSlider";

export default function HeroSliderClient() {
   const pathname = usePathname();
  
   if (pathname !== "/") return null;  // Only show on homepage

  return <HeroSlider />;
}
