import { Heart, ArrowUpRight } from "lucide-react";

const CSS = `
.footer {
  background: #2D1F1F;
  padding: 28px 20px 40px;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.footer-logo {
  font-family: "Syne", sans-serif;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.05em;
  color: #f5ece6;
}

.footer-logo span {
  color: #C46A3C;
}

.footer-text {
  display: flex;
  align-items: center;
  gap: 8px;

  color: #bca9a1;
  font-size: 14px;
  line-height: 1.6;
}

.footer-text svg {
  color: #C46A3C;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer-link {
  width: 42px;
  height: 42px;
  border-radius: 50%;

  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.07);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #f5ece6;
  text-decoration: none;

  transition: .3s ease;
}

.footer-link:hover {
  background: #C46A3C;
  color: #111;
  transform: translateY(-4px);
}

@media (max-width: 700px) {

  .footer-container {
    flex-direction: column;
    text-align: center;
  }

  .footer-text {
    justify-content: center;
    flex-wrap: wrap;
  }
}
`;

export default function Footer() {
  return (
    <>
      <style>{CSS}</style>

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-logo">
            ebuka<span>.</span>
          </div>

          <div className="footer-links">
             <a href="#">
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>
      </footer>
    </>
  );
}