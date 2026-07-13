import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // زدنا Navigate
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      
      <main>
        <Routes>
          {/* الروابط الرئيسية */}
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} /> {/* هادي كتحل مشكلة /Home */}
          
          {/* الصفحات الأخرى */}
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          
          {/* أي رابط غير معروف كيرجعك للرئيسية */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;