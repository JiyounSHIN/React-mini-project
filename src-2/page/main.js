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
import PostItem from "./postitem";
import { apis } from "../api/index";
import { useNavigate } from "react-router-dom";

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

const Main = () => {

  // 카테고리 목록
  const categories = ["전체", "일상", "여행", "용품"];
  const [activeCat, setActiveCat] = useState(categories);

  // 해당 카테고리 게시물 목록을 보여주기 위한 객체
  const [data, setData] = useState([]);

  // 전체 게시물 목록 객체
  const [axiosPosts, setAxiosPosts] = useState([]);

  useEffect(() => {
    (async () => {
        //   dispatch(loadPostsListAxios());
        apis
            .postList() // 전체 게시물 불러오기
            .then((res) => {
                console.log(res.data);
                setAxiosPosts(res.data);
                setData(res.data);
            });
        })();
  }, []);

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
      <PostButton />

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 8 }} component="footer">
        <Copyright />
      </Box>
    </ThemeProvider>
  );
};

const PostButton = () => {
  const navigate = useNavigate();

  return (
    <Fab
      color="secondary"
      aria-label="post"
      sx={{ position: "fixed", bottom: 20, right: 40 }}
      onClick={() => navigate("/postwrite")}
    >
      <EditIcon />
    </Fab>
  );
};

export default Main;
