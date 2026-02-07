import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        {t('hero.title')}
      </h1>
      <p className={styles.subtitle}>
        {t('hero.subtitle')}
      </p>
      <button className={styles.cta}>
        {t('hero.cta')}
      </button>
    </section>
  );
};

export default Hero;