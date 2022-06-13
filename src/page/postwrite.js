import React from "react";
import ".././App.css"
import styled from "styled-components";
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Postwrite = () => {
    // 카테고리 List 
    const category = [
        { title: "일상" },
        { title: "여행" },
        { title: "애견용품" }
    ]


    return (
        <div style={{ position: "absolute" }}>
            <Nickst><p>nickname 님!</p>반려동물을 소개해주세요</Nickst>
            <Dropst>
                <label>카테고리 :</label>
                <Stack spacing={2} sx={{ width: 200 }}>
                    <Autocomplete
                        id="size-small-standard"
                        size="small"
                        options={category}
                        getOptionLabel={(option) => option.title}
                        // defaultValue={top100Films[13]}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                // label="카테고리를 선택하세요"
                                placeholder="Favorites"
                            />
                        )}
                    /></Stack>
            </Dropst>
            <div><div>이미지</div><button>사진업로드</button></div>
            <div><p>title</p><input /></div>
            <div>
                <div><p>content</p><input /></div>
                <button>자랑등록</button>
            </div>
        </div>
    )
}

const Nickst = styled.p`
    position : relative;
    text-align : left;
    top : -30px;
    left : 30px;
    font-size : 20px;
    &>p {
        color : #602d38;
        font-size : 30px;
        margin-top : 10px;
        margin-bottom : 5px;
    }
`;

const Dropst = styled.div`
    display : flex;
    margin-left : 30px;
    align-item : row;
    gap : 20px;
    & > label {
        font-size : 18px;

    }
`;

export default Postwrite;
