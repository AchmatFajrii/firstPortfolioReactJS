
const Profile = () => {
  return (
    <div className="profile">
      <div className="name flex">
        <img src="/personal-logo.svg" alt="" />
        <span className="ml-2 text-white">Fajri</span>
        <span className="ml-4 text-gray">fajri@gmail.com</span>
      </div>
      <div className="job text-white mt-2">
        <p>Web designer and front-end developer</p>
      </div>
    </div>
  );
};



export default Profile;
