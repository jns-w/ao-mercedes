"use client"
import Image from "next/image"
import style from "./nav-menu.module.scss"
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const iconWidth = 20

const shareMenuItems = [
  {
    name: "WhatsApp",
    icon: "/images/nav-menu/nav-whatsapp.svg",
    href: "/"
  },
  {
    name: "Instagram",
    icon: "/images/nav-menu/nav-instagram.svg",
    href: "/"
  },
  {
    name: "Telegram",
    icon: "/images/nav-menu/nav-telegram.svg",
    href: "/"
  },
  {
    name: "Facebook",
    icon: "/images/nav-menu/nav-facebook.svg",
    href: "/"
  },
  {
    name: "Twitter",
    icon: "/images/nav-menu/nav-twitter.svg",
    href: "/"
  },

]

export function NavMenu() {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className={style.navMenusDiv}>
      <button className={style.navMenuBtn}>
        <Image src="/images/nav-menu/nav-hamburger.svg" alt="" width={iconWidth} height={iconWidth}/>
      </button>

      <menu className={clsx(style.shareMenu, isExpanded && style.expanded)}>
        {
          shareMenuItems.map((item) => (
            <li key={item.name} className={style.shareMenuItem}>
              <Link
                href={item.href}
              >
                <Image src={item.icon} alt="" width={iconWidth+4} height={iconWidth+4}/>
              </Link>
            </li>
          ))
        }
      </menu>
      <button
        className={clsx(style.shareMenuBtn, isExpanded && style.expanded)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Image className={style.shareIcon} src="/images/nav-menu/nav-share.svg" alt="" width={iconWidth - 2} height={iconWidth - 2}/>
        <Image className={style.arrowUpIcon} src="/images/nav-menu/nav-arrow-up.svg" alt="" width={iconWidth - 2} height={iconWidth - 2}/>
      </button>

    </div>
  )
}