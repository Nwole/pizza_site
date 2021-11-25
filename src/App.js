import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MyNavBar from './Components/MyNavBar';
import Home from './Pages/Home'
import Menu from './Pages/MenuFolder/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Router>
      <MyNavBar />
      <Routes>
        <Route path="/"  exact element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
