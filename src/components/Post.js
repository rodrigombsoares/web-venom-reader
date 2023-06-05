import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const matterRemover = /---(.|\n)*?---/

export default function Post({post}) {
  const [postMd, setPostMd] = useState("");
  
  fetch(post).then((res) => res.text()).then((text) => {setPostMd(text.replace(matterRemover,""))})

  return(
    <ReactMarkdown>{postMd}</ReactMarkdown>
  )
}
