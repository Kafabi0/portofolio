import GradientText from "../GradientText";
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-200 text-center">

      <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="text-3xl font-semibold mb-8"
>
  Proyek Saya
</GradientText>

      {/* <h2 className="text-3xl font-semibold mb-8">Proyek Saya</h2> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Project 1</h3>
          <p className="text-sm text-gray-600">Membuat Aplikasi Jual Beli Ikan pada Toko Family Aquarium yang ada di indramayu berbasis website</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Project 2</h3>
          <p className="text-sm text-gray-600">Membuat Aplikasi PetShop dengan Layanan Jual Beli dan Grooming  berbasis Website dengan IoT untuk mencari Produk pada Rak agar mudah ditemukan</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Project 3</h3>
          <p className="text-sm text-gray-600">Melanjutkan Projek 2 dengan Mengubahnya dari Website Menjadi Mobile</p>
        </div>
      </div>
    </section>
  );
}
