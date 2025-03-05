import type { ReactNode } from "react";
import clsx from "clsx";
import style from "./translucent-card.module.scss";

type TranslucentCardProps = {
  children: ReactNode
  className?: string
}

export function TranslucentCard(props: TranslucentCardProps) {
  return (
    <div className={clsx(style.translucentCard, props.className)}>
      {props.children}
    </div>
  )
}
