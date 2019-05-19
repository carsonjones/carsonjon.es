import { useState, useEffect } from 'react';

function useWindowWidth() {
  if (typeof window === 'undefined') return null;
  
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
}

export default useWindowWidth;
