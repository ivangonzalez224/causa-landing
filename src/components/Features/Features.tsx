import { useTranslation } from 'react-i18next';
import { Mic, Zap, MessageSquareQuote } from 'lucide-react';
import styles from './Features.module.css';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Mic size={30} color="#2C4A70" />,
      title: t('features.f1_title'),
      desc: t('features.f1_desc'),
    },
    {
      icon: <Zap size={30} color="#2C4A70" />,
      title: t('features.f2_title'),
      desc: t('features.f2_desc'),
    },
    {
      icon: <MessageSquareQuote size={30} color="#2C4A70" />,
      title: t('features.f3_title'),
      desc: t('features.f3_desc'),
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{t('features.title')}</h2>
      </div>
      <div className={styles.grid}>
        {features.map((f, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconContainer}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;