import "./Style.css";

function ProfileCard({ name, description, instagram, instagram_url, imgProfile }) {
  return (
    <div className="profilecard">
      <div className="div-imgProfile">
        <img className="imgProfile" src={imgProfile} alt="" />
      </div>
      <div className="div-profile-text">
        <p>{name}{description}</p>
        {instagram_url &&
        <div className="div-instagram">
          <img className="social-media-icon" src="https://img.icons8.com/windows/32/000000/instagram-new.png" alt=""/><p><a target="_blank" rel="noreferrer" href={instagram_url}>{instagram}</a></p>
        </div>
        }
      </div>

    </div>
  );
}

export default ProfileCard;
