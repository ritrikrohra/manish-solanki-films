import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Categories/Home";
import Advertisement from "./Components/Categories/Advertisement";
import MusicVideo from "./Components/Categories/MusicVideo";
import Film from "./Components/Categories/Film";
import KnowMe from "./Components/KnowMe";
import Navbar from "./Components/Navbar";
import LinkPage from "./Components/LinkPage";
import NoPageMatch from "./Components/NoPageMatch";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route exact index element={<Home />} />
        <Route exact path=":linkSlug" element={<LinkPage />} />
        <Route exact path="advertisement" element={<Advertisement />} />
        <Route exact path="advertisement/:linkSlug" element={<LinkPage />} />
        <Route exact path="music-video" element={<MusicVideo />} />
        <Route exact path="music-video/:linkSlug" element={<LinkPage />} />
        <Route exact path="film" element={<Film />} />
        <Route exact path="film/:linkSlug" element={<LinkPage />} />
        <Route path="*" element={<NoPageMatch />} />
      </Route>
      <Route path="*" element={<NoPageMatch />} />
    </Routes>
    </>
  );
}

export default App;
