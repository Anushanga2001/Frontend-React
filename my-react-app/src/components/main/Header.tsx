import { useState } from "react";
import { Globe, Menu } from "lucide-react";
import "./header.css";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <div className="parent-header">
      <div className="left">
        <span className="brand">New Emarald Frinter</span>
      </div>
      <div className="right">
        <div className="lang">
          <Globe size={18} />
          <span>EN</span>
        </div>
        <Menu size={22} className="menu" />
      </div>
    </div>
  );
}

export default Header;