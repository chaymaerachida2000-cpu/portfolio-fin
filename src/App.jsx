import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // 1. استوردي هادو
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects  from './components/Project';
import Contact from './components/Contact'; // تأكدي أن المسار صحيح (واش كاين فمجلد components؟)

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // زدناها باش تخدم الـ Navbar ديالك

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-gray-950 dark:bg-[#121212] dark:text-gray-100 transition-colors duration-300">
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        setIsOpen={setIsOpen} 
      />
      
      {/* 2. هنا فين كيوقع السحر ديال الـ Routing */}
      <main>
        <Routes>
    
          <Route path="/" element={
            <>
              <Hero />
              <div id="projects">
                {/* هنا غتزيدي الـ Projects Component ديالك من بعد */}
                <h2 className="text-center py-20">My Projects</h2>
              </div>
            </>
          } />
          
          {/* About */}
          <Route path="/about" element={<About />} />
      

          
      
          <Route path="/Home" element = {<Hero />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        
          <Route path="/project" element={<Projects darkMode={darkMode} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;