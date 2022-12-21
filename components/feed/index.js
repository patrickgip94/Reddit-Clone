import Post from "../common/Post";

// these will come from a database
const posts = [
  { id: 0, title: "build reddit", author: "Patrick" },
  { id: 0, title: "build Discord", author: "Joostin" },
  { id: 0, title: "build Relationships", author: "Heff" },
];

const style = {
  wrapper: "space-y-2.5",
};

const Feed = () => {
  return (
    <div className={style.wrapper}>
      {posts.map((posts, id) => (
        <Post {...posts} key={id} />
      ))}
    </div>
  );
};

export default Feed;
