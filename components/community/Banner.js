import Image from "next/image";

const style = {
  wrapper: "-mt-20 flex flex-col",
  bannerImage: "h-52 relative",
  bannerContentWrapper: "mx-auto max-w-5xl px-6 py-2",
  profileInfoWrapper: "flex items-start space-x-4 pb-5",
  profilePicWrapper: "-mt-6 h-20 w-20 relative",
  profilePic:
    "h-full w-full rounded-full border-white bg-white bg-cover object-contain",
  titleWrapper: "mt-1",
  title: "text-2xl font-bold text-[#D7DADC]",
  tag: "pt-1 text-sm text-gray-400",
  joinButtonContainer: "mt-1 flex items-center",
  joinedButton:
    "cursor-pointer rounded-full border border-gray-300 px-[1.6rem] py-1 text-center text-sm font-semibold",
};

const Banner = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.bannerImage}>
        <Image
          src="https://i.imgur.com/eW7Dr7V.png"
          layout="fill"
          className="object-cover"
          alt="Banner"
        />
      </div>
      <div className="bg-[#1a1a1b]">
        <div className={style.bannerContentWrapper}>
          <div className={style.profileInfoWrapper}>
            <div className={style.profilePicWrapper}>
              <Image
                className={style.profilePic}
                src="https://i.imgur.com/fGqFf23.png"
                layout="fill"
                alt=""
              />
            </div>

            <div className={style.titleWrapper}>
              <h1 className={style.title}>
                /r/ReactJS - The Front Page of React
              </h1>
              <h2 className={style.tag}>r/reactjs</h2>
            </div>

            <div className={style.joinButtonContainer}>
              <button className={style.joinedButton}>Joined</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
