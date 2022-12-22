import useSWR from "swr";
import { useState, useEffect, useContext } from "react";
import { RedditContext } from "../../context/RedditContext";
import Image from "next/image";
import { comment } from "postcss";

const style = {
  profileImage: "object-contain",
  profileImageContainer: 'h-[1.2rem] w-[1.2rem] overflow-hidden'
};

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const { fetcher } = useContext(RedditContext);

  const { data } = useSWR(`/api/get-comments?postId=${postId}`, fetcher, {
    refreshInterval: 200,
  });

  useEffect(() => {
    if (!data) return;

    setComments(data.data);
  }, [data]);

  return (
    <div>
      <h1>Comments</h1>
      {comments &&
        comments.map((comments, id) => (
          <div className={style.profileImageContainer}>
            <Image
              src={comment.user.profileImage}
              className={style.profileImage}
              layout="fill"
            />
          </div>
        ))}
    </div>
  );
};

export default Comments;
