import React from 'react';

function Footer() {
  return (
    <footer className="py-6 text-center bg-white dark:bg-[#121212] text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <p>&copy; {new Date().getFullYear()} Chaimae Said. All rights reserved.</p>
    </footer>
  );
}

export default Footer;