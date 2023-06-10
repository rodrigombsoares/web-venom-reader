import { useEffect, useState } from "react";
import getPosts from "../connections/Venom";
import PostList from "./PostList";

function Index() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getVenomPosts() {
      let posts = await getPosts();
      setPosts(posts);
    }
    getVenomPosts();
  },[]);
  return <PostList postPaths={posts} />;
}

export default Index;
