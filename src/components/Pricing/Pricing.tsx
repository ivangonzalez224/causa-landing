import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import styles from './Pricing.module.css';

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <section id="pricing" className={styles.section}>
      <h2 className={styles.title}>{t('pricing.title')}</h2>
      
      <div className={styles.container}>
        {/* Plan Semanal */}
        <div className={styles.card}>
          <span className={styles.planName}>{t('pricing.weekly.name')}</span>
          <div className={styles.price}>
            {t('pricing.weekly.price')}<span>{t('pricing.weekly.period')}</span>
          </div>
          <ul className={styles.features}>
            <li><Check size={18} color="#D9A05B" /> {t('pricing.weekly.feat1')}</li>
            <li><Check size={18} color="#D9A05B" /> {t('pricing.weekly.feat2')}</li>
            <li><Check size={18} color="#D9A05B" /> {t('pricing.weekly.feat3')}</li>
          </ul>
          <button className={styles.btn}>{t('pricing.cta')}</button>
        </div>

        {/* Plan Mensual (Destacado) */}
        <div className={`${styles.card} ${styles.cardFeatured}`}>
          <div className={styles.badge}>{t('pricing.monthly.tag')}</div>
          <span className={styles.planName}>{t('pricing.monthly.name')}</span>
          <div className={styles.price}>
            {t('pricing.monthly.price')}<span>{t('pricing.monthly.period')}</span>
          </div>
          <ul className={styles.features}>
            <li><Check size={18} color="#D9A05B" /> {t('pricing.monthly.feat1')}</li>
            <li><Check size={18} color="#D9A05B" /> {t('pricing.monthly.feat2')}</li>
            <li><Check size={18} color="#D9A05B" /> {t('pricing.monthly.feat3')}</li>
          </ul>
          <button className={`${styles.btn} ${styles.btnFeatured}`}>
            {t('pricing.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;