import "./HeaderImage.css";

// IMAGES
import imageMobile from "../Images/illustration-woman-online-mobile.svg";

const HeaderImage = () => {
  return (
    <div className="header-wrapper">
      <div className="header-image-mobile">
        <img src={imageMobile} alt="" />
      </div>
      <div className="header-shaddow-mobile"></div>
    </div>
  );
};

export default HeaderImage;
