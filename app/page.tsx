"use client"
import { MastheadSection } from "@/components/sections/masthead-section/masthead-section";
import { IntroductionSection } from "@/components/sections/introduction-section/introduction-section";
import { PedigreeSection } from "@/components/sections/pedigree-section/pedigree-section";
import { InteriorSection } from "@/components/sections/interior-section/interior-section";
import { FeaturesSection } from "@/components/sections/features-section/features-section";
import { SummarySection } from "@/components/sections/summary-section/summary-section";
import { AdvertisementSection } from "@/components/sections/advertisement-section/advertisement-section";
import { ErgonomicsSection } from "@/components/sections/ergonomics-section/ergonomics-section";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { globalYAtom } from "@/states/scroll";

import { useAtom } from "jotai";
import style from "./home.module.scss"
import clsx from "clsx";
import { NavMenu } from "@/components/nav-menu/nav-menu";
import { ProgressBar } from "@/components/progress-bar/progress-bar";

export default function Home() {
  const {scrollY} = useScroll()
  const sectionsDivRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(true)
  const [height, setHeight] = useState(0)
  const [, setGlobalY] = useAtom(globalYAtom)

  useMotionValueEvent(scrollY, "change", (scrollY) => {
    setGlobalY(scrollY)
    if (scrollY > 1800) {
      setIsFixed(false)
    } else {
      setIsFixed(true)
    }
  })

  useEffect(() => {
    const h = sectionsDivRef.current?.getBoundingClientRect().height
    if (h) {
      setHeight(h)
    }
  }, [])

  return (
    <>
      <NavMenu/>
      <ProgressBar />
      <main className="flex flex-col">
        <MastheadSection/>
        <div ref={sectionsDivRef}
             className={
               clsx(
                 style.sectionsDiv,
                 isFixed || style.relative
               )}
        >
          <IntroductionSection/>
          <PedigreeSection/>
          <InteriorSection/>
          <FeaturesSection/>
          <ErgonomicsSection/>
          <SummarySection/>
          <AdvertisementSection/>
        </div>
        <div
          className={clsx("relative", isFixed || "hidden")}
          style={{height}}
        >
        </div>
      </main>
    </>
  );
}
