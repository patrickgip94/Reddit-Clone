const style = {
  wrapper: "flex items-center space-x-1 text-sm text-[#818384]",
  profilePic: "h-4 w-4 rounded-full",
  profilePicContainer: "flex items-center space-x-1",
  tag: "cursor-pointer text-xs font-semibold text-[#D7DADC] hover:underline",
  postedBy: "flex items-center space-x-1",
};

const Info = ({ author }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.profilePicContainer}>
        <img
          className={style.profilePic}
          src="https://i.imgur.com/fGqFf23.png"
          alt="Profile Pic"
        />
      </div>

      <div className={style.tag}>r/ReactJS</div>

      <div>•</div>

      <div className={style.postedBy}>
        <span>
          Posted by{" "}
          <span className="cursor-pointer hover:underline">u/{author}</span>
        </span>
        <span> 2 hours ago</span>
      </div>
    </div>
  );
};

export default Info;
