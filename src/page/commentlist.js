import React, { useEffect, useState } from "react";
import ".././App.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { apis } from "../api";
import { logRoles } from "@testing-library/react";
import { LegendToggleOutlined } from "@mui/icons-material";

const CommentList = (props) => {
  const { postId } = props;

  // 해당 게시물 정보를 보여주기 위한 객체
  const [data, setData] = useState([]);

  // 전체 게시물 목록 객체
  const [comment, setComment] = useState([]);

  //   useEffect(() => {
  //     (async () => {
  //       const response = await axios.get("http://localhost:5001/comment");
  //       setComment(response.data);
  //       console.log(response.data);
  //         console.log("---------");

  //         let filteredData = comment.filter((item) => item.postId === postId);
  //       setData(filteredData);
  //       console.log(data);
  //     })(
  //     );
  //   }, [setComment]);

  useEffect(() => {
    apis.commentList().then((res) => {
      console.log(res.data);

      const filteredData = res.data.filter((item) => item.postId === postId);
      setData(filteredData);
    });
  }, []);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {data.map((data) => (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={data.username} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={data.comment}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {data.username}
                </Typography>
                {data.createdAt}
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default CommentList;
