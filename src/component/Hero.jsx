import BlurText from "../BlurText";
import SplashCursor from "../splashcursor";
import Aurora from "../Aurora";


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Background Aurora */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      {/* Splash Cursor */}
      <SplashCursor />

      {/* Konten Tengah */}
      <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
        <BlurText
          text={"Halo, Saya "}
          className="text-5xl font-bold mb-2"
          delay={150}
          animateBy="chars"
          direction="top"
        />
        <BlurText
          text={"Kafabi Aulia Fasyah"}
          className="text-3xl font-bold mb-4 text-blue-400"
          delay={300}
          animateBy="chars"
          direction="top"
        />
        <BlurText
          text={"Saya adalah Web Developer Mobil"}
          className="text-xl max-w-xl mb-4"
          delay={450}
          animateBy="words"
          direction="top"
        />
      </div>
    </section>
  );
}
