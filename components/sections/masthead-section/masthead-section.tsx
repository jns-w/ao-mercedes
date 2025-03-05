"use client"
import Image from "next/image";
import style from './masthead-section.module.scss'
import { TranslucentBubble } from "@/components/sections/masthead-section/translucent-bubble/translucent-bubble";
import { motion, useMotionValue, useSpring } from "motion/react";
import { globalYAtom } from "@/states/scroll";
import { useAtom } from "jotai";
import { useEffect } from "react";
import clsx from "clsx";

export function MastheadSection() {
  const [globalY] = useAtom(globalYAtom)

  const cardPosition = useMotionValue(500)
  const animatedCardPosition = useSpring(cardPosition, {damping: 20, stiffness: 100})

  useEffect(() => {
    if (globalY > 400) {
      cardPosition.set(0)
    } else {
      cardPosition.set(500)
    }
  }, [cardPosition, globalY]);

  return (
    <>
      <section className={style.mastheadSection}>
        <div className={style.mastheadContentDiv}>
          <h1>Mercedes-Benz SL55 AMG</h1>
          <motion.div
            style={{
              position: "absolute",
              bottom: "5vw",
              y: animatedCardPosition,
            }}
          >
            <TranslucentBubble>
              <h2>A luxurious upgrade that packs plenty of firepower</h2>
              <Image src="/images/sections/masthead/main-arrow-down.svg" alt="" width={40} height={40}/>
            </TranslucentBubble>
          </motion.div>
        </div>

        <div className={style.bgImageWrapper}>
          <Image
            key="carImage"
            className={style.carImageBase}
            src="/images/sections/masthead/masthead_back_img.jpg" alt="" width={2160} height={1289}/>
          <Image
            src="/images/sections/masthead/masthead_ring.svg" alt="" width={400} height={400}
            className={style.circleImageSmall}
          />
          <div className={style.circleImageWrapper}>
            <Image
              className={style.circleImage}
              src="/images/sections/masthead/masthead_ring.svg" alt="" width={2160} height={1289}/>
            <Image
              className={clsx(style.circleImage, style.rotate)}
              src="/images/sections/masthead/masthead_ring_rotate.svg" alt="" width={2160} height={1289}/>
          </div>
          <Image
            className={style.carImageOverlay}
            src="/images/sections/masthead/masthead_fore_img.png" alt="" width={2160} height={1289}/>
        </div>

      </section>
      <div className={style.mastheadPlaceholder}/>
    </>
  )
}
