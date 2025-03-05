import style from "./ergonomics-section.module.scss"
import { ReactNode } from "react";
import { ErgonomicsDetail } from "@/components/sections/ergonomics-section/ergonomics-details/ergonomics-detail";
import { TitleCard } from "@/components/cards/title-card/title-card";

export type ErgonomicsDetail = {
  imageSrc: string;
  description: string | ReactNode;
  photoCredit?: string;
}

const ergonomicsDetails: ErgonomicsDetail[] = [
  {
    imageSrc: "/images/sections/ergonomics/Flawed_left1.png",
    description: "SL comes with a 'free' IWC timepiece with a stopwatch feature for recording lap times.",
    photoCredit: "PHOTO sgCarMart"
  },
  {
    imageSrc: "/images/sections/ergonomics/Flawed_right1.png",
    description: "\"Full-fat\" AMG models continue to have engines assembled by a single engineer, whose signature adorns the engine cover.",
    photoCredit: "PHOTO sgCarMart"
  },
  {
    imageSrc: "/images/sections/ergonomics/Flawed_left2.png",
    description: "The engine's heat also soaks into the cabin once it and the air-con are switched off. I excuse this by calling it the 'SL's warm embrace', but I am irked because the air-con can't seem to cool the cabin on a hot day.",
    photoCredit: "PHOTO sgCarMart"
  },
  {
    imageSrc: "/images/sections/ergonomics/Flawed_right2.png",
    description: "Exotic supercars aside, there are not many luxury cars today with the SL's heritage and V8 soundtrack. The last car I recall was the Lexus LC500 Convertible. But it doesn't feel as solid. It also does not have the SL's lineage.",
    photoCredit: "PHOTO sgCarMart"
  },
  {
    imageSrc: "/images/sections/ergonomics/Flawed_left3.png",
    description: "Attraction is a funny thing because it can both heighten and dull your senses. Seeing and driving the SL makes my pulse",
    photoCredit: "PHOTO sgCarMart"
  },
  {
    imageSrc: "/images/sections/ergonomics/Flawed_right3.png",
    description: "",
  }
]

export function ErgonomicsSection() {
  return (
    <section className={style.ergonomicsSection}>
      <TitleCard
        className={style.titleCard}
        title="Flawed, yet inforgettable" quote="The SL55 is not perfect. Its ergonomics could be better, its rear-wheel steering system further improved,
            and the boot should be bigger."/>
      <div className={style.contentDiv}>
        <p>
          The SL55 is not perfect. Its ergonomics could be better, its rear-wheel steering system further improved, and
          the
          boot should be bigger. I am puzzled at the lack of soft-closing doors, and really, given the price tag,
          it&#39;s
          outrageous that carbon-ceramic brakes aren&#39;t standard.
        </p>

        <p>
          The engine&#39;s heat also soaks into the cabin once it and the air-con are switched off. I excuse this by
          calling
          it the &#39;SL&#39;s warm embrace&#39;, but I am irked because the air-con can&#39;t seem to cool the cabin on
          a
          hot day.
        </p>
        <p>
          Exotic supercars aside, there are not many luxury cars today with the SL&#39;s heritage and V8 soundtrack. The
          last car I recall was the Lexus LC500 Convertible. But it doesn&#39;t feel as solid. It also does not have the
          SL&#39;s lineage.
        </p>
        <p>
          Attraction is a funny thing because it can both heighten and dull your senses. Seeing and driving the SL makes
          my
          pulse race, and at the same time, overlook its shortcomings.
        </p>

        <p>
          What matters most, though, is that driving it reminds me that life isn&#39;t just about work. And in it, I am
          also
          freed from sustainability&#39;s constant clamour. The SL refreshes my soul - how can I not love it so?
        </p>
      </div>

      <div className={style.ergonomicsDetailsDiv}>
        <div className={style.ergonomicsDetailsGrid}>
          {ergonomicsDetails.map((detail, index) => (
            <ErgonomicsDetail key={index} {...detail} anchor={index % 2 === 0 ? "right" : "left"}/>
          ))}
        </div>
      </div>
    </section>
  )
}