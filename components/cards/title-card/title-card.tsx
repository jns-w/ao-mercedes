"use client"
import style from "./title-card.module.scss";
import { useAtom } from "jotai";
import { globalYAtom } from "@/states/scroll";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import clsx from "clsx";

type TitleCardProps = {
  className?: string;
  title: string;
  quote: string;
}

export function TitleCard(props: TitleCardProps) {
  const [globalY] = useAtom(globalYAtom)
  const titleMarker = useRef<HTMLDivElement>(null)

  const progress = useMotionValue(0)
  const titleOffset = useTransform(progress, [0, 1], ["-100%", "0%"])
  const quoteOffset = useTransform(progress, [0, 1], ["100%", "0%"])

  const titleTranslate = useSpring(titleOffset, {damping: 40, stiffness: 300})
  const quoteTranslate = useSpring(quoteOffset, {damping: 40, stiffness: 300})

  useEffect(() => {
    if (!titleMarker.current) return;
    const top = titleMarker.current.getBoundingClientRect().top;
    if (top < 1500) {
      progress.set((1300-top)/1000)
    }

  }, [globalY, progress]);

  return (
    <div ref={titleMarker} className={clsx(style.titleCardWrapper, props.className)}>
      <div className={style.titleDiv}>
        <motion.div
          className={style.titleCard}
          style={{
            translateX: titleTranslate,
          }}
        >
          <h2>{props.title}</h2>
        </motion.div>
      </div>

      <div className={style.quoteDiv}>
        <motion.div
          className={style.quoteCard}
          style={{
            translateX: quoteTranslate,
          }}
        >
          <p>{props.quote}</p>
        </motion.div>
        <div>
        </div>
      </div>
    </div>
  )
}