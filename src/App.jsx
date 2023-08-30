import Navbar from './components/Navbar';
import background from './assets/background.png';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home, About, Projects } from './pages/Index';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div
      className=" bg-cover bg-center "
      style={{ background: `url(${background})` }}>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
