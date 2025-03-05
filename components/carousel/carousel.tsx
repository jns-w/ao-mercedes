"use client"
import Image from "next/image";
import style from "./carousel.module.scss"
import clsx from "clsx";
import { useAtom } from "jotai/index";
import { globalYAtom } from "@/states/scroll";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { CarouselDots } from "@/components/carousel/carousel-dots/carousel-dots";

const carouselImages = [
  {
    src: "/images/sections/carousel/carousel-1.png",
    alt: "carousel image 1",
  },
  {
    src: "/images/sections/carousel/carousel-2.png",
    alt: "carousel image 2",
  },
  {
    src: "/images/sections/carousel/carousel-3.png",
    alt: "carousel image 3",
  },
  {
    src: "/images/sections/carousel/carousel-4.png",
    alt: "carousel image 4",
  }
]

export function Carousel() {
  const [globalY] = useAtom(globalYAtom)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const carouselMarker = useRef<HTMLDivElement>(null)
  const carouselPosition = useMotionValue(-1)
  const positionTransform = useTransform(carouselPosition, [-1, 0, 1], ["-100vw", "0vw", "100vw"])
  const translate = useSpring(positionTransform, {damping: 40, stiffness: 100})
  const rotationTransform = useTransform(carouselPosition, [-1, 0, 1], ["-270deg", "0deg", "270deg"])
  const rotate = useSpring(rotationTransform, {damping: 40, stiffness: 100})


  useEffect(() => {
    if (!carouselMarker.current) return;
    const top = carouselMarker.current.getBoundingClientRect().top;
    if (top >= 750) {
      console.log(top)
      carouselPosition.set(-1)
    } else if (top < 750 && top > 100) {
      carouselPosition.set(0)
    } else if (top <= 100) {
      carouselPosition.set(1)
    }
  }, [globalY, carouselPosition]);

  return (
    <motion.div
      ref={carouselMarker}
      className={style.carouselWrapper}
      style={{
        translateX: translate,
        rotate: rotate,
      }}
    >
      <div className={style.carouselDiv}>
        <button
          className={clsx(style.arrowBtn, style.left, carouselIndex === 0 && style.disabled)}
          onClick={() => setCarouselIndex((prev) => prev === 0 ? prev : prev - 1)}
        >
          <Image src="/images/sections/carousel/carousel-arrow-left.svg" alt="" width={20} height={20}/>
        </button>
        <button
          className={clsx(style.arrowBtn, style.right, carouselIndex === carouselImages.length - 1 && style.disabled)}
          onClick={() => setCarouselIndex((prev) => prev === carouselImages.length - 1 ? prev : prev + 1)}
        >
          <Image src="/images/sections/carousel/carousel-arrow-right.svg" alt="" width={20} height={20}/>
        </button>
        <CarouselDots total={carouselImages.length} current={carouselIndex} setIndexFn={setCarouselIndex}/>
        <div className={style.carouselImageWrapper}>
          <div className={style.innerBorder}/>
          {
            carouselImages.map((image, index) => (
              <Image
                className={clsx(style.carouselImage, index === carouselIndex && style.active)}
                key={index}
                src={image.src}
                alt={image.alt}
                width={350}
                height={350}
              />
            ))
          }
        </div>
      </div>
    </motion.div>
  )
}

