import "./header.css";

function Header() {
  return (
    <div className="parent-header">
      <div className="left">
        <span className="brand">New Emarald Frinter</span>
      </div>
      <div className="right">
        <div className="lang">
          <span>EN</span>
        </div>
      </div>
    </div>
  );
}

export default Header;