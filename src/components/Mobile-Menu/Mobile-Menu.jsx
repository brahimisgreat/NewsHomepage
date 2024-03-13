import "./mobile.css";
import close from "../../assets/images/icon-menu-close.svg";

export default function MobileMenu({setTogglemenu, toggleMenu}) {
  return (
    <div id="mobile-container">
      <div className="overlay" />
      <div className="menu-container">
        <div className="close-container">
          <img src={close} id="close" onClick={() => setTogglemenu(!toggleMenu)} />
        </div>
        <div className="box">
          <a>Home</a>
          <a>New</a>
          <a>Popular</a>
          <a>Trending</a>
          <a>Categories</a>
        </div>
      </div>
    </div>
  );
}
