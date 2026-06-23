import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>CAUSA</div>
        <nav className={styles.links}>
          {/* 3. Reemplazar textos estáticos por t('...') */}
          <a href="#features">{t('footer.features')}</a>
          <a href="#pricing">{t('footer.pricing')}</a>
          <a href="https://wa.me/TU_NUMERO" target="_blank" rel="noopener noreferrer">
            {t('footer.whatsapp')}
          </a>
        </nav>
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} Causa AI. {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;
