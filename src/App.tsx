import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import TrustBar from './components/TrustBar/TrustBar';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import PaymentResult from './components/PaymentResult/PaymentResult';

function App() {
  return (
    <>
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
      <PaymentResult />
    </>
  );
}

export default App;
