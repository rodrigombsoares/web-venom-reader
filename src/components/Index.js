import { useEffect, useState } from "react";
import getPosts from "../connections/Venom";
import PostList from "./PostList";

function Index() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () => async () => {
      let posts = await getPosts();
      setPosts(posts);
    },
    []
  );
  return <PostList postPaths={posts} />;
}

export default Index;
