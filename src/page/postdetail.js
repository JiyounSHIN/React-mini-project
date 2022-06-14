import React, { useState, useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "@mui/material";

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
  const navigate = useNavigate();

  const params = useParams();
  const post_index = params.index;

  // 해당 게시물 정보를 보여주기 위한 객체
  const [data, setData] = useState([
    {
        title: "",
        imageUrl: "",
        category: "",
        content: "",
      },
    ]);
  
    // 전체 게시물 목록 객체
  const [post, setPost] = useState([
    {
      title: "",
      imageUrl: "",
      category: "",
      content: "",
    },
  ]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:5001/postResponseDto");
      setPost(response.data);
      setData(response.data[post_index - 1]);
    })();
  }, [setPost]);

//   console.log(post);
//   const card = post[post_index - 1];
  console.log("^^^^^^^^^^^^^^^^^^^^^^^");
  console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        {/* 카테고리 목록, 이전 페이지로 이동 및 좋아요 기능*/}
        <Grid container alignItems="center" sx={{ my: 4 }}>
          {/* 이전 페이지로 이동 */}
          <Grid item>
            <IconButton aria-label="move to category" onClick={() => {
                navigate(-1);
              }}>
              <ArrowBackIosRoundedIcon />
            </IconButton>
          </Grid>
          {/* 해당 카테고리 목록 표시 */}
          <Grid item xs>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              align="left"
              sx={{ my: "auto" }}
            >
              {data.category}
              {/* 카테고리 */}
            </Typography>
          </Grid>
          {/* 좋아요 버튼 */}
          <Grid item>
            <IconButton aria-label="add to favorites">
              <FavoriteRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>

        {/* 상세 페이지 내용 */}
        <Box sx={{ bgcolor: "#fff", height: "100%" }}>
          {/* 이미지 */}
          <img src={data.imageUrl} alt="img" width="100%" />

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
                  {data.title}
                  {/* Title */}
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
                  username
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" align="left">
              {data.content}
              {/* content */}
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
