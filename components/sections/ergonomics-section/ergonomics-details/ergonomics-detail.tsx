import Image from "next/image";
import style from "./ergonomics-detail.module.scss";

import type { ErgonomicsDetail } from "@/components/sections/ergonomics-section/ergonomics-section";
import clsx from "clsx";
import { BubbleCard } from "@/components/cards/bubble-card/bubble-card";
import { motion } from "motion/react";

interface ErgonomicsDetailProps extends ErgonomicsDetail {
  anchor: "left" | "right";
}

export function ErgonomicsDetail(props: ErgonomicsDetailProps) {
  return (
    <motion.div
      className={clsx(style.ergonomicsDetailDiv, props.anchor === "left" ? style.leftAnchor : style.rightAnchor)}
      initial={{ x: props.anchor === "left" ? 200 : -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: .1, ease: "easeOut" }}
    >
      <div className={style.ergonomicsDetailImageDiv}>
        <Image src={props.imageSrc} alt="" width={250} height={250}/>
        {/*<BubbleCard className={style.descriptionCard}>*/}
        {/*  <p>{props.description}</p>*/}
        {/*  <p>{props.photoCredit}</p>*/}
        {/*</BubbleCard>*/}
      </div>
    </motion.div>
  )
}