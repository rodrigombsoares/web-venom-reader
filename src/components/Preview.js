import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";
import { getImageURL } from "../services/ipfs";

export default function Preview({ postAttributes }) {
  return (
    <Card sx={{ maxWidth: "50%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={getImageURL(postAttributes["image"])}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {postAttributes["title"]}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
          {postAttributes["published"]}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {postAttributes["description"]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
