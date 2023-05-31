import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Feed from "./components/Feed";
import Header from "./components/Header";
// import LeftMenuItems from "./components/LeftMenuItems";
// import LeftNav from "./components/LeftNav";
import SearchResult from "./components/SearchResult";
// import SearchResultVideoCard from "./components/SearchResultVideoCard";
// import SuggestionCard from "./components/SuggestionVideoCard";
// import VideoCard from "./components/VideoCard";
import VideoDetails from "./components/VideoDetails";
import {AppContext} from "./context/contextApi";

function App() {
  return (
    <AppContext>
        <BrowserRouter>
          <div className="flex flex-col h-full">
              <Header/>
              <Routes>
                <Route path="/" exact element={<Feed/>} />
                <Route path="/searchResult/:searchQuery" exact element={<SearchResult/>} />
                <Route path="/video/:id" exact element={<VideoDetails/>} />
              </Routes>

          </div>

        </BrowserRouter>
    </AppContext>
    
  )
}

export default App
