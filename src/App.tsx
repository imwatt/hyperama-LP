import { lazy, Suspense } from 'react';

// Critical - load immediately (above the fold)
import Header from './components/Header';
import Hero from './components/Hero';

// Below the fold - lazy load
const SwipeDemo = lazy(() => import('./components/SwipeDemo'));
const HyparVsZikar = lazy(() => import('./components/HyparVsZikar'));
const SecondaryFeatures = lazy(() => import('./components/SecondaryFeatures'));
const Gameplay = lazy(() => import('./components/Gameplay'));
const Footer = lazy(() => import('./components/Footer'));
const Background = lazy(() => import('./components/Background'));

// Loading fallback with minimal height to prevent layout shift
const SectionFallback = () => (
  <div className="min-h-screen bg-black" />
);

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <Header />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <SwipeDemo />
          <HyparVsZikar />
          <SecondaryFeatures />
          <Gameplay />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App;
