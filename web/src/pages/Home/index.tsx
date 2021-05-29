import Section from "../../components/Section"
import { homeObjFour, homeObjOne, homeObjTree, homeObjTwo } from "./Data";

const Home: React.FC = () => {
  return (
    <>
      <Section {...homeObjOne}/>
      <Section {...homeObjTwo}/>
      <Section {...homeObjTree}/>
      <Section {...homeObjFour}/>
      
    </>
  );
}

export default Home;