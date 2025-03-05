import style from "./introduction-section.module.scss"
import { Carousel } from "@/components/carousel/carousel";

export function IntroductionSection() {
  return (
    <section className={style.introductionSection}>
      <div className={style.contentWrapper}>
        <div className={style.titleDiv}>
          <h2>
            <span>TEXT</span> JEREMY CHUA
            &nbsp;&nbsp;
            <span>DESIGN</span> CJ.FOO
          </h2>
          <hr/>
          <p className={style.timestamp}>PUBLISHED ON 03 APRIL 2023, 3:37PM</p>
        </div>
        <div className={style.contentDiv}>
          <p>The iconic SL has been transformed from &#39;super-light to &#39;superb luxurious&#39;, and in SL55 form,
            packs plenty of
            firepower, too.</p>
          <p>Electric cars, EVs, zero emissions, sustainability, eco-friendliness. We&#39;re constantly bombarded with
            terms
            like
            these that we&#39;re literally drowning in eco-consciousness. Internal combustion engines and fossil fuels
            are bad and must be phased out. </p>
          <p>
            The intentions are good, but they are becoming suffocating. Ever-tightening emission regulations have
            quietened
            the voices of high-performance machines. Driving and admiring &#39;traditional&#39; sports cars feels like a
            crime.
            But
            every now and then, a car like the Mercedes-Benz SL comes along. </p>
          <p>
            Yes, it goes fast, attracts attention, and takes a big chunk out of your savings. In SL55 form, it is the
            first
            brand-new SL in Singapore that costs over $1 million ($1,002,888 to be exact), its price inflated by the
            heftier
            taxes levied on super-luxury cars.</p>
          <p>
            Price tag and vehicle dynamics are just the tip of the iceberg, though. It is no ordinary sports car, for
            the
            SL&#39;s true purpose is to refresh a petrolhead&#39;s soul.</p>
        </div>
        <Carousel/>
      </div>
    </section>
  )
}