import React, { useState, useEffect } from "react";
import ".././App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PostItem from "./postitem";

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
  const navigate = useNavigate();

  // 카테고리 목록
  const categories = ["전체", "일상", "여행", "용품"];
  const [activeCat, setActiveCat] = useState(categories);
  const [data, setData] = useState([
    {
      id: 0,
      title: "title",
      imageUrl: "https://bunny.jjalbot.com/2022/02/d8RfM5c0g.jpeg",
      category: "일상",
      content: "content",
      username: "username",
      createdAt: "2022-06-14T11:13:06.657894",
      modifiedAt: "2022-06-14T11:13:06.657894",
      likeCnt: 0,
    },
  ]);

  // 게시물 목록 불러오기
  const [axiosPosts, setAxiosPosts] = useState([
    {
      id: 0,
      title: "title",
      imageUrl: "https://bunny.jjalbot.com/2022/02/d8RfM5c0g.jpeg",
      category: "일상",
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
      setData(response.data);
    })();
  }, [setAxiosPosts]);

  const activeCategory = (btn) => {
    if (btn === "전체") {
      setData(axiosPosts);
      return data;
    }

    const filteredData = axiosPosts.filter((item) => item.category === btn);
    setData(filteredData);
    return data;
  };

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
              {activeCat.map((cate, index) => {
                if (cate === "전체") {
                  return (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => activeCategory(cate)}
                    >
                      {cate}
                    </Button>
                  );
                } else
                  return (
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => activeCategory(cate)}
                    >
                      {cate}
                    </Button>
                  );
              })}
            </Stack>
          </Container>
        </Box>

        {/* post 목록 */}
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            {data.map((card) => (
              <PostItem card={card} />
            ))}
          </Grid>
        </Container>
      </main>

      {/* 게시글 작성하기 버튼 */}
      <Fab
        color="secondary"
        aria-label="post"
        sx={{ position: "fixed", bottom: 20, right: 40 }}
        onClick={() => navigate("/postwrite")}
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
