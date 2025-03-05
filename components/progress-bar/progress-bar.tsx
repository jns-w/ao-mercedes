"use client"
import Image from "next/image";
import style from "./progress-bar.module.scss"
import { useScroll, useTransform, motion, useSpring } from "motion/react";

export function ProgressBar() {
  const {scrollYProgress} = useScroll()

  const progressTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const progress = useSpring(progressTransform, {damping: 30, stiffness: 200})

  return (
    <div className={style.progressBarWrapper}>
      <div className={style.progressBarDiv}>
        <motion.div
          className={style.progressTrackDiv}
          style={{width: progress}}
        >
          <div
            className={style.progressTrack1}
          />
          <div
            className={style.progressTrack2}
          />
        </motion.div>
        <motion.div
          className={style.progressCarDiv}
          style={{left: progress}}
        >
          <Image src="/images/progress-bar/progress.png" alt="" width={305} height={111}/>
        </motion.div>
      </div>
    </div>
  )
}