import GradientBlinds from "@/components/GradientBlinds";
import TextType from "@/components/TextType";

export const HeroSection = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <GradientBlinds
        gradientColors={["#05ce91", "#05ce81"]}
        angle={20}
        noise={0.3}
        blindCount={12}
        blindMinWidth={50}
        spotlightRadius={0.5}
        spotlightSoftness={1}
        spotlightOpacity={1}
        mouseDampening={0.15}
        distortAmount={20}
        shineDirection="left"
        mixBlendMode="lighten"
      />
      <div className="absolute top-[40%] text-center left-[26%] group text-6xl font-bold ">
        <TextType
          text={[
            "Hey there, I'm Himanshu",
            "A Full Stack Developer",
            "Exploring AI & Machine Learning",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
      </div>
    </div>
  );
};
