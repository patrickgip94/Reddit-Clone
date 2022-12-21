import Post from "../common/Post";

const style = {
  wrapper: "space-y-2.5",
};

const Feed = ({ posts }) => {
  return (
    <div className={style.wrapper}>
      {posts.map((posts, id) => (
        <Post {...posts} key={id} />
      ))}
    </div>
  );
};

export default Feed;
