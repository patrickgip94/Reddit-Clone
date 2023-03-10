import { CakeIcon } from "@heroicons/react/outline";
import Image from "next/image";

const style = {
  wrapper:
    "flex flex-col space-y-2 divide-y divide-[#343536] rounded border border-[#343536] bg-[#1a1a1b] p-4 text-gray-300",
  profileInfoContainer: "flex items-center space-x-4",
  profilePicContainer: "relative h-12 w-12",
  profilePic: "object-contain",
  aboutContent: "py-2 text-sm",
  statsWrapper: "flex items-center space-x-16",
  stat: "flex flex-col",
  statTitle: "text-xs",
  footer: "flex flex-col space-y-4 pt-2",
  createdAt: "text-sm font-light flex items-center py-2 px-2",
  joinedButton:
    "cursor-pointer rounded-full border border-gray-300 py-1 text-center text-sm font-semibold",
};

const About = () => {
  return (
    <div className={style.wrapper}>
      <div className="pb-2">
        <div className={style.profileInfoContainer}>
          <div className={style.profilePicContainer}>
            <Image
              src="https://i.imgur.com/fGqFf23.png"
              layout="fill"
              className={style.profilePic}
              alt="Profile Image"
            />
          </div>
          <p>r/ReactJS</p>
        </div>
        <p className={style.aboutContent}>
          A community for learning and developing web application using React by
          Meta.
        </p>

        <div className={style.statsWrapper}>
          <div className={style.stat}>
            <span className="font-semibold">329k</span>
            <span className={style.statTitle}>React Devs</span>
          </div>
          <div className={style.stat}>
            <span className="items-center">
              <span className="text-xl items-center px-1 text-[#00FF00]">•</span>
              <span className="font-semibold">453</span>
            </span>
            <span className={style.statTitle}>Online</span>
          </div>
        </div>
      </div>

      <div className={style.footer}>
        <p className={style.createdAt}>
          <CakeIcon className="h-6 w-6" />
          <span className="px-4 font-semibold">Created Dec 31, 2013</span>
        </p>
        <div className={style.joinedButton}>Joined</div>
      </div>
    </div>
  );
};

export default About;
