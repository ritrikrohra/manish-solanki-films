import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Categories/Home";
import Advertisement from "./Components/Categories/Advertisement";
import MusicVideo from "./Components/Categories/MusicVideo";
import Film from "./Components/Categories/Film";
import LinkPage from "./Components/LinkPage";
import NoPageMatch from "./Components/NoPageMatch";
import Main from "./Components/Main";
import Bio from "./Components/Bio";
// import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main />}>
          <Route exact index element={<Home />} />
          <Route exact path="bio" element={<Bio />} />
          <Route exact path=":linkSlug" element={<LinkPage />} />
          <Route exact path="advertisement" element={<Advertisement />} />
          <Route exact path="advertisement/:linkSlug" element={<LinkPage />} />
          <Route exact path="music-video" element={<MusicVideo />} />
          <Route exact path="music-video/:linkSlug" element={<LinkPage />} />
          <Route exact path="film" element={<Film />} />
          <Route exact path="film/:linkSlug" element={<LinkPage />} />
          <Route path="*" element={<NoPageMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
