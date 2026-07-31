import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Sparkles, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cards = [
    { path: '/love-letter', emoji: '💌', title: 'Love Letter', desc: 'Words from my heart to yours', color: 'from-rose-400 to-pink-500' },
    { path: '/memories', emoji: '📸', title: 'Our Memories', desc: 'Beautiful moments we share', color: 'from-pink-400 to-purple-500' },
    { path: '/reasons', emoji: '💝', title: 'Reasons I Love You', desc: '50 reasons you are amazing', color: 'from-purple-400 to-rose-500' },
    { path: '/promises', emoji: '🤞', title: 'My Promises', desc: 'Forever and always', color: 'from-rose-500 to-amber-400' },
    { path: '/gift', emoji: '🎁', title: 'Special Gift', desc: 'Something just for you', color: 'from-amber-400 to-rose-500' },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Animated background gradient */}
      <div
        className="fixed inset-0 z-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244,63,94,0.08), transparent 40%)`,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 gradient-animate" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-rose-200"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.5, 1, 0.5],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 30 + 10}px`,
              }}
            >
              {['✨', '💕', '🌸', '💗', '⭐', '🦋'][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block mb-6"
            >
              <span className="text-6xl md:text-8xl">💕</span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-dancing text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <span className="text-shimmer">Happy Girlfriend Day</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-6"
          >
            <p className="font-playfair text-xl md:text-3xl text-gray-600 italic">
              August 1st — A day to celebrate
            </p>
            <p className="font-playfair text-2xl md:text-4xl text-rose-500 font-semibold mt-2">
              The Most Beautiful Person in My Life
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Every love story is beautiful, but ours is my favorite.
            Today is all about you — the one who makes every day brighter,
            every moment special, and every heartbeat meaningful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/love-letter">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(244,63,94,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg shadow-rose-200 pulse-glow"
              >
                <Heart className="w-5 h-5 fill-white" />
                Read My Love Letter
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/gift">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-rose-300 text-rose-500 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-rose-50 transition-colors"
              >
                <Sparkles className="w-5 h-5" />
                Open Your Gift
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 bounce-arrow"
          >
            <div className="flex flex-col items-center gap-2 text-rose-400">
              <span className="text-sm font-medium">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rose-50 to-transparent" />
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-4xl mb-4 block">🌹</span>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              You Are My <span className="text-rose-500">Everything</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              In a world full of temporary things, you are a perpetual feeling
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <img
                src="https://images.pexels.com/photos/14839193/pexels-photo-14839193.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Romantic sunset couple"
                className="relative rounded-2xl w-full h-80 md:h-96 object-cover shadow-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="font-dancing text-xl text-rose-600">
                  "You are my today and all of my tomorrows" 💕
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: '💖', title: 'Unconditional Love', text: 'My love for you knows no boundaries, no conditions, and no end.' },
                { icon: '🌟', title: 'My Guiding Star', text: 'You light up even my darkest days with your beautiful smile.' },
                { icon: '🦋', title: 'My Safe Place', text: 'In your arms, I found my home, my peace, and my happiness.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-5 love-card cursor-default"
                >
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-playfair font-bold text-gray-800 text-lg">{item.title}</h3>
                    <p className="text-gray-500 mt-1">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12071172/pexels-photo-12071172.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt="couple seaside"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 to-pink-900/70 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Star className="w-10 h-10 text-amber-300 mx-auto mb-6 fill-amber-300" />
            <blockquote className="font-playfair text-2xl md:text-4xl lg:text-5xl text-white italic leading-relaxed mb-8">
              "I fell in love the way you fall asleep: slowly, and then all at once."
            </blockquote>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto rounded-full mb-4" />
            <p className="text-rose-200 font-medium text-lg">— John Green</p>
          </motion.div>
        </div>
      </section>

      {/* Explore Cards Section */}
      <section className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-4xl mb-4 block">✨</span>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Explore More <span className="text-rose-500">Love</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Each page holds something special, made with love just for you
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={card.path}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link to={card.path}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-rose-100/50 p-8 love-card group cursor-pointer border border-rose-100"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`} />
                    <span className="text-5xl mb-4 block">{card.emoji}</span>
                    <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                    <p className="text-gray-500 mb-4">{card.desc}</p>
                    <div className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                      Explore <ArrowRight className="w-4 h-4 text-rose-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer love note */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-5xl mb-6"
          >
            💗
          </motion.div>
          <h3 className="font-dancing text-3xl md:text-4xl mb-4">
            Made with all my love, just for you
          </h3>
          <p className="text-rose-100 text-lg">
            Happy Girlfriend Day, my love. You deserve the world and more. 🌍✨
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
