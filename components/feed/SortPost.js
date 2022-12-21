import {
  FireIcon,
  StarIcon,
  PresentationChartLineIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";

const style = {
  wrapper:
    "flex items-center space-x-1 rounded border border-[#343536] bg-[#1a1a1b] px-2 py-2",
  iconsContainer: "flex items-center px-2 py-1 hover:bg-[#343536] rounded-full",
  icon: "h-9 w-9 cursor-pointer rounded stroke-[1.5px] p-1.5 text-gray-400 hover:bg-[#343536]",
};

const SortPost = () => {
  const [color, setColor] = useState("gray");
  const click = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className={style.wrapper}>
      <button onClick={() => click("gray")} className={style.iconsContainer}>
        <FireIcon className={style.icon} />
        <p>Hot</p>
      </button>
      <button className={style.iconsContainer}>
        <StarIcon className={style.icon} />
        <p className="font-semibold">New</p>
      </button>
      <button className={style.iconsContainer}>
        <PresentationChartLineIcon className={style.icon} />
        <p className="font-semibold">Top</p>
      </button>
      <button className={style.iconsContainer}>
        <DotsHorizontalIcon className={style.icon} />
      </button>
    </div>
  );
};

export default SortPost;
