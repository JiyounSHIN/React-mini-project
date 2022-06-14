import React from 'react';
import Header from './page/header';
import SignUp from './page/signup';
import LogIn from './page/login';
import Postwrite from './page/postwrite';
import Postupdate from './page/postupdate';
import Main from './page/main';
import Posts from './page/posts';
import Post from './page/post';
import './App.css';
import { Link, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/posts" element={<Posts />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/postwrite" element={<Postwrite />} />
        <Route path="/postupdate" element={<Postupdate />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
