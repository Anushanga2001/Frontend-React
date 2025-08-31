import "./header.css";
import logo from '../../assets/image.png';

function Header() {
  return (
    <div className="parent-header">
      <div className="left">
        <div className="image1"><img src={logo} alt="Logo"/></div>
        <span className="brand">New Emarald Frinter</span>
      </div>
    </div>
  );
}

export default Header;