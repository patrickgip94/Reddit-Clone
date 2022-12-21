import Vote from "../feed/Vote";
import Actions from "../feed/Actions";
import Info from "../feed/Info";

const style = {
  wrapper: "flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]",
  post: "flex flex-col space-y-1 cursor-pointer",
  postTitle: "text-lg font-bold text-[#D7DADC]",
  postContent: "text-md font-medium text-[#D7DADC]/80",
};

const Post = ({ id, title, author }) => {
  return (
    <div className={style.wrapper}>
      <Vote />
      <div className={style.post}>
        <Info author={author} />
        <h1 className={style.postTitle}>{title}</h1>
        <p className={style.postContent}>
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on UI components. It is maintained by
          Meta and a community of individual developers and companies.
        </p>
        <Actions />
      </div>
    </div>
  );
};

export default Post;
