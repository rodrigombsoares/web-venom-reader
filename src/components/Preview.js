import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Preview({ postAttributes }) {
  return (
    <Card sx={{ maxWidth: "50%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {postAttributes["title"]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {postAttributes["description"]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
