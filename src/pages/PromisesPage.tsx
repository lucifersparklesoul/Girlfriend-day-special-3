import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const promisesList = [
  {
    emoji: '💕',
    iconEmoji: '❤️',
    title: 'To Love You Unconditionally',
    description: 'No matter what life throws at us, my love for you will never waver. Through every storm and every sunshine, I will love you with all my heart.',
    color: 'from-rose-400 to-pink-500',
  },
  {
    emoji: '🛡️',
    iconEmoji: '🛡️',
    title: 'To Always Protect You',
    description: 'I promise to be your shield, your safe haven. I will always stand between you and anything that tries to dim your light.',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    emoji: '⭐',
    iconEmoji: '⭐',
    title: 'To Make You Feel Special Every Day',
    description: 'You deserve to feel like the most important person in the world because that is exactly what you are to me. Every single day.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    emoji: '☀️',
    iconEmoji: '☀️',
    title: 'To Be Your Sunshine',
    description: 'On your darkest days, I promise to be the light that guides you. I will always try to bring warmth and joy into your life.',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    emoji: '🌙',
    iconEmoji: '🌙',
    title: 'To Never Stop Choosing You',
    description: 'Every morning I wake up, I choose you. Every night before I sleep, I choose you. This is my forever promise — to always choose you.',
    color: 'from-purple-400 to-indigo-500',
  },
  {
    emoji: '☕',
    iconEmoji: '☕',
    title: 'To Cherish the Little Moments',
    description: 'The morning coffees, the quiet evenings, the random giggles — I promise to treasure every small moment with you as if it is the greatest gift.',
    color: 'from-amber-500 to-rose-500',
  },
  {
    emoji: '🌂',
    iconEmoji: '🌂',
    title: 'To Stand By You Through Everything',
    description: 'Rain or shine, good times or bad, I will be right there beside you. You will never have to face anything alone.',
    color: 'from-teal-400 to-cyan-500',
  },
  {
    emoji: '♾️',
    iconEmoji: '♾️',
    title: 'To Love You Forever',
    description: 'My love for you has no expiry date. It is infinite, eternal, and everlasting. Today, tomorrow, and for all the days that follow.',
    color: 'from-rose-500 to-purple-500',
  },
];

const PromisesPage: React.FC = () => {
  const [activePromise, setActivePromise] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 via-rose-50 to-pink-50 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">🤞</span>
          </motion.div>
          <h1 className="font-dancing text-5xl md:text-7xl font-bold text-shimmer mb-4">
            My Promises to You
          </h1>
          <p className="font-playfair text-xl text-gray-500 italic max-w-2xl mx-auto">
            These are not just words — they are the vows of my heart, 
            written in the ink of my soul, sealed with my eternal love 💍
          </p>
        </motion.div>

        {/* Pinky promise illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="text-8xl"
            >
              🤝
            </motion.div>
            <motion.div
              animate={{ scale: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-2 -right-2 text-2xl"
            >
              ✨
            </motion.div>
          </div>
        </motion.div>

        {/* Promises Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {promisesList.map((promise, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActivePromise(i)}
              onMouseLeave={() => setActivePromise(null)}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 overflow-hidden transition-all duration-500 ${
                  activePromise === i ? 'shadow-xl shadow-rose-200/40' : 'shadow-rose-100/30'
                }`}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${promise.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Number */}
                <div className="absolute top-4 right-4 font-dancing text-4xl text-rose-100 font-bold group-hover:text-rose-200 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${promise.color} flex items-center justify-center text-white mb-5 shadow-lg text-3xl`}
                >
                  {promise.iconEmoji}
                </motion.div>

                {/* Content */}
                <div className="flex items-start gap-2 mb-3">
                  <h3 className="font-playfair text-xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                    {promise.title}
                  </h3>
                  <span className="text-xl flex-shrink-0">{promise.emoji}</span>
                </div>

                <p className="text-gray-500 leading-relaxed">
                  {promise.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className={`mt-6 h-1 rounded-full bg-gradient-to-r ${promise.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Ring / Seal Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              {/* Decorative ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-rose-100 rounded-full opacity-20 slow-rotate" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-pink-100 rounded-full opacity-10 slow-rotate" style={{ animationDirection: 'reverse' }} />

              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="text-6xl mb-6"
                >
                  💍
                </motion.div>
                <h3 className="font-playfair text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                  A Sealed Promise
                </h3>
                <p className="font-playfair text-gray-500 text-lg max-w-xl mx-auto leading-relaxed italic">
                  "I promise to love you in all your forms, moods, and expressions. 
                  To laugh with you in good times, hold you in bad times, and grow 
                  with you for a lifetime. This is my solemn promise."
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                  </motion.div>
                  <span className="font-dancing text-2xl text-rose-500">
                    With all my love, forever yours
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                  >
                    <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PromisesPage;
