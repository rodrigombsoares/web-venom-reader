import { useState, useEffect } from 'react'
import getPosts from '../connections/Venom';
import PostList from './PostList';

function Index() {
  const [posts, setPosts] = useState([])
  const post = require("../testdata/2021-10-01_my-first-blog-post.md");

  useEffect(() => async () => {
    let posts = await getPosts();
    setPosts(posts);
  }, [])
  console.log(posts)
  // return (<Post post={post} />);
  return (<PostList postPaths={[post, post, post, post, post, post]} />);
}

export default Index;
