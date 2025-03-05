import Image from "next/image";
import style from "./ergonomics-detail.module.scss";

import type { ErgonomicsDetail } from "@/components/sections/ergonomics-section/ergonomics-section";
import clsx from "clsx";
import { BubbleCard } from "@/components/cards/bubble-card/bubble-card";

interface ErgonomicsDetailProps extends ErgonomicsDetail {
  anchor: "left" | "right";
}

export function ErgonomicsDetail(props: ErgonomicsDetailProps) {
  return (
    <div className={clsx(style.ergonomicsDetailDiv, props.anchor === "left" ? style.leftAnchor : style.rightAnchor)}>
      <div className={style.ergonomicsDetailImageDiv}>
        <Image src={props.imageSrc} alt="" width={200} height={200}/>
        <BubbleCard className={style.descriptionCard}
                    text={
                      <>
                        <p>{props.description}</p>
                        <p>{props.photoCredit}</p>
                      </>
                    }/>
      </div>
    </div>
  )
}