import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed top-5 right-4 z-[9999] bg-amber-100 dark:bg-amber-900 px-6 py-3 rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-2">
            <span className="text-amber-800 dark:text-amber-200 font-space text-sm">
              🚧 I'm still working on the responsive nature of website
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVisible(false)}
              className="ml-2 text-amber-800 dark:text-amber-200 hover:opacity-75 focus:outline-none"
            >
              ✕
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
