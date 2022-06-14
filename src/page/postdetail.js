import React from "react";
import ".././App.css";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/JiyounSHIN/React-mini-project"
      >
        Hanghae-B Team 10
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Post() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        {/* 카테고리 */}
        <Grid container alignItems="center" sx={{ my: 4 }}>
          <Grid item>
            <IconButton aria-label="add to favorites">
              <ArrowBackIosRoundedIcon />
            </IconButton>
          </Grid>
          <Grid item xs>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              align="left"
              sx={{ my: "auto" }}
            >
              카테고리
            </Typography>
          </Grid>
          <Grid item>
            <IconButton aria-label="add to favorites">
              <FavoriteRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>

        {/* "#cfe8fc" */}
        <Box sx={{ bgcolor: "#fff", height: "100%" }}>
          {/* 이미지 */}
          <img
            src="https://bunny.jjalbot.com/2022/02/d8RfM5c0g.jpeg"
            alt="img"
            width="100%"
          />

          {/* 제목, 내용, 댓글 */}
          <Box sx={{ my: 3 }}>
            <Grid container alignItems="center" sx={{ mt: 4 }}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  align="left"
                >
                  Title
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  gutterBottom
                  color="text.secondary"
                  variant="body2"
                  component="div"
                  align="right"
                >
                  nickname
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" align="left">
              Pinstriped cornflower blue cotton blouse takes you on a walk to
              the park or just down the hall.
            </Typography>
          </Box>

          <Divider />

          {/* 댓글 컴포넌트 부분 */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1" align="left">
              댓글 (0)
            </Typography>
          </Box>
          {/* 댓글 작성하기 */}
          <Grid container spacing={2} alignItems="center" sx={{ mt: 1 }}>
            <Grid item xs={12} sm={10}>
              <TextField
                autoComplete="comment"
                name="comment"
                required
                fullWidth
                color="secondary"
                id="comment"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
              >
                작성
              </Button>
            </Grid>
          </Grid>

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="comment"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Nickname
                    </Typography>
                    {" — 2022.06.15"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        sx={{ bgcolor: "background.paper", pt: 12, pb: 8 }}
        component="footer"
      >
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
