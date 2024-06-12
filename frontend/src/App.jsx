import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CreatePost from "./Pages/CreatePost";
import PostDetails from "./Pages/PostDetails";
import EditPost from "./Pages/EditPost";
import Profile from "./Pages/Profile";
import { Routes,Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/posts/post/:id" element={<PostDetails />} />
        <Route exact path="/write" element={<CreatePost />} /> 
        <Route exact path="/edit/:id" element={<EditPost />} /> 
        <Route exact path="/profile/:id" element={<Profile/>} /> 
      </Routes>
    </div>
  );
};

export default App;
