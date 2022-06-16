import React, { useState, useEffect } from "react";
import ".././App.css";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
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
import CommentWrite from "./commentwrite";
import CommentList from "./commentlist";
import { apis } from "../api/index";

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
  const [data, setData] = useState([]);

  // 전체 게시물 목록 객체
  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      //   dispatch(loadPostsListAxios());
      apis
        .postList() // 전체 게시물 불러오기
        .then((res) => {
          console.log(res.data);
          setPost(res.data);
          setData(res.data[post_index - 1]);
        });
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        {/* 1. 카테고리 목록, 이전 페이지로 이동 및 좋아요 기능*/}
        <Grid container alignItems="center" sx={{ my: 4 }}>
          {/* 1-1. 이전 페이지로 이동 */}
          <Grid item>
            <IconButton
              aria-label="move to category"
              onClick={() => {
                navigate(-1);
              }}
            >
              <ArrowBackIosRoundedIcon />
            </IconButton>
          </Grid>
          {/* 1-2. 해당 카테고리 목록 표시 */}
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
          {/* 1-3. 좋아요 버튼 */}
          <Grid item>
            <IconButton aria-label="add to favorites">
              <FavoriteRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>

        {/* 2. 상세 페이지 내용 */}
        <Box sx={{ bgcolor: "#fff", height: "100%" }}>
          {/* 2-1. 이미지 */}
          <img src={data.imageUrl} alt="img" width="100%" />

          {/* 2-2. 제목, 내용 */}
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

          {/* 3. 댓글 컴포넌트 부분 */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1" align="left">
              댓글 (0)
            </Typography>
          </Box>

          {/* 3-1. 댓글 작성하기 */}
          <CommentWrite postId={post_index} />

          {/* 3-2. 댓글 목록 */}
          {/* <List
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
          </List> */}
          <CommentList postId={post_index}/>
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
