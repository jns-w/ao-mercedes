import style from "./translucent-bubble.module.scss"
import { ReactNode } from "react";
import clsx from "clsx";

type MessageCardProps = {
  children: ReactNode;
  className?: string;
}

export function TranslucentBubble(props: MessageCardProps) {
  return (
    <div className={clsx(style.translucentBubbleDiv, props.className)}>
      {props.children}
    </div>
  )
}