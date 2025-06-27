import ProfileCard from '../ProfileCard'
  



export default function Profile() {
  return (
    <div className="p-10">
            <h1 className="text-3xl font-bold">Halaman Profil</h1>
      <p>Selamat datang di halaman profil.</p>
      <div className='flex justify-center items-center'>
<ProfileCard
  name="Kafabi Aulia Fasyah"
  title="Software Engineer"
  handle="z312xy"
  contactText="Contact Me"
  avatarUrl="../assets/foto1.jpeg"
  showUserInfo={true}
  enableTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>
</div>
    </div>
  );
}
