import React from 'react';
import Header from './page/header';
import SignUp from './page/signup';
import LogIn from './page/login';
import Postwrite from './page/postwrite';
import Postupdate from './page/postupdate';
import Main from './page/main';
import Posts from './page/postitem';
import Post from './page/postdetail';
import './App.css';
import { Link, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/postitem" element={<Posts />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/postwrite" element={<Postwrite />} />
        <Route path="/postupdate/:index" element={<Postupdate />} />
        <Route path="/post/:index" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
