import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, X } from 'lucide-react';
import styles from './Pricing.module.css';

const WA_NUMBER = "51912391253";

const Pricing = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [waUrl, setWaUrl] = useState(`https://wa.me/${WA_NUMBER}`);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const phone = params.get('phone');

    const message = phone
      ? `Hola, quiero suscribirme a Causa. Mi número es ${phone}.`
      : `Hola, quiero suscribirme a Causa.`;

    setWaUrl(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`);
  }, []);

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
          <button className={styles.btn} onClick={() => setShowModal(true)}>
            {t('pricing.cta')}
          </button>
        </div>

        {/* Plan Mensual */}
        <div className={styles.card}>
          <span className={styles.planName}>{t('pricing.monthly.name')}</span>
          <div className={styles.price}>
            {t('pricing.monthly.price')}<span>{t('pricing.monthly.period')}</span>
          </div>
          <ul className={styles.features}>
            <li><Check size={18} color="#D9A05B" /> {t('pricing.monthly.feat1')}</li>
            <li><Check size={18} color="#D9A05B" /> {t('pricing.monthly.feat2')}</li>
            <li><Check size={18} color="#D9A05B" /> {t('pricing.monthly.feat3')}</li>
          </ul>
          <button className={styles.btn} onClick={() => setShowModal(true)}>
            {t('pricing.cta')}
          </button>
        </div>

        {/* Plan Anual */}
        <div className={`${styles.card} ${styles.cardFeatured}`}>
          <div className={styles.badge}>{t('pricing.annual.tag')}</div>
          <span className={styles.planName}>{t('pricing.annual.name')}</span>
          <div className={styles.price}>
            {t('pricing.annual.price')}<span>{t('pricing.annual.period')}</span>
          </div>
          <p className={styles.noCardText}>{t('pricing.no_card')}</p>
          <ul className={styles.features}>
            <li><Check size={18} color="#D9A05B" /> {t('pricing.annual.feat1')}</li>
            <li><Check size={18} color="#D9A05B" /> {t('pricing.annual.feat2')}</li>
            <li><Check size={18} color="#D9A05B" /> {t('pricing.annual.feat3')}</li>
          </ul>
          <button className={`${styles.btn} ${styles.btnFeatured}`} onClick={() => setShowModal(true)}>
            {t('pricing.cta')}
          </button>
        </div>

      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setShowModal(false)}>
              <X size={20} />
            </button>
            <div className={styles.modalIcon}>💬</div>
            <h3 className={styles.modalTitle}>{t('pricing.modal.title')}</h3>
            <p className={styles.modalText}>{t('pricing.modal.body')}</p>
            
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalBtn}
            >
              {t('pricing.modal.cta')}
            </a>
          </div>
        </div>
      )}

    </section>
  );
};

export default Pricing;