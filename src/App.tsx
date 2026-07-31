import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import FloatingHearts from './components/FloatingHearts';
import HomePage from './pages/HomePage';
import LoveLetterPage from './pages/LoveLetterPage';
import MemoriesPage from './pages/MemoriesPage';
import ReasonsPage from './pages/ReasonsPage';
import PromisesPage from './pages/PromisesPage';
import GiftPage from './pages/GiftPage';
import LockScreen from './pages/LockScreen';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/love-letter" element={<LoveLetterPage />} />
        <Route path="/memories" element={<MemoriesPage />} />
        <Route path="/reasons" element={<ReasonsPage />} />
        <Route path="/promises" element={<PromisesPage />} />
        <Route path="/gift" element={<GiftPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  return (
    <>
      {/* Lock Screen Overlay */}
      <AnimatePresence>
        {!isUnlocked && <LockScreen onUnlock={handleUnlock} />}
      </AnimatePresence>

      {/* Main App — renders behind lock screen, revealed on unlock */}
      <Router>
        <div className="min-h-screen bg-rose-50 relative">
          <FloatingHearts />
          <Navigation />
          <ScrollToTop />
          <main>
            <AnimatedRoutes />
          </main>

          {/* Global Footer */}
          <footer className="bg-gray-900 text-white py-8 relative z-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-rose-400 heartbeat text-xl">❤️</span>
                <span className="font-dancing text-xl text-rose-300">
                  Happy Girlfriend Day
                </span>
                <span className="text-rose-400 heartbeat text-xl">❤️</span>
              </div>
              <p className="text-gray-400 text-sm">
                Made with 💕 love, for the most amazing girlfriend in the world
              </p>
              <p className="text-gray-500 text-xs mt-2">
                August 1st • Celebrating You Today and Every Day ✨
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </>
  );
};

export default App;
