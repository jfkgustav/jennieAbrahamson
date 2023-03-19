import Home from './pages/Home';
import Shows from './pages/Shows';
import Store from './pages/Store';
import News from './pages/News';
import Info from './pages/Info';
import Nav from './components/Nav'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/shows.html" element={<Shows />} />
          <Route path="/store.html" element={<Store />} />
          <Route path="/news.html" element={<News />} />
          <Route path="/info.html" element={<Info />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
