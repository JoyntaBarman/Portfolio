import '../src/App.css';
import Header from './ui/Header';
import Banner from './ui/Banner';
import About from './ui/About';
import Experience from './ui/Experience';
import Project from './ui/Project';
import Archive from './ui/Archive';
import Contact from './ui/Contact';
import LeftSide from './ui/LeftSide';
import RightSide from './ui/RightSide';
import ScrollBtn from './ui/ScrollBtn';

function App() {
  return (
    <main className="font-bodyFont min-h-screen bg-primaryColor text-lightText tracking-wide">
      <Header />
      <Banner />
      <About />
      <Experience />
      <Project />
      <Archive />
      <Contact />
      <LeftSide />
      <RightSide />
      <ScrollBtn />
    </main>
  );
}

export default App;

// https://portfoliobdyt.reactbd.com/
