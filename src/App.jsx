import Navbar from './components/Navbar';
import background from './assets/background.png';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home, About, Projects } from './pages/Index';
import Sidebar from './components/Sidebar';
import  { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000);
  }, []);

  return (
    <div
      className="bg-cover bg-center"
      style={{ background: `url(${background})` }}>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        {loading ? (
          <p className='text-center h-screen'>Loading...</p> 
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
