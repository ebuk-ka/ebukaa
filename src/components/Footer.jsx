import "./Footer.css";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-logo">
            ebuka<span>.</span>
          </div>

         <div className="footer-links">
          <a href="#" className="footer-link">
            <ArrowUp size={18} />
            <span>Back to top</span>
          </a>
        </div>

        </div>
      </footer>
    </>
  );
}
