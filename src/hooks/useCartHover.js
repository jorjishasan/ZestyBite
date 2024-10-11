import { useState, useRef } from "react";

const useCartHover = () => {
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [cartPosition, setCartPosition] = useState({ top: 0, left: 0 });
  const timeoutRef = useRef(null);

  const handleCartHover = (event, isEntering) => {
    if (isEntering) {
      clearTimeout(timeoutRef.current);
      const rect = event.currentTarget.getBoundingClientRect();
      setCartPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
      setIsCartHovered(true);
    } else {
      timeoutRef.current = setTimeout(() => {
        setIsCartHovered(false);
      }, 300);
    }
  };

  const clearCartHoverTimeout = () => clearTimeout(timeoutRef.current);

  return {
    isCartHovered,
    cartPosition,
    handleCartHover,
    clearCartHoverTimeout,
  };
};

export default useCartHover;
