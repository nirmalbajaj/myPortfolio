import BlurText from "./BlurText";
const Example = () => {
  return (
    <div>
      <CutoutTextLoader
        height="100vh"
        background="white"
        imgUrl="/public/loader.gif"
      />
    </div>
  );
};

const CutoutTextLoader = ({
  height = "100vh", // Changed from 450px to 100vh
  background = "",
  imgUrl = "/loader.gif",
}) => {
  return (
    <div className="w-full min-h-screen" style={{ height }}> {/* Added w-full and min-h-screen */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10"
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none flex items-center justify-center" // Added flex and center alignment
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(2rem, 5vw, 4rem)", // Adjusted font size to be more responsive
        }}
      >
        <BlurText
                  text="Welcome to Nirmal Bajaj's Portfolio"
                  delay={250}
                  animateBy="words"
                  direction="top"
                  className="text-6xl font-bold text-gray-50 font-space"
          />
      </span>
    </div>
  );
};

export default CutoutTextLoader;