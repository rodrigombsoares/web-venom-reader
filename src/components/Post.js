import { Box, Button, Modal } from "@mui/material";
import ReactMarkdown from "react-markdown";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "hidden",
  overflowY: "scroll",
};

export default function Post({ post, open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} display="flex" flexDirection="column">
        <ReactMarkdown>{post["content"]}</ReactMarkdown>;
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
  );
}
