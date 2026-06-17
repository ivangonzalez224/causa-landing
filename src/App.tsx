import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import TrustBar from './components/TrustBar/TrustBar';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <PayPalScriptProvider options={{
      clientId: "AZnfrldtsaTND5dif3fjpK-nJg94hXZPwUL5cIvRpqspUcVf4ZseeX_5iFU-9JiI8N08D1cAUjNlbDvb",
      vault: true,
      intent: "subscription",
    }}>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <section id="features">
          <Features />
        </section>
        <Pricing />
      </main>
      <Footer />
    </PayPalScriptProvider>
  );
}

export default App;