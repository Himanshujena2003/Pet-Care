import Main from "../sections/Main";
import Standards from "../sections/Standards";
import About from "../sections/About";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Main />
      <Standards />
      <About />
      <Contact />
    </div>
    
  );
};

export default Home;
