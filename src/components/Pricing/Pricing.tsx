import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import styles from './Pricing.module.css';

const PLAN_ID_WEEKLY  = "P-9PL297959R394170CNIZLQSY";
const PLAN_ID_MONTHLY = "P-55S73789T3599825LNIZLWEI";
const PLAN_ID_ANNUAL  = "P-2M475301NS101305MNIZLW7A";

const PayPalSubscribeButton = ({
  planId,
  featured = false,
}: {
  planId: string;
  featured?: boolean;
}) => {
  const [{ isPending }] = usePayPalScriptReducer();

  if (isPending) {
    return (
      <div className={`${styles.btn} ${featured ? styles.btnFeatured : ''} ${styles.btnLoading}`}>
        Loading...
      </div>
    );
  }

  return (
    <PayPalButtons
      style={{
        shape: "pill",
        color: featured ? "gold" : "blue",
        layout: "vertical",
        label: "subscribe",
      }}
      createSubscription={(_data, actions) => {
        return actions.subscription.create({ plan_id: planId });
      }}
      onApprove={(data) => {
        const subscriptionId = data.subscriptionID;
        const waMessage = encodeURIComponent(
          `Hi! I just subscribed to Causa. My subscription ID is: ${subscriptionId}`
        );
        window.open(`https://wa.me/51912391253?text=${waMessage}`, '_blank');
        alert(`¡Suscripción activada! ID: ${subscriptionId}`);
      }}
      onError={(err) => {
        console.error("PayPal error:", err);
        alert("There was an error processing your payment. Please try again.");
      }}
    />
  );
};

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <section id="pricing" className={styles.section}>
      <h2 className={styles.title}>{t('pricing.title')}</h2>

      <div className={styles.container}>

        {/* Plan Semanal — $9/week */}
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
          <PayPalSubscribeButton planId={PLAN_ID_WEEKLY} />
        </div>

        {/* Plan Mensual — $15/month */}
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
          <PayPalSubscribeButton planId={PLAN_ID_MONTHLY} />
        </div>

        {/* Plan Anual — $99/year (Destacado) */}
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
          <PayPalSubscribeButton planId={PLAN_ID_ANNUAL} featured />
        </div>

      </div>
    </section>
  );
};

export default Pricing;