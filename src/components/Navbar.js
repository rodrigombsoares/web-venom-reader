import { AppBar, Toolbar, Typography, Avatar, Grid } from "@mui/material";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  return (
    <AppBar position="relative">
      <Toolbar
        sx={{
          "display": "flex",
          "flex-direction": "row",
          "justify-content": "flex-start",
          "row-gap": "10px",
          "column-gap": "30px",
          "margin-left": "30px",
          "margin-top": "10px",
          "margin-bottom": "10px",
        }}
      >
        <Avatar
          alt="Decentralog - Venom blog"
          src={logo}
          sx={{ width: 56, height: 56 }}
        />
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography variant="h6" color="inherit" noWrap>
            Decentralog
          </Typography>
          <Typography variant="caption" color="inherit" noWrap>
            Using Venom network to create a fully decentralized blog posting
            mechanism
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
