import Masonry from "../Masonry";
import foto1 from '../assets/foto1.jpeg';
import foto2 from '../assets/foto2.jpeg';
import foto4 from '../assets/foto4.jpeg';
import foto6 from '../assets/foto6.jpeg';

const items = [
  {
    id: "1",
    img: foto1,
    height: 400,
  },
  {
    id: "2",
    img: foto2,
    height: 250,
  },
  {
    id: "3",
    img: foto4,
    height: 600,
  },
  {
    id: "4",
    img: foto6,
    height: 700,
  },
];
export default function Galerry() {
  return (
    <div className="flex flex-col justify-start pt-4 pb-4">
      <Masonry
        items={items}
        ease="sine.out"
        duration={1.6}
        stagger={0.06}
        animateFrom="random"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </div>
  );
}
