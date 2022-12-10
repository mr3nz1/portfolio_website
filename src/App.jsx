import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhoIam from './components/WhoIam';
import MyServices from "./components/MyServices"
import MyWork from "./components/MyWork"

function App() {
  return (
    <div className="xl:container xl:mx-auto bg-gray-900 text-white font-sans">
      <Navbar />
      <Hero />
      <WhoIam />
      <MyServices />
      <MyWork />
    </div>
  );
}

export default App;
