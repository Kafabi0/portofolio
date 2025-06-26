// import CircularGallery from '../CircularGallery';
import ChromaGrid from '../ChromaGrid';
import ShinyText from '../ShinyText';

import foto1 from '../assets/foto1.jpeg';
import foto2 from '../assets/foto2.jpeg';
import foto6 from '../assets/foto6.jpeg';
import foto4 from '../assets/foto4.jpeg';
// import foto5 from '../assets/foto5.jpeg';
  

const items = [
  {
    image: foto1,
    title: "Zerxy O Brien",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "#"
  },
  {
    image: foto2,
    title: "Zerxy O Brien",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#"
  },
  {
    image: foto4,
    title: "Zerxy O Brien",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(200deg, #F59E0B, #000)",
    url: "#"
  },
  {
    image: foto6,
    title: "Zerxy O Brien",
    borderColor: "#EF4444",
    gradient: "linear-gradient(210deg, #EF4444, #000)",
    url: "#"
  },
  // {
  //   image: foto5,
  //   title: "Foto 5",
  //   subtitle: "AI Engineer",
  //   handle: "@foto5",
  //   borderColor: "#8B5CF6",
  //   gradient: "linear-gradient(220deg, #8B5CF6, #000)",
  //   url: "#"
  // }
];



// const items = [
//   { image: foto1, text: "Foto 1" },
//   { image: foto2, text: "Foto 2" },
//   { image: foto3, text: "Foto 3" },
//   { image: foto4, text: "Foto 4" },
//   { image: foto5, text: "Foto 5" },
// ];

export default function About() {
  return (
<section
  id="about"
  className="py-20 px-4 sm:px-6 md:px-10 bg-white text-gray-800 text-center relative overflow-visible"
>
  <ShinyText text="Tentang Saya" disabled={false} speed={4} className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 z-10 relative' />

  {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 z-10 relative">
    Tentang Saya
  </h2> */}
  <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl z-10 relative mb-10">
    Saya adalah pengembang web yang menyukai desain bersih, animasi halus, dan pengalaman pengguna yang intuitif.
  </p>

  <div className="relative min-h-[100vh] md:min-h-[120vh] overflow-visible">
    <ChromaGrid 
      items={items}
      radius={300}
      damping={0.45}
      fadeOut={0.6}
      ease="power3.out"
    />
  </div>
</section>

  );
}
