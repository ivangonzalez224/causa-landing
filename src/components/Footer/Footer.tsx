import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>CAUSA</div>
        <nav className={styles.links}>
          <a href="#features">Funcionalidades</a>
          <a href="#pricing">Precios</a>
          <a href="#">WhatsApp</a>
        </nav>
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} Causa AI. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;