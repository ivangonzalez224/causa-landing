import { useEffect, useState } from 'react';
import styles from './PaymentResult.module.css';

const WA_NUMBER = "51912391253";

type ResultState = "success" | "pending" | "cancelled" | null;

const PaymentResult = () => {
  const [result, setResult] = useState<ResultState>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const subscriptionId = params.get('subscription_id');
    const baToken = params.get('ba_token'); // presente cuando el usuario cancela en PayPal

    if (baToken && !subscriptionId) {
      // El usuario llegó aquí desde el cancel_url (cerró PayPal sin pagar)
      setResult("cancelled");
      setVisible(true);
      return;
    }

    if (subscriptionId) {
      // PayPal redirigió con un subscription_id — el pago fue enviado
      // El webhook confirmará en segundos, así que mostramos "pending" brevemente
      setResult("pending");
      setVisible(true);

      // Limpiamos la URL para que no reaparezca si el usuario recarga
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  if (!visible || !result) return null;

  const waMessage = encodeURIComponent(
    "Hola, acabo de completar mi suscripción a Causa. ¿Ya está activa?"
  );
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  const content = {
    success: {
      icon: "🎉",
      title: "¡Suscripción confirmada!",
      body: "Tu acceso ya está activo. Vuelve al chat de WhatsApp para seguir practicando español.",
      cta: "Continuar en WhatsApp",
      ctaUrl: waUrl,
      className: styles.success,
    },
    pending: {
      icon: "⏳",
      title: "Procesando tu suscripción",
      body: "Tu pago fue recibido y se está confirmando. En unos segundos recibirás un mensaje en WhatsApp cuando todo esté listo.",
      cta: "Ir a WhatsApp",
      ctaUrl: waUrl,
      className: styles.pending,
    },
    cancelled: {
      icon: "↩️",
      title: "No completaste el pago",
      body: "Saliste antes de finalizar. Cuando quieras suscribirte, elige tu plan aquí o continúa la conversación en WhatsApp.",
      cta: "Volver al chat",
      ctaUrl: waUrl,
      className: styles.cancelled,
    },
  }[result];

  return (
    <div className={styles.overlay} onClick={() => setVisible(false)}>
      <div
        className={`${styles.card} ${content.className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.close}
          onClick={() => setVisible(false)}
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div className={styles.icon}>{content.icon}</div>
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.body}>{content.body}</p>

        <a
          href={content.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          {content.cta}
        </a>

        {result === "cancelled" && (
          <button
            className={styles.secondary}
            onClick={() => {
              setVisible(false);
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver planes
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentResult;