import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import Layout from "./components/layout";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import finalSearchResult from "./constants/getSearch";

function App() {
  // const [search, setSearch] = useState("");
  // useEffect(() => {
  //   const searchVideos = async () => {
  //     try {
  //       let { data } = await axios(`${finalSearchResult}&q=${search}`);
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   searchVideos();
  // }, [search]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout  />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="video/:videoId" element={<VideoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
