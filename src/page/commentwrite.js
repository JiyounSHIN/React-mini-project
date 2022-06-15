import React from "react";
import ".././App.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postWriteAPI } from "../redux/modules/postM";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const CommentWrite = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // 카테고리 List 
    const [selected, setSelected] = React.useState();
    const handleSelect = (e) => {
        console.log(e.target.value)
        setSelected(e.target.value);
    };

    // 이미지 업로드 / 미리보기
    const fileInput = React.useRef("");
    const previewimage = React.useRef("");
    const onLoadFile = (e) => {
        // console.log(e.target.files[0]);
        // console.log(fileInput.current.files[0]);
        const file = fileInput.current.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                previewimage.current.style.backgroundImage = `url(${reader.result})`;
            }; //console.log(previewimage);
        }
    }

    // 작성란 data
    const title_ref = React.useRef();
    const content_ref = React.useRef();

    // "자랑등록: 버튼" 게시물 서버로 업로드 
    const handleClick = async () => {
        // console.log(selected, title_ref.current.value, content_ref.current.value)
        // 이미지 : 스토리지에서 URL 받아서 전송하기 
        let image = fileInput.current?.files[0];
        console.log(image.name);
        // const upload_file = await uploadBytes(ref(storage, `images/${image.name}`), image);
        // const file_url = await getDownloadURL(upload_file.ref);
        // console.log(file_url);
        const formData = new FormData();
        formData.append("imageUrl", image);
        
        dispatch(postWriteAPI({
            title: title_ref.current.value,
            imageUrl: formData,
            category: selected,
            content: content_ref.current.value
        }))
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
    )
}

export default CommentWrite;
