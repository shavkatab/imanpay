import { RightArrowIcon } from "../Icons";
import cls from "./Arrows.module.scss";

export function SampleNextArrow(props) {
  const { className, styles = "", onClick } = props;
  return (
    <div
      className={`${className} ${cls.nextArrow} ${styles}`}
      onClick={onClick}
    >
      <RightArrowIcon />
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, styles = "", onClick } = props;
  return (
    <div
      className={`${className} ${cls.prevArrow} ${styles}`}
      onClick={onClick}
    >
      <RightArrowIcon />
    </div>
  );
}
