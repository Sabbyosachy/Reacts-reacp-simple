
import './App.css';
import Home from './componenets/Home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Menubar from './componenets/Menubar/Menubar';
import About from './componenets/About/About';
import Details from './componenets/Details/Details';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Menubar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:userId" element={<Details />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
