import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Preview from "./Preview";
import { useEffect, useState } from "react";
import { removeMatter } from "../utils/posts";
import Post from "./Post";

const fm = require("front-matter");

async function fetchPosts(postPaths) {
  let posts = [];
  console.log("postPaths", postPaths);
  for await (const postPath of postPaths) {
    let res = await fetch(postPath);
    let resText = await res.text();
    posts.push({
      attributes: fm(resText)["attributes"],
      content: removeMatter(resText),
    });
  }
  return posts;
}

function getPreview(post, handleOpen) {
  return (
    <ListItem alignItems="flex-start" onClick={() => handleOpen(post)}>
      <Preview postAttributes={post["attributes"]} />
    </ListItem>
  );
}

export default function PostList({ postPaths }) {
  const [posts, setPosts] = useState([]);
  const [currPost, setCurrPost] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = (post) => {
    setCurrPost(post);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log("useEffect");
    async function getPosts() {
      let pAtt = await fetchPosts(postPaths);
      setPosts(pAtt);
    }
    getPosts();
  }, [postPaths]);

  return (
    <div>
      <Post post={currPost} open={open} handleClose={handleClose} />
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {posts.map((post) => getPreview(post, handleOpen))}
      </List>
    </div>
  );
}
