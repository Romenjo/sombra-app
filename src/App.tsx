import { useState } from "react";
import "./App.css";
import ImagePlacer from "./components/ImagePlacer";
import DescriptionBox from "./components/DescriptionBox";
import Card from "./components/Card";
import HorizontalStack from "./components/HorizontalStack";
import DanyliukImage from "./images/danyliuk.jpg";
import HrytskovImage from "./images/romenjo.jpg";

function App() {
  return (
    <>
      <HorizontalStack>
        <Card
          imageUrl={DanyliukImage}
          name="Yulian Danyliuk"
          description="Student of LPNU, 19, 182. Likes football and basketball, explore nature.
          Listens to folk tracks."
          glowColor="aqua"
          />
          <Card
          imageUrl={HrytskovImage}
          name="Roman Hrytskov"
          description="Student of LPNU, 19, 185. Likes football, adores football, believes in footballs supremacy.
          Listens to Lil Peep tracks."
          glowColor="cyan"
        />
      </HorizontalStack>
    </>
  );
}

export default App;
