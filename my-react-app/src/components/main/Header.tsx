import { useEffect, useState } from "react";
import "./header.css";
import logo from '../../assets/image.png';

const LANGS = [
  { code: "en", label: "EN" },
  { code: "si", label: "SI" },
  { code: "ta", label: "TA" },
];

function Header() {
  return (
    <div className="parent-header">
      <div className="left">
        <div className="image1"><img src={logo} alt="Logo"/></div>
        <span className="brand">New Emarald Frinter</span>
      </div>
      <div className="right">
        <LanguageSelector />
      </div>
    </div>
  );
}

function LanguageSelector() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <label className="lang-select">
      <span className="sr-only">Language</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        aria-label="Language"
      >
        {LANGS.map(l => (
          <option key={l.code} value={l.code}>{l.label}</option>
        ))}
      </select>
    </label>
  );
}

export default Header;