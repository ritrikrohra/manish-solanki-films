import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Advertisement from "./Components/Categories/Advertisement";
import MusicVideo from "./Components/Categories/MusicVideo";
import ShortFilm from "./Components/Categories/ShortFilm";
import KnowMe from "./Components/KnowMe";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<KnowMe />} />
        <Route path="advertisements" element={<Advertisement />} />
        <Route path="music-videos" element={<MusicVideo />} />
        <Route path="short-films" element={<ShortFilm />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
