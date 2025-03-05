import { ReactNode } from "react";
import clsx from "clsx";

import style from "./bubble-card.module.scss"

type CircleCardProps = {
  className?: string;
  children?: ReactNode;
}

export function BubbleCard(props: CircleCardProps) {
  return (
    <div className={clsx(style.bubbleCardDiv, props.className)}>
      {props.children}
    </div>
  )
}