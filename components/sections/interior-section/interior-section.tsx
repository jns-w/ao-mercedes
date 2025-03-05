import Image from "next/image";
import style from "./interior-section.module.scss"
import { BubbleCard } from "@/components/cards/bubble-card/bubble-card";
import { TitleCard } from "@/components/cards/title-card/title-card";
import { TranslucentCard } from "@/components/cards/translucent-card/translucent-card";

export function InteriorSection() {


  return (
    <section className={style.interiorSection}>
      <TitleCard
        className={style.titleCard}
        title="Different interior approach"
        quote="Modern Mercedes models have interiors designed to elicit wows from the moment you lay eyes on the cockpit, but the SL is going with a &#39;hyperanalogue&#39; approach."
      />
      <section className={style.interiorSubSection}>

        <TranslucentCard
          className={style.translucentCardScreen}
        >
          <p>Yes, there are still screens. But instead of the usual MBUX (Mercedes-Benz User Experience) setup, the
            12.3-inch instrument panel is housed under a cowl, reflecting the SL&#39;s sporty roots.</p>
          <p>
            Dominating the dashboard is the tablet-like 11.9-inch infotainment display, whose tilt angle can be adjusted
            from 12 degrees to 32 degrees at a touch of a button. It helps minimise screen glare when driving with the
            top
            down.
          </p>
        </TranslucentCard>
        {/*<BubbleCard>*/}
        {/*  <p>*/}
        {/*    Snazzy cockpit features mood lighting and tablet-like infotainment screen, but the heat from the engine*/}
        {/*    can make*/}
        {/*    occupants uncomfortable.*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    PHOTO: sCarMart*/}
        {/*  </p>*/}
        {/*</BubbleCard>*/}

        <div className={style.bgImageWrapper}>
          <Image src="/images/sections/interior/parallax_interior1.png" alt="" width={1440} height={1001}/>
        </div>
      </section>

      <section className={style.interiorSubSection}>
        {/*<BubbleCard>*/}
        {/*  <p>*/}
        {/*    It looks uncomfortable from this angle, but Mercedes says the backseats can accommodate passengers up to*/}
        {/*    1.5m tall..*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    PHOTO: sCarMart*/}
        {/*  </p>*/}
        {/*</BubbleCard>*/}
        <TranslucentCard className={style.translucentCardSeat}>
          <p>For the first time in the SL&#39;s history, the car has rear seats. They can supposedly accommodate
            occupants up to 1.5m tall, but the backrests are so upright they seem like they are canted forward.</p>
          <p>Also, strangely absent on the test unit are soft-close doors and &#39;pushers&#39; that bring the seat
            belts closer to the front passengers</p>
        </TranslucentCard>

        <div className={style.bgImageWrapper}>
          <Image src="/images/sections/interior/parallax_interior2.png" alt="" width={1440} height={1001}/>
        </div>
      </section>
    </section>
  )
}

