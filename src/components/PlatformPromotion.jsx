import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";

const PlatformPromotion = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-[#F0F0F5] py-10 md:gap-8">
      <h2 className="text-md font-semibold sm:text-3xl">
        For better experience, Download the app now.
      </h2>
      <div className="flex gap-2">
        <img className="h-[32px] md:h-[64px]" src={appstore} alt="appstore" />
        <img className="h-[32px] md:h-[64px]" src={playstore} alt="playstore" />
      </div>
    </div>
  );
};

export default PlatformPromotion;
