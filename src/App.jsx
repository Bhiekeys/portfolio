import Navbar from './components/Navbar';
import background from './assets/background.png';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home, About, Projects } from './pages/Index';
import Sidebar from './components/Sidebar';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animation from './assets/loading.json';

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);
  if (!imageLoaded) {
    return (
      <p className=" h-screen flex justify-center items-center">
        <Lottie
          animationData={animation}
          loop={true}
          style={{ height: '200px' }}
          className="lottie"
        />
      </p>
    );
  }

  return (
    <div
      className="bg-cover bg-center"
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
