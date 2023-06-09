import { Grid, List, ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchFromIPFS } from "../services/ipfs";
import { hasMatter, removeMatter } from "../utils/posts";
import Post from "./Post";
import Preview from "./Preview";

const fm = require("front-matter");

async function fetchPosts(postPaths) {
  let posts = [];
  console.log("here");
  for await (const postPath of postPaths) {
    let res = await fetchFromIPFS(postPath);
    let resText = await res.text();
    if (!hasMatter(resText)) {
      console.log("nope");
      continue;
    }
    console.log("yep");
    posts.push({
      attributes: fm(resText)["attributes"],
      content: removeMatter(resText),
    });
  }
  return posts;
}

function getPreview(post, handleOpen) {
  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onClick={() => handleOpen(post)}
    >
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
    async function getPosts() {
      let pAtt = await fetchPosts(postPaths);
      setPosts(pAtt);
    }
    getPosts();
  }, [postPaths]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="flex-end"
    >
      <Post post={currPost} open={open} handleClose={handleClose} />
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {posts.map((post) => getPreview(post, handleOpen))}
      </List>
    </Grid>
  );
}
