import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";

const PlatformPromotion = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 bg-[#F0F0F5] py-10">
      <h2 className="text-3xl font-semibold">
        For better experience, Download the app now.
      </h2>
      <div className="flex gap-2">
        <img className="h-[64px]" src={appstore} alt="appstore" />
        <img className="h-[64px]" src={playstore} alt="playstore" />
      </div>
    </div>
  );
};

export default PlatformPromotion;
