import BlurText from "../BlurText";
import SplashCursor from "../splashcursor";
import Aurora from "../Aurora";
import RotatingText from '../RotatingText';
import FadeContent from '../FadeContent';
import Lanyard from "../Lanyard";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center text-white bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 ">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Lanyard di kanan atas */}


      {/* Splash Cursor */}
      <SplashCursor />

      {/* Konten Tengah */}
      <div className="flex flex-col items-center justify-center px-6 py-10 text-center ">
      <div className="absolute top-4 right-4 hidden sm:block">
        <Lanyard />
      </div>
        <BlurText
          text={"Halo, Saya "}
          className="text-5xl font-bold mb-2"
          delay={150}
          animateBy="chars"
          direction="top"
        />
        <BlurText
          text={"Kafabi Aulia Fasyah"}
          className="text-4xl font-bold mb-4 text-blue-400"
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
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className="flex items-center gap-2">
            <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
              Jago dalam
            </span>
            <RotatingText
              texts={['Berpikir', 'Bermain', 'Belajar', 'Semua']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-blue-400 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
