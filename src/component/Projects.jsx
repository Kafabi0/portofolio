import GradientText from "../GradientText";
import Stepper, { Step } from '../Stepper';

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

      {/* Wrapper agar Stepper berada di tengah */}
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log(step);
            }}
            onFinalStepCompleted={() => console.log("All steps completed!")}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            <Step>
              <h2>Berikut Adalah Proyek yang Sudah Saya Kerjakan</h2>
              <p>Klik Next untuk Melihat</p>
            </Step>
            <Step>
              <h2>Proyek 1</h2>
              <p className="text-sm text-gray-600">
                Membuat Aplikasi Jual Beli Ikan pada Toko Family Aquarium yang ada di Indramayu berbasis website
              </p>
            </Step>
            <Step>
              <h2>Proyek 2</h2>
              <p className="text-sm text-gray-600">
                Membuat Aplikasi PetShop dengan Layanan Jual Beli dan Grooming berbasis Website dengan IoT untuk mencari Produk pada Rak agar mudah ditemukan
              </p>
            </Step>
            <Step>
              <h2>Proyek 3</h2>
              <p className="text-sm text-gray-600">
                Melanjutkan Projek 2 dengan Mengubahnya dari Website Menjadi Mobile
              </p>
            </Step>
            <Step>
              <h2>Selesai</h2>
              <p>Itulah Beberapa Proyek yang Sudah Saya Kerjakan</p>
            </Step>
          </Stepper>
        </div>
      </div>
    </section>
  );
}
