
import "./App.css";
import Card from "./components/Card";
import HorizontalStack from "./components/HorizontalStack";
import HukannaImage from "./images/Hukanna.jpg";


function App() {
  return (
    <>
      <HorizontalStack>
        <Card
          imageUrl={HukannaImage}
          name="HukannaImage"
          description="Student of LPNU, 18, 166. Likes music, dances and Sombra Lessons.
          Listens to pop tracks."
          glowColor="yellow"
          />
        
      </HorizontalStack>
    </>
  );
}

export default App;