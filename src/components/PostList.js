import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Preview from "./Preview";
import { useEffect, useState } from "react";

const fm = require("front-matter");

function getPreview(postAttributes) {
  return (
    <ListItem alignItems="flex-start">
      <Preview postAttributes={postAttributes} />
    </ListItem>
  );
}

async function getPostAttributes(postPath) {
  const res = await fetch(postPath)  
  return fm(res.text())["attributes"];
}

export default function PostList({ posts }) {
  const [postsAtt, setPostsAtt] = useState(["", "hey"]);

  useEffect(() => {
    let pAtt = [];
    posts.forEach((post) => {
      let pa = getPostAttributes(post);
      console.log(pa);
      pAtt.push(pa);
    });
    setPostsAtt(pAtt);
  }, [posts]);

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {postsAtt.map((postAtt) => getPreview(postAtt))}
    </List>
  );
}
