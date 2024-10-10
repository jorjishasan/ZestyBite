/* eslint-disable react/prop-types */
const ScrollButtons = ({
  onScrollLeft,
  onScrollRight,
  canScrollLeft,
  canScrollRight,
}) => (
  <span className="flex justify-center gap-2">
    <button
      onClick={onScrollLeft}
      disabled={!canScrollLeft}
      className={`h-10 w-10 rounded-full text-center ${
        canScrollLeft ? "bg-slate-200" : "bg-slate-100"
      } p-2`}
    >
      ←
    </button>
    <button
      onClick={onScrollRight}
      disabled={!canScrollRight}
      className={`h-10 w-10 rounded-full text-center ${
        canScrollRight ? "bg-slate-200" : "bg-slate-100"
      } p-2`}
    >
      →
    </button>
  </span>
);

export default ScrollButtons;
