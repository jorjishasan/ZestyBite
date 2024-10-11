/* eslint-disable react/prop-types */
const CartIcon = ({ count, width = "24", height = "24" }) => {
  const bgColor = count > 0 ? "#48BB78" : "#FFBD69"; // Green when items in cart, original color otherwise
  const textColor = "#FFFFFF";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.05113 0L1.26501 3.73016L0 22.8H24L22.6896 3.73016L20.9042 0L3.05113 0Z"
        fill={bgColor}
      />
      <text
        x="12"
        y="13"
        fontFamily="Arial"
        fontSize="14"
        fontWeight="bold"
        fill={textColor}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {count}
      </text>
    </svg>
  );
};

export default CartIcon;
