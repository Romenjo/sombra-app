import { useState } from "react";
import "./App.css";
import ImagePlacer from "./components/ImagePlacer";
import DescriptionBox from "./components/DescriptionBox";
import Card from "./components/Card";
import HorizontalStack from "./components/HorizontalStack";
import HrytskovImage from "./images/romenjo.jpg";

function App() {
  return (
    <>
      <HorizontalStack>
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
