import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './footerStyle.css';

export function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer id="contato" className="footer-section">
      <div className="footer-content">
        
        <p className="footer-text">
          &copy; {currentYear} <span className="accent">Rafael Pontes</span>. Todos os direitos reservados.
        </p>

        <div className="footer-socials">
          <a href="pontesr1234@outlook.com" className="social-link" title="Me envie um e-mail">
            <FaEnvelope />
          </a>
          <a href="https://github.com/Rafa-Pontes" target="_blank" rel="noreferrer" className="social-link" title="Meu GitHub">
            <FaGithub />
          </a>
          <a href="www.linkedin.com/in/rafael-p-ontes123" target="_blank" rel="noreferrer" className="social-link" title="Meu LinkedIn">
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
}