import { ShieldCheck, Zap, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './TrustBar.module.css';

const TrustBar = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.trustBar}>
      <div className={styles.container}>
        <div className={styles.item}>
          <ShieldCheck size={24} className={styles.icon} />
          <span>{t('trust.trial')}</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.item}>
          <Zap size={24} className={styles.icon} />
          <span>{t('trust.no_card')}</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.item}>
          <MessageSquare size={24} className={styles.icon} />
          <span>{t('trust.cancel')}</span>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
