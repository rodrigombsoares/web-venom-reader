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

async function fetchPostsAttributes(postPaths) {
  let postsAttributes = []
  for await (const postPath of postPaths) {
    let res = await fetch(postPath)
    let resText = await res.text()
    postsAttributes.push(fm(resText)["attributes"]);  
  }
  return postsAttributes;
}


export default function PostList({ posts }) {
  const [postsAtt, setPostsAtt] = useState(["", "hey"]);

  useEffect(() => {
    async function getPostAttributes() {
      let pAtt = await fetchPostsAttributes(posts);
      setPostsAtt(pAtt);  
    }
    getPostAttributes();
  }, [posts]);

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {postsAtt.map((postAtt) => getPreview(postAtt))}
    </List>
  );
}
