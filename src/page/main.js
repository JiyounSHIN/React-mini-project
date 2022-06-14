import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import postupdate from "./postupdate";
import ".././App.css";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { pink } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

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

export default function Main() {
  const [axiosPosts, setAxiosPosts] = useState([
    {
      id: 0,
      title: "title",
      imageUrl: "https://bunny.jjalbot.com/2022/02/d8RfM5c0g.jpeg",
      category: "all",
      content: "content",
      username: "username",
      createdAt: "2022-06-14T11:13:06.657894",
      modifiedAt: "2022-06-14T11:13:06.657894",
      likeCnt: 0,
    },
  ]);


  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:5001/postResponseDto");
      setAxiosPosts(response.data);
    })();
  }, [setAxiosPosts]);
  
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 4,
            pb: 6,
          }}
        >
          {/* 상단 카테고리 메뉴*/}
          <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={4}
              justifyContent="center"
            >
              <Button variant="contained" color="secondary">
                전체
              </Button>
              <Button variant="outlined" color="secondary">
                일상
              </Button>
              <Button variant="outlined" color="secondary">
                여행
              </Button>
              <Button variant="outlined" color="secondary">
                용품
              </Button>
            </Stack>
          </Container>
        </Box>

        {/* post 목록 */}
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            {axiosPosts.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  align="left"
                >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: pink[500] }} aria-label="nickname">
                        {card.username.substr(0, 1)}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings" onClick={() => navigate('/postupdate/'+index)} >
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={card.username}
                    subheader={card.createdAt.substr(0, 10)}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={card.imageUrl.toString()}
                    alt="default"
                  />
                  <CardContent>
                    <Typography variant="body2">{card.title}</Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteRoundedIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* 게시글 작성하기 버튼 */}
      <Fab
        color="secondary"
        aria-label="post"
        sx={{ position: "fixed", bottom: 20, right: 40 }}
        onClick={()=> navigate('/postwrite')}
      >
        <EditIcon />
      </Fab>

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 8 }} component="footer">
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
