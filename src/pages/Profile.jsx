import ProfileCard from '../ProfileCard';
import foto1 from '../assets/foto1.jpeg';

export default function Profile() {
  return (
    <div className="p-10 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-2">Halaman Profil</h1>
      <p className="text-center mb-6 text-gray-600">Selamat datang di halaman profil.</p>
      <div className="flex justify-center items-center">
        <ProfileCard
          name="Kafabi Aulia Fasyah"
          title="Software Engineer"
          handle="z312xy"
          avatarUrl={foto1}
          showUserInfo={true}
          enableTilt={true}
        />
      </div>
    </div>
  );
}
