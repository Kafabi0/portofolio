import ProfileCard from '../ProfileCard'
  



export default function Profile() {
  return (
    <div className="p-10">
<ProfileCard
  name="Javi A. Torres"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/path/to/avatar.jpg"
  showUserInfo={true}
  enableTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>
      <h1 className="text-3xl font-bold">Halaman Profil</h1>
      <p>Selamat datang di halaman profil.</p>
    </div>
  );
}
