import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Gift, Sparkles, Music, Stars } from 'lucide-react';

const GiftPage: React.FC = () => {
  const [isUnwrapped, setIsUnwrapped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentCoupon, setCurrentCoupon] = useState<number | null>(null);

  const handleUnwrap = () => {
    setIsUnwrapped(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  const coupons = [
    { emoji: '🤗', title: 'Free Hug Coupon', desc: 'Redeemable anytime, anywhere, no expiry', color: 'from-rose-400 to-pink-500' },
    { emoji: '💋', title: 'Unlimited Kisses', desc: 'As many as you want, whenever you want', color: 'from-pink-400 to-purple-500' },
    { emoji: '🍕', title: 'Pizza Date Night', desc: 'Your choice of toppings, my treat!', color: 'from-amber-400 to-orange-500' },
    { emoji: '🎬', title: 'Movie Marathon', desc: 'You pick all the movies, I bring the snacks', color: 'from-blue-400 to-indigo-500' },
    { emoji: '💆‍♀️', title: 'Spa Day at Home', desc: 'Complete with massage, face mask & relaxation', color: 'from-teal-400 to-emerald-500' },
    { emoji: '🌹', title: 'Surprise Flower Delivery', desc: 'Beautiful flowers when you least expect them', color: 'from-red-400 to-rose-500' },
    { emoji: '📝', title: 'Love Letter on Demand', desc: 'A handwritten love letter whenever you need one', color: 'from-purple-400 to-pink-500' },
    { emoji: '🌅', title: 'Sunset Watch Together', desc: 'A perfect evening watching the sky with you', color: 'from-orange-400 to-rose-500' },
    { emoji: '🎵', title: 'Serenade Session', desc: 'I will sing your favorite song (effort counts!)', color: 'from-violet-400 to-purple-500' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-amber-50 via-rose-50 to-pink-50 relative overflow-hidden">
      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: -20,
                  rotate: 0,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
                  rotate: Math.random() * 720,
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  delay: Math.random() * 0.5,
                  ease: 'easeOut',
                }}
                className="absolute text-2xl"
              >
                {['🎉', '✨', '💕', '🌟', '🎊', '💖', '⭐', '🎀', '💝', '🌸'][i % 10]}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-200/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">🎁</span>
          </motion.div>
          <h1 className="font-dancing text-5xl md:text-7xl font-bold text-shimmer mb-4">
            Your Special Gift
          </h1>
          <p className="font-playfair text-xl text-gray-500 italic max-w-2xl mx-auto">
            I wrapped this with love, tied it with care, and filled it with all my heart 🎀
          </p>
        </motion.div>

        {/* Gift Box */}
        <div className="flex justify-center mb-16">
          <AnimatePresence mode="wait">
            {!isUnwrapped ? (
              <motion.div
                key="wrapped"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5, rotate: 20 }}
                transition={{ duration: 0.6 }}
                onClick={handleUnwrap}
                className="cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {/* Gift box */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                    {/* Box body */}
                    <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl shadow-2xl shadow-rose-300/50">
                      {/* Vertical ribbon */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-8 bg-gradient-to-b from-amber-300 to-amber-400 shadow-inner" />
                      {/* Horizontal ribbon */}
                      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-8 bg-gradient-to-r from-amber-300 to-amber-400 shadow-inner" />
                    </div>

                    {/* Lid */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute top-0 w-full h-1/4"
                    >
                      <div className="w-[110%] h-full -ml-[5%] bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl shadow-lg" />
                      {/* Bow */}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl">
                        🎀
                      </div>
                    </motion.div>

                    {/* Sparkle effects */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                        style={{
                          top: `${[10, 30, 50, 70, 20][i]}%`,
                          left: `${[80, 15, 90, 5, 60][i]}%`,
                        }}
                      >
                        <Sparkles className="w-5 h-5 text-amber-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA text */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="mt-8 text-center"
                  >
                    <p className="font-dancing text-2xl text-rose-500 mb-2">
                      Tap to unwrap your gift! 🎉
                    </p>
                    <p className="text-gray-400 text-sm">Go ahead... it's all for you!</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="unwrapped"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-4xl"
              >
                {/* Revealed gift header */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="text-center mb-12"
                >
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-rose-200 mb-6">
                    <Gift className="w-6 h-6" />
                    <span className="font-bold text-lg">Your Love Coupons!</span>
                    <span className="text-2xl">💕</span>
                  </div>
                  <p className="text-gray-500 text-lg max-w-xl mx-auto">
                    Each coupon is a promise of love, redeemable anytime your heart desires.
                    No expiry date — because love never expires! 💖
                  </p>
                </motion.div>

                {/* Coupons Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {coupons.map((coupon, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30, rotate: Math.random() * 6 - 3 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                      whileHover={{ scale: 1.05, rotate: 2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentCoupon(currentCoupon === i ? null : i)}
                      className="cursor-pointer"
                    >
                      <div className={`relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-dashed ${
                        currentCoupon === i ? 'border-rose-400' : 'border-rose-200'
                      } transition-colors`}>
                        {/* Top colored strip */}
                        <div className={`h-2 bg-gradient-to-r ${coupon.color}`} />

                        {/* Coupon notch */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-gradient-to-br from-amber-50 to-rose-50 rounded-r-full" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-gradient-to-br from-amber-50 to-rose-50 rounded-l-full" />

                        <div className="p-6 text-center">
                          <motion.div
                            animate={currentCoupon === i ? { rotate: [0, 10, -10, 0] } : {}}
                            transition={{ repeat: Infinity, duration: 0.5 }}
                            className="text-5xl mb-3"
                          >
                            {coupon.emoji}
                          </motion.div>
                          <h3 className="font-playfair font-bold text-gray-800 text-lg mb-1">
                            {coupon.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">{coupon.desc}</p>

                          {/* Stamp */}
                          <div className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${coupon.color} shadow-sm`}>
                            <Heart className="w-3 h-3 fill-white" />
                            VALID FOREVER
                          </div>
                        </div>

                        {/* Bottom colored strip */}
                        <div className={`h-2 bg-gradient-to-r ${coupon.color}`} />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Special voucher */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                  className="mt-12"
                >
                  <div className="relative bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-3xl p-1 shadow-2xl shadow-rose-300/30">
                    <div className="bg-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-5">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <span
                            key={i}
                            className="absolute text-4xl"
                            style={{
                              left: `${(i * 20) % 100}%`,
                              top: `${Math.floor(i / 5) * 25}%`,
                            }}
                          >
                            ♥
                          </span>
                        ))}
                      </div>

                      <div className="relative z-10">
                        <div className="flex justify-center gap-2 mb-4">
                          <Stars className="w-6 h-6 text-amber-400" />
                          <Music className="w-6 h-6 text-rose-400" />
                          <Stars className="w-6 h-6 text-amber-400" />
                        </div>

                        <h3 className="font-dancing text-3xl md:text-5xl text-rose-500 mb-3">
                          The Ultimate Gift
                        </h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mb-6" />

                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="text-7xl mb-6"
                        >
                          💖
                        </motion.div>

                        <p className="font-playfair text-xl md:text-2xl text-gray-700 italic max-w-lg mx-auto leading-relaxed mb-6">
                          "My whole heart, for my whole life. That is the real gift — 
                          my love, my devotion, and my promise to always be yours."
                        </p>

                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-pink-50 px-6 py-3 rounded-full border border-rose-200">
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                          </motion.div>
                          <span className="text-rose-500 font-medium">
                            No return policy — I am yours forever! 😘
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Fun facts section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 mb-8"
        >
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Fun Love Facts 💕
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stat: '∞', label: 'Times I think of you daily', emoji: '💭' },
              { stat: '24/7', label: 'Hours I love you', emoji: '⏰' },
              { stat: '100%', label: 'Devoted to you', emoji: '💯' },
              { stat: 'Forever', label: 'How long I will love you', emoji: '♾️' },
            ].map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md shadow-rose-100/30 border border-rose-100"
              >
                <span className="text-3xl mb-2 block">{fact.emoji}</span>
                <p className="font-dancing text-3xl text-rose-500 font-bold mb-1">{fact.stat}</p>
                <p className="text-gray-500 text-sm">{fact.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GiftPage;
