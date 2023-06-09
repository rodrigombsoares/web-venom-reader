import { useState, useEffect } from 'react'
import getPosts from '../connections/Venom';
import PostList from './PostList';

function Index() {
  const [posts, setPosts] = useState([])

  useEffect(() => async () => {
    let posts = await getPosts();
    setPosts(posts);
  }, [])
  
  return (<PostList postPaths={[posts[1], posts[1]]} />);
}

export default Index;
