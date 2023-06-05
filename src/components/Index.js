import { useState, useEffect } from 'react'
import Post from './Post';
import getPosts from '../connections/Venom';

function Index() {
  const [posts, setPosts] = useState([])
  const post = require("../testdata/2021-10-01_my-first-blog-post.md");

  useEffect(() => async () => {
    let posts = await getPosts();
    setPosts(posts);
  }, [])
  console.log(posts)
  return (<Post post={post} />);
}

export default Index;
