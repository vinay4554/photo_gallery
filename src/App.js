import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Natureimages from "./components/nature";
import Villageimages from "./components/village";
import Navbar from "./components/nav";
import Animalimages from "./components/animals";
import Header from "./components/header";
import Search from "./components/search";
import Foodimages from "./components/food";
import "./styles/App.scss"


function App() {
  return (
    <Router>
    <div>
<Header/>
    <Navbar />
    <Routes>
    <Route path="/" exact element={<Search/>} />
 <Route path="/nature"  element={<Natureimages/>} />
 <Route path="/clouds"  element={<Villageimages/>} />
 <Route path="/animals"  element={<Animalimages/>} />
 <Route path="/food"  element={<Foodimages/>} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
