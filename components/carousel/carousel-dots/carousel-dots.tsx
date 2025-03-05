import style from "./carousel-dots.module.scss"
import clsx from "clsx";

type CarouselDotsProps = {
  total: number;
  current: number;
  setIndexFn: (index: number) => void;
}

export function CarouselDots(props: CarouselDotsProps) {
  return (
    <div className={style.carouselDotsDiv}>
      {Array.from({ length: props.total }).map((_, index) => (
        <button
          key={index}
          className={clsx(style.carouselDot, index === props.current && style.active)}
          onClick={() => props.setIndexFn(index)}
        />
      ))}
    </div>
  )
}