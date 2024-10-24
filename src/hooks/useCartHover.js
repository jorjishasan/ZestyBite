import { useState, useEffect, useRef } from "react";

const useCartHover = () => {
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [cartPosition, setCartPosition] = useState({ top: 0, left: 0 });
  const cartHoverRef = useRef(null);
  const [cartHoverWidth, setCartHoverWidth] = useState(0);

  useEffect(() => {
    if (cartHoverRef.current) {
      setCartHoverWidth(cartHoverRef.current.offsetWidth);
    }
  }, [isCartHovered]);

  const calculateCartHoverPosition = () => {
    const windowWidth = window.innerWidth;
    let left = cartPosition.left;

    if (left + cartHoverWidth > windowWidth) {
      left = windowWidth - cartHoverWidth - 10;
    }

    left = Math.max(10, left);

    return {
      top: `${cartPosition.top}px`,
      left: `${left}px`,
    };
  };

  const handleCartHover = (event, isHovered) => {
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      setCartPosition({ top: rect.bottom, left: rect.left });
    }
    setIsCartHovered(isHovered);
  };

  const clearCartHoverTimeout = () => {
    setIsCartHovered(true);
  };

  return {
    isCartHovered,
    cartPosition: calculateCartHoverPosition(),
    handleCartHover,
    clearCartHoverTimeout,
    cartHoverRef,
  };
};

export default useCartHover;
