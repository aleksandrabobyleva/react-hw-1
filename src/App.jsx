import { useState } from "react";
import ImageComponent from "./ImageComponent";
import VideoComponent from "./VideoComponent";
import ParagraphsComponen from "./ParagraphsComponen";
import ListsComponent from "./ListsComponent";

function App() {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <h1>HomeWork-1</h1>
        <ImageComponent />
        <ParagraphsComponen />
        <VideoComponent />
        <ListsComponent />
      </div>
    </>
  );
}

export default App;
