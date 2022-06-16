import React, { useState } from "react";
import ".././App.css";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { commentWriteAPI } from "../redux/modules/commentM";
import { apis } from "../api";

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const { postId } = props;
  const writeComment = (e) => {
    setComment(e.target.value);
  };

  const addComment = () => {
      dispatch(commentWriteAPI({
          postId: postId,
          comment: comment,
          username: "username",
      }))

    setComment("");
    window.location.reload();
  };

  return (
    <Grid container spacing={2} alignItems="center" sx={{ mt: 1 }}>
      <Grid item xs={12} sm={10}>
        <TextField
          autoComplete="comment"
          name="comment"
          required
          fullWidth
          color="secondary"
          id="comment"
          value={comment}
          onChange={writeComment}
          is_submit
        onSubmit={addComment}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button type="submit" fullWidth variant="contained" color="secondary" onClick={addComment}>
          작성
        </Button>
      </Grid>
    </Grid>
  );
};

export default CommentWrite;
