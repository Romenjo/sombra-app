import "./App.css";
import Card from "./components/Card";
import HorizontalStack from "./components/HorizontalStack";
import DanyliukImage from "./images/danyliuk.jpg";
import HrytskovImage from "./images/romenjo.jpg";
import HukannaImage from "./images/Hukanna.jpg";
import DzobaImage from "./images/DzobaImage.jpg";"


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
          imageUrl={HukannaImage}
          name="Anna Huk"
          description="Student of LPNU, 18, 166. Likes music, dances and Sombra Lessons.
          Listens to pop tracks."
          glowColor="yellow"
          />
         <Card
          imageUrl={DzobaImage}
          name="Anna Dzoba"
          description="Student of LPNU, 19, 168. Likes programming.
          Listens to Stockholm hearts."
          glowColor="yellow"
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