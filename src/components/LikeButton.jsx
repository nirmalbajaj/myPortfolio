import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const savedLike = localStorage.getItem('portfolioLiked') === 'true';
    const savedCount = parseInt(localStorage.getItem('portfolioLikeCount') || '0');
    setIsLiked(savedLike);
    setLikeCount(savedCount);
  }, []);

  const handleLike = () => {
    const newLikeStatus = !isLiked;
    const newCount = newLikeStatus ? likeCount + 1 : likeCount - 1;
    
    setIsLiked(newLikeStatus);
    setLikeCount(newCount);
    
    localStorage.setItem('portfolioLiked', newLikeStatus.toString());
    localStorage.setItem('portfolioLikeCount', newCount.toString());
  };

  return (
    <motion.button
      onClick={handleLike}
      className="flex items-center space-x-2 bg-gradient-to-r from-amber-500/30 to-amber-700/30 px-4 py-2 rounded-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`w-6 h-6 ${isLiked ? 'fill-red-500' : 'fill-none stroke-2 stroke-amber-200'}`}
        animate={{ scale: isLiked ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.2 }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </motion.svg>
      <span className="font-space text-amber-200 text-sm">
        Drop a heart if you like it
      </span>
    </motion.button>
  );
};

export default LikeButton;
