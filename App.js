import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Getdet from "./pages/Getdet";
import Update from "./pages/Update";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Deleteform from "./pages/Deleteform";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={<Home />} />
          <Route path="/events" exact element={<Menu/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/login" exact element={<Contact/>} />
          <Route path="/get" exact element={<Getdet/>}/>
          <Route path="/update" exact element={<Update/>}/>
          <Route path="/delete" exact element={<Deleteform/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;