import { Instagram } from "lucide-react";
import { SiGmail } from "react-icons/si";
import Carousel from '../Carousel';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-semibold mb-10 text-center">Kontak</h2>

      <div className="flex justify-center items-center" style={{ height: '300px' }}>
        <Carousel
          baseWidth={400}
          autoplay
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
        >
          {/* Slide Email (Gmail) */}
          <div className="flex flex-col items-center justify-center h-[250px] w-full rounded-lg bg-black shadow-md text-white">
            <p className="text-lg mb-2 font-medium">Hubungi saya melalui email:</p>
            <a
              href="mailto:zerxybusiness@gmail.com"
              className="flex items-center gap-2 text-red-500 text-xl font-semibold hover:underline"
            >
              <SiGmail size={28} />
              zerxybusiness@gmail.com
            </a>
          </div>

          {/* Slide Instagram */}
          <div className="flex flex-col items-center justify-center h-[250px] w-full rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 text-white shadow-md">
            <p className="text-lg mb-3 font-medium">Ikuti saya di Instagram</p>
            <a
              href="https://instagram.com/z312xy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xl hover:underline"
            >
              <Instagram size={28} />
              @z312xy
            </a>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
