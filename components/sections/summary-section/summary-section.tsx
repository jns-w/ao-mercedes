"use client"
import style from "./summary-section.module.scss"
import { SummaryCard } from "@/components/sections/summary-section/summary-card/summary-card";
import { useAtom } from "jotai/index";
import { globalYAtom } from "@/states/scroll";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export function SummarySection() {
  const [globalY] = useAtom(globalYAtom)
  const summaryMarker = useRef<HTMLDivElement>(null)

  const progress = useMotionValue(0)
  const leftProgressTransform = useTransform(progress, [0, 1], ["-100vw", "0vw"])
  const rightProgressTransform = useTransform(progress, [0, 1], ["100vw", "0vw"])
  const leftTranslate = useSpring(leftProgressTransform, {damping: 40, stiffness: 300})
  const rightTranslate = useSpring(rightProgressTransform, {damping: 40, stiffness: 300})

  useEffect(() => {
    if (!summaryMarker.current) return;
    const top = summaryMarker.current.getBoundingClientRect().top;
    if (top < 1500) {
      console.log(top)
      progress.set((1500 - top) / 600)
    }

  }, [globalY, progress]);
  return (
    <section ref={summaryMarker} className={style.summarySection}>
      <motion.div
        className={style.cardWrapper}
        style={{
          translateX: leftTranslate,
          width: "100%"
        }}
      >
        <SummaryCard
          title={"What We Like"}
          points={[
            "Rapid performance",
            "Loud V8 and throaty exhaust",
            "Pliant ride",
            "Cruising ability", "Might be the last SL with a V8",
            "Still feels special"
          ]}
          anchor="left"
          imageSrc={"/images/sections/summary/footer_left_what_we_like.png"}
        />

      </motion.div>
      <motion.div
        className={style.cardWrapper}
        style={{
          translateX: rightTranslate,
        }}
      >
        <SummaryCard
          title={"What We Dislike"}
          points={[
            "Ridiculous $1 million price tag",
            "Non-existent rear-wheel",
            "steering",
            "No soft-closing doors",
            "Seriously overpriced",
          ]}
          anchor="right" imageSrc={"/images/sections/summary/footer_right_what_we_dislike.png"}
        />
      </motion.div>
    </section>
  )
}