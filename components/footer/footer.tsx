import Image from "next/image";
import style from "./footer.module.scss"

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.contentDiv}>
        <Image className={style.footerImg} src="/images/footer/asiaone_footer_desktop.png" alt="footer" width={800} height={200}/>

        <Image className={style.footerImgMobile} src="/images/footer/asiaone_footer_mobile.png" alt="footer" width={313} height={307}/>
      </div>
    </footer>
  )
}