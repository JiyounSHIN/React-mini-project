import React from "react";
import ".././App.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postWriteAPI } from "../redux/modules/postM";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../shared/firebase";
import { getElementError } from "@testing-library/react";
import axios from "axios";

const Postwrite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 카테고리 List
  const [selected, setSelected] = React.useState();
  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  };

  // 이미지 업로드 / 미리보기
  const fileInput = React.useRef("");
  const previewimage = React.useRef("");
  const onLoadFile = (e) => {
    console.log(e.target.files[0]);
    console.log(fileInput.current.files[0]);
    const file = fileInput.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        previewimage.current.style.backgroundImage = `url(${reader.result})`;
      }; //console.log(previewimage);
    }
  };
  let formData = new FormData();
  let image2 = document.getElementsByClassName("image");
  console.log(image2[0]);

  // 작성란 data
  const title_ref = React.useRef();
  const content_ref = React.useRef();

  // "자랑등록: 버튼" 게시물 서버로 업로드
  const handleClick = async () => {
    const date = new Date();
    // console.log(selected, title_ref.current.value, content_ref.current.value)
    // 이미지 : 스토리지에서 URL 받아서 전송하기
    // console.log(fileInput);
    // console.log(fileInput.current);
    // console.log(fileInput.current.files[0].name)
    // let a = typeof(fileInput.current.files[0].name)
    // console.log(a)

    let image = fileInput.current.files[0];
    console.log(image);
    console.log(image.name);
    const upload_file = await uploadBytes(ref(storage, `images/${image.name}`), image);
    const file_url = await getDownloadURL(upload_file.ref);
    // console.log(file_url);
    let formData = new FormData();
    formData.append("title", title_ref.current.value);
    formData.append("imageUrl", fileInput.current.files[0]);
    formData.append("category", selected);
    formData.append("content", content_ref.current.value);
    console.log(formData.getAll("imageUrl"));
    for (let key of formData.keys()) {
      console.log(key);
    }
    for (let value of formData.values()) {
      console.log(value);
    }
    //  await axios({
    //     method: "post",
    //     url: "http://13.125.247.60/api/post",
    //     data: formData,
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //     }
    // }).then(response => {
    //     console.log(response);
    // }).catch(error => {
    //     console.log(error);

    //     alert('에러가 발생함');
    // })

    dispatch(
      postWriteAPI({
        title: title_ref.current.value,
        imageUrl: file_url,
        category: selected,
        content: content_ref.current.value,
        username: "username",
        createdAt: date,
        likeCnt: 0,
      })
    );
    alert("게시글 작성 완료!");
    navigate("/");
  };

  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <Nickst>
        <p>게시글 작성하기</p>자유롭게 일상을 공유해주세요!
      </Nickst>
      <Dropst>
        <label>카테고리 :</label>
        <Select onChange={handleSelect}>
          <option key="일상" value="일상">
            일상
          </option>
          <option key="여행" value="여행">
            여행
          </option>
          <option key="용품" value="용품">
            용품
          </option>
        </Select>
      </Dropst>
      <Line />
      <Image>
        <PicSelect>
          <label
            style={{
              border: "3px solid #602d38",
              padding: "7px",
              borderRadius: "10px",
            }}
            for="ex_filename"
          >
            {" "}
            사진선택
          </label>
          <input
            value="이미지파일"
            id="image"
            disabled="disabled"
            style={{
              border: "3px solid #eee",
              padding: "7px",
              marginLeft: "5px",
              width: "30%",
            }}
          />
          <input
            type="file"
            className="image"
            id="ex_filename"
            ref={fileInput}
            onChange={onLoadFile}
            style={{ visibility: "hidden" }}
          />
        </PicSelect>
        <Preview ref={previewimage}></Preview>
      </Image>
      <Title>
        <p style={{ marginRight: "auto", marginBottom: "5px" }}>Title : </p>
        <input ref={title_ref} />
      </Title>
      <Content>
        <p style={{ marginRight: "auto", marginBottom: "5px" }}>Content</p>
        <textarea ref={content_ref} />
      </Content>
      <ButtonWrap onClick={handleClick}>게시글 올리기</ButtonWrap>
    </div>
  );
};

const Nickst = styled.p`
  position: relative;
  text-align: left;
  top: -10px;
  left: 30px;
  font-size: 20px;
  & > p {
    color: #602d38;
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

const Dropst = styled.div`
  display: flex;
  padding: 20px;
  margin-left: 10px;
  align-item: row;
  gap: 20px;
  & > label {
    font-size: 18px;
  }
`;

const Select = styled.select`
    margin-top : -3px;
    min-width : 0;
    display : block;
    width : 30%;
    padding : 8px; 8px;
    font-family : jua;
    font-size : inherit;
    border : 1px solid transparent;
    border-radius : 7px;
    background : transparent;
    &: focus {
        border-color : pink;
    }
`;

const Line = styled.hr`
  width: 39%;
  margin-left: 22px;
  margin-top: -19px;
  border: 0;
  border-bottom: 1px dashed #ccc;
  background: #999;
`;

const Image = styled.div`
  background: yellow;
  position: relative;
  max-width: 100%;
  align-item: row;
`;
const PicSelect = styled.div`
  position: absolute;
  top: 20px;
  left: calc(10% - 10px);
  font-size: 20px;
`;

const Preview = styled.div`
  position: absolute;
  top: 10px;
  right: calc(10% - 10px);
  border: 4px solid transparent;
  height: 300px;
  width: 45%;
  background-repeat: no-repeat;
  background-size: auto 350px;
  background-position: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  margin-top: 350px;
  margin-left: 10%;
  font-size: 24px;
  & > input {
    padding: 8px;
    width: 75vw;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  margin-left: 10%;
  margin-bottom: 1%;
  font-size: 24px;
  & > textarea {
    padding: 8px;
    width: 75vw;
    height: 20vh;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: select-around;
  margin: 0 auto;
  align-item: center;
  font-family: jua;
  font-size: 24px;
  height: 40px;
  width: 180px;
  color: white;
  background: #ec728d;
  border-radius: 40px;
  border: 3px solid #602d38;
  cursor: pointer;
  &:hover {
    color: #ec728d;
    background: transparent;
    border-radius: 20px;
    border: 3px solid #602d38;
  }
`;

export default Postwrite;
