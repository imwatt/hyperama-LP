import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Gameplay from './components/Gameplay';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
      <Background />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Gameplay />
      </main>
      <Footer />
    </div>
  )
}

export default App;
