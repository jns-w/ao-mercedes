import Image from "next/image";
import style from "./advertisement-section.module.scss"

export function AdvertisementSection() {
  return (
    <section className={style.advertisementSection}>
      <div className={style.contentDiv}>
      <Image key="adDesktop" src="/images/sections/advertisement/bottom_advertisment.png" alt="advertisement" width={971} height={270}/>
      </div>
    </section>
  )
}