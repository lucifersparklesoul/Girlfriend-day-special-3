import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Mail, MailOpen, Feather } from 'lucide-react';

const LoveLetterPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setShowLetter(true), 800);
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {['🌸', '💌', '✨', '🦋', '💗', '🌹'][i % 6]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="inline-block mb-4"
          >
            <Feather className="w-12 h-12 text-rose-400 mx-auto" />
          </motion.div>
          <h1 className="font-dancing text-5xl md:text-7xl font-bold text-shimmer mb-4">
            A Letter From My Heart
          </h1>
          <p className="font-playfair text-xl text-gray-500 italic">
            Every word written with love, sealed with a kiss 💋
          </p>
        </motion.div>

        {/* Envelope / Letter */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="envelope"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                transition={{ duration: 0.6 }}
                onClick={handleOpen}
                className="cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-16 md:p-24 shadow-2xl shadow-rose-200/50 border-2 border-rose-200 pulse-glow"
                >
                  {/* Envelope flap */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-rose-200 to-pink-200 rounded-t-2xl" style={{ clipPath: 'polygon(0 0, 50% 60%, 100% 0)' }} />

                  <div className="relative z-10 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <Mail className="w-20 h-20 text-rose-500 mx-auto mb-6" />
                    </motion.div>
                    <p className="font-dancing text-2xl md:text-3xl text-rose-600 mb-2">
                      You have a love letter! 💕
                    </p>
                    <p className="text-rose-400 text-lg">
                      Click to open ✉️
                    </p>
                  </div>

                  {/* Seal */}
                  <div className="absolute bottom-6 right-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-rose-600 flex items-center justify-center shadow-lg">
                      <Heart className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="letter"
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="w-full max-w-3xl"
              >
                {/* Letter content */}
                <div className="relative bg-white rounded-2xl shadow-2xl shadow-rose-200/30 overflow-hidden">
                  {/* Top decorative border */}
                  <div className="h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400" />

                  {/* Letter paper texture */}
                  <div className="bg-[repeating-linear-gradient(transparent,transparent_31px,#fce7f3_31px,#fce7f3_32px)] p-8 md:p-12">
                    {/* Opened envelope icon */}
                    <div className="flex justify-center mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring' }}
                      >
                        <MailOpen className="w-12 h-12 text-rose-400" />
                      </motion.div>
                    </div>

                    {showLetter && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                      >
                        <div className="font-playfair text-gray-700 leading-relaxed space-y-6 text-base md:text-lg">
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="font-dancing text-3xl text-rose-500"
                          >
                            My Dearest Love,
                          </motion.p>

                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            On this special Girlfriend Day, I want to take a moment to tell you something 
                            I don't say nearly enough — <span className="text-rose-500 font-semibold">you are the most incredible person I have ever known.</span>
                          </motion.p>

                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            From the moment you walked into my life, everything changed. The colors 
                            became brighter, the music became sweeter, and my heart found its reason to beat. 
                            You didn't just enter my world — <em>you became my world.</em>
                          </motion.p>

                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                          >
                            I love the way your eyes light up when you laugh. I love how your hand fits 
                            perfectly in mine, like it was designed that way. I love your kindness, your 
                            strength, your beautiful soul that makes everyone around you feel special.
                          </motion.p>

                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 }}
                          >
                            Every day with you is a gift I never want to take for granted. You are my 
                            first thought in the morning and my last wish at night. You are the reason 
                            I believe in forever, and the proof that <span className="text-rose-500 font-semibold">fairy tales can come true.</span>
                          </motion.p>

                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                          >
                            Thank you for loving me, for choosing me, and for being you. I promise to 
                            spend every day making you feel as special as you make me feel. You are not 
                            just my girlfriend — you are my best friend, my confidante, my home, and 
                            my heart's greatest treasure.
                          </motion.p>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                            className="pt-4"
                          >
                            <p className="font-dancing text-2xl text-rose-500 mb-2">
                              Forever and always yours,
                            </p>
                            <p className="font-dancing text-3xl text-rose-600 font-bold">
                              With All My Love 💕
                            </p>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.8, type: 'spring' }}
                            className="flex justify-center pt-6"
                          >
                            <div className="flex items-center gap-2 bg-gradient-to-r from-rose-50 to-pink-50 px-6 py-3 rounded-full border border-rose-200">
                              <motion.div
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                              >
                                <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                              </motion.div>
                              <span className="text-rose-500 font-medium">Sealed with a kiss</span>
                              <span className="text-lg">💋</span>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Bottom decorative border */}
                  <div className="h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400" />
                </div>

                {/* Back to envelope button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-center mt-8"
                >
                  <button
                    onClick={() => { setIsOpen(false); setShowLetter(false); }}
                    className="text-rose-400 hover:text-rose-600 font-medium flex items-center gap-2 mx-auto transition-colors"
                  >
                    <Mail className="w-4 h-4" /> Close letter
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Love Quotes Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-6"
        >
          {[
            { quote: "You are my sun, my moon, and all my stars.", author: "E.E. Cummings", emoji: "🌙" },
            { quote: "In all the world, there is no heart for me like yours.", author: "Maya Angelou", emoji: "💝" },
            { quote: "I look at you and see the rest of my life in front of my eyes.", author: "Unknown", emoji: "👀" },
            { quote: "You are the finest, loveliest, tenderest person I have ever known.", author: "F. Scott Fitzgerald", emoji: "🌹" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-rose-100/30 border border-rose-100 love-card"
            >
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <p className="font-playfair italic text-gray-700 text-lg mb-3">"{item.quote}"</p>
              <p className="text-rose-500 font-medium text-sm">— {item.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LoveLetterPage;
