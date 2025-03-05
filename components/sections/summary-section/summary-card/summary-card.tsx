import Image from "next/image";
import clsx from "clsx";
import style from "./summary-card.module.scss";

type SummaryCardProps = {
  title: string;
  points: string[];
  anchor: "left" | "right";
  imageSrc: string;
}

export function SummaryCard(props: SummaryCardProps) {
  return (
    <div className={clsx(style.summaryCardDiv, props.anchor === "left" ? style.leftAnchor : style.rightAnchor)}>
      <h2>{props.title}</h2>
      <ul>
        {props.points.map((point, index) => (
          <li key={index}><span>{point}</span></li>
        ))}
      </ul>
      <Image className={style.image} src={props.imageSrc} alt="" width={300} height={300} />
    </div>
  )
}