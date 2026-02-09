import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';
import qrImg from '../../assets/qrCausaChat.png';

const Hero = () => {
  const { t } = useTranslation();

  const phoneNumber = "51912391253";
  const message = "¡Hola Causa! Quiero aprender a hablar español como un local.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        {t('hero.title')}
      </h1>
      <p className={styles.subtitle}>
        {t('hero.subtitle')}
      </p>

      <div className={styles.actionContainer}>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.ctaLink}
        >
          <button className={styles.cta}>
            {t('hero.cta')}
          </button>
        </a>

        <div className={styles.qrContainer}>
          <img src={qrImg} alt="Scan QR" className={styles.qrImage} />
          <span className={styles.qrText}>{t('hero.scan_me')}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;