import {
  FireIcon,
  StarIcon,
  PresentationChartLineIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const style = {
  wrapper:
    "flex items-center rounded border border-[#343536] bg-[#1a1a1b] px-2 py-2",
  iconsContainer:
    "flex items-center px-3 -py-1 hover:bg-[#343536] rounded-full ",
  icon: "h-9 w-9 cursor-pointer rounded stroke-[1.5px] p-2 text-gray-400 hover:bg-[#343536]",
};

const SortPost = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.iconsContainer}>
        <FireIcon className={style.icon} />
        <p className="font-semibold cursor-pointer text-gray-400">Hot</p>
      </div>
      <div className={style.iconsContainer}>
        <StarIcon className={style.icon} />
        <p className="font-semibold cursor-pointer text-gray-400">New</p>
      </div>
      <div className={style.iconsContainer}>
        <PresentationChartLineIcon className={style.icon} />
        <p className="font-semibold cursor-pointer text-gray-400">Top</p>
      </div>
      <div className={style.iconsContainer}>
        <DotsHorizontalIcon className={style.icon} />
      </div>
    </div>
  );
};

export default SortPost;
