import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';
import { Globe } from 'lucide-react';

const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'pt', label: 'PT' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/logoCausa.png" alt="Logo Causa" className={styles.logoImage} />
      </div>
      <nav className={styles.nav}>
        <Globe size={18} color="#2C4A70" />
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`${styles.langButton} ${i18n.language === lang.code ? styles.activeLang : ''}`}
          >
            {lang.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
