import Image from "next/image"

import style from "./pedigree-section.module.scss"
import { motion } from "motion/react"
import clsx from "clsx";

export function PedigreeSection() {
  return (
    <section className={style.pedigreeSection}>
      <div className={style.contentWrapper}>
        <h2>PEDIGREE</h2>
        <section className={style.pedigreeSubSection}>
          <div className={style.textDiv}>
            <p>
              When one thinks of a German sports car with heritage, chances are the Porsche 911, which was first
              launched
              in
              1963, immediately pops into mind.
            </p>
            <p>
              There&#39;s another model with an even longer history though:
              It&#39;s the Mercedes-Benz SL, which first debuted as a racecar in 1952.
            </p>
            <p>
              The SL has racecar heritage, but over seven decades, its sportiness was blended with cruising ability. SL,
              which
              stands for &#39;sport-light&#39;, continually evolved into a topless grand tourer.
            </p>
          </div>
          <motion.div
            className={style.imageDiv}
            initial={{x: -200, opacity: 0, scale: .1}}
            whileInView={{x: 0, opacity: 1, scale: 1}}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              type: "easeOut",
              duration: .3,
            }}
          >
            <div className={clsx(style.titleCard, style.anchorRight)}>
              <h3>Porsche 911</h3>
            </div>
            <Image src="/images/sections/pedigree/pedigree_porsche.png" alt="Porsche 911" width={300} height={300}/>
          </motion.div>
        </section>
        <section className={style.pedigreeSubSection}>
          <motion.div
            className={style.imageDiv}
            initial={{x: 200, opacity: 0, scale: .1}}
            whileInView={{
              x: 0, opacity: 1, scale: 1
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              type: "easeOut",
              duration: .3,
            }}
          >
            <div className={clsx(style.titleCard, style.anchorLeft)}>
              <h3>Mercedes-Benz SL</h3>
            </div>
            <Image
              src="/images/sections/pedigree/pedigree_mercedes_benz_sl.png" alt="Mercedes-Benz SL" width={300} height={300}/>
          </motion.div>
          <div className={style.textDiv}>
            <p>
              Indeed, grand is a precise term for the new car&#39;s size.
              Compared to the previous SL, the latest one is 93mm longer, 38mm wider and 44mm taller. For improved
              stability
              and passenger space, the wheelbase has been stretched by 115mm to 2,700mm.
            </p>
            <p>
              The car looks cleaner, sleeker and meaner than its predecessor. Its bonnet seems lower and much wider, yet
              the
              designers have wisely refrained from giving it a massive grille and gaping air intake. Brashness is not
              part
              of
              the SL&#39;s DNA.
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}