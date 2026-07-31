import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Heart, Delete, Unlock, ShieldCheck } from 'lucide-react';

const CORRECT_PIN = '1431';

interface LockScreenProps {
  onUnlock: () => void;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleKeyPress = useCallback(
    (digit: string) => {
      if (success) return;
      setError(false);

      if (digit === 'delete') {
        setPin((prev) => prev.slice(0, -1));
        return;
      }

      if (pin.length >= 4) return;

      const newPin = pin + digit;
      setPin(newPin);

      // Auto-check when 4 digits entered
      if (newPin.length === 4) {
        if (newPin === CORRECT_PIN) {
          setSuccess(true);
          setTimeout(() => {
            onUnlock();
          }, 1800);
        } else {
          setError(true);
          setShake(true);
          setTimeout(() => {
            setPin('');
            setShake(false);
          }, 600);
          setTimeout(() => setError(false), 2000);
        }
      }
    },
    [pin, success, onUnlock]
  );

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') {
        handleKeyPress(e.key);
      } else if (e.key === 'Backspace') {
        handleKeyPress('delete');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'delete'];

  return (
    <AnimatePresence>
      {!success ? (
        <motion.div
          key="lockscreen"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-rose-950 to-gray-900">
            {/* Floating particles */}
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 2,
                  height: Math.random() * 4 + 2,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `rgba(${[244, 63, 94][0]}, ${[244, 63, 94][1]}, ${[244, 63, 94][2]}, ${Math.random() * 0.3 + 0.1})`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 5 + 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
            {/* Subtle glow spots */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-6">
            {/* Time & Date */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1 className="text-white text-6xl md:text-7xl font-light tracking-tight mb-1">
                {formatTime(currentTime)}
              </h1>
              <p className="text-rose-300/80 text-lg font-light">
                {formatDate(currentTime)}
              </p>
            </motion.div>

            {/* Lock Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-4"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(244,63,94,0.2)',
                    '0 0 40px rgba(244,63,94,0.4)',
                    '0 0 20px rgba(244,63,94,0.2)',
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-rose-500/30 flex items-center justify-center backdrop-blur-sm"
              >
                <Lock className="w-7 h-7 text-rose-400" />
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-6"
            >
              <h2 className="font-dancing text-2xl text-rose-300 mb-1">
                💕 Enter PIN to Unlock 💕
              </h2>
              <p className="text-rose-400/50 text-xs">
                This is for someone very special
              </p>
            </motion.div>

            {/* PIN Dots */}
            <motion.div
              animate={shake ? { x: [-15, 15, -10, 10, -5, 5, 0] } : {}}
              transition={{ duration: 0.5 }}
              className="flex gap-5 mb-8"
            >
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      error
                        ? 'border-red-400 bg-red-400'
                        : pin.length > i
                        ? 'border-rose-400 bg-rose-400 shadow-lg shadow-rose-500/40'
                        : 'border-rose-500/30 bg-transparent'
                    }`}
                  />
                  {/* Fill animation ripple */}
                  <AnimatePresence>
                    {pin.length > i && !error && (
                      <motion.div
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 rounded-full bg-rose-400/30"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-sm mb-4 font-medium flex items-center gap-2"
                >
                  <span>😔</span> Wrong PIN, try again
                </motion.p>
              )}
            </AnimatePresence>

            {/* Number Pad */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 w-full max-w-[280px]"
            >
              {buttons.map((btn, i) => {
                if (btn === '') {
                  return <div key={i} />;
                }

                return (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.9, backgroundColor: 'rgba(244,63,94,0.2)' }}
                    onClick={() => handleKeyPress(btn)}
                    className={`relative w-[72px] h-[72px] mx-auto rounded-full flex items-center justify-center transition-all duration-200 ${
                      btn === 'delete'
                        ? 'bg-transparent hover:bg-white/5'
                        : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-rose-500/30'
                    }`}
                  >
                    {btn === 'delete' ? (
                      <Delete className="w-6 h-6 text-rose-400/70" />
                    ) : (
                      <span className="text-white text-2xl font-light">{btn}</span>
                    )}
                    {/* Tap ripple */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-rose-400/10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileTap={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-8 flex items-center gap-2"
            >
              <Heart className="w-3 h-3 text-rose-500/40 fill-rose-500/40" />
              <p className="text-rose-400/30 text-xs text-center">
                Only you know the key to my heart
              </p>
              <Heart className="w-3 h-3 text-rose-500/40 fill-rose-500/40" />
            </motion.div>
          </div>
        </motion.div>
      ) : (
        /* Success / Unlock Animation */
        <motion.div
          key="unlocking"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-gray-900 via-rose-950 to-gray-900"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 0.8, 40] }}
            transition={{ duration: 1.6, times: [0, 0.3, 0.5, 1], ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -20, 0] }}
              transition={{ duration: 0.4 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-rose-500/50 mb-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <Unlock className="w-9 h-9 text-white" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
              transition={{ duration: 1.2, times: [0, 0.2, 0.6, 1] }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-lg">Unlocked!</span>
              </div>
              <p className="font-dancing text-rose-300 text-xl">Welcome, my love 💕</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LockScreen;
