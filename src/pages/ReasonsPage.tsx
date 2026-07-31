import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const reasons = [
  { emoji: '😊', text: 'Your smile can light up the darkest room' },
  { emoji: '💪', text: 'You are the strongest person I know' },
  { emoji: '😂', text: 'You make me laugh until my stomach hurts' },
  { emoji: '🥰', text: 'The way you look at me makes me feel invincible' },
  { emoji: '🤗', text: 'Your hugs feel like home' },
  { emoji: '🧠', text: 'Your intelligence amazes me every day' },
  { emoji: '💃', text: 'The way you dance when nobody is watching' },
  { emoji: '👩‍🍳', text: 'You put love into everything you do' },
  { emoji: '🌸', text: 'Your kindness makes the world a better place' },
  { emoji: '🎵', text: 'The way you sing along to our favorite songs' },
  { emoji: '👀', text: 'Your beautiful eyes that tell a thousand stories' },
  { emoji: '🤝', text: 'You always support my crazy dreams' },
  { emoji: '💋', text: 'Every kiss from you feels like the first' },
  { emoji: '🌈', text: 'You see beauty in everything and everyone' },
  { emoji: '🎨', text: 'Your creativity inspires me' },
  { emoji: '🦸‍♀️', text: 'You are my personal superhero' },
  { emoji: '📚', text: 'The way you get lost in a good book' },
  { emoji: '🌻', text: 'You make ordinary moments extraordinary' },
  { emoji: '💕', text: 'Your love makes me a better person' },
  { emoji: '🌙', text: 'Late night talks with you are my favorite' },
  { emoji: '☕', text: 'Morning coffee hits different when you are beside me' },
  { emoji: '🎭', text: 'Your silly faces always cheer me up' },
  { emoji: '🏠', text: 'You make anywhere feel like home' },
  { emoji: '🌟', text: 'You shine brighter than any star' },
  { emoji: '🎶', text: 'Your voice is my favorite melody' },
  { emoji: '🤲', text: 'The gentle way you hold my hand' },
  { emoji: '💌', text: 'You remember the little things that matter' },
  { emoji: '🧸', text: 'Your playful spirit keeps life exciting' },
  { emoji: '🌺', text: 'You make me believe in fairy tales' },
  { emoji: '🔥', text: 'Your passion for life is contagious' },
  { emoji: '🦋', text: 'You give me butterflies every single day' },
  { emoji: '🏋️‍♀️', text: 'Your determination inspires me to be better' },
  { emoji: '🎯', text: 'You always know exactly what to say' },
  { emoji: '🌊', text: 'Your calm presence soothes my anxious soul' },
  { emoji: '💎', text: 'You are a rare gem in this world' },
  { emoji: '🎪', text: 'Life is never boring with you around' },
  { emoji: '🦄', text: 'You are one in a billion — truly unique' },
  { emoji: '🎁', text: 'Every day with you is a gift' },
  { emoji: '🏆', text: 'Being loved by you is my greatest achievement' },
  { emoji: '📸', text: 'You make every photo beautiful' },
  { emoji: '🍕', text: 'Sharing pizza with you is pure happiness' },
  { emoji: '🌄', text: 'You give me something to look forward to every day' },
  { emoji: '👑', text: 'You deserve to be treated like the queen you are' },
  { emoji: '🎀', text: 'Your attention to detail never ceases to amaze me' },
  { emoji: '🌿', text: 'You help me grow into a better human' },
  { emoji: '💫', text: 'Your dreams become my dreams' },
  { emoji: '🎹', text: 'You bring harmony into my chaotic life' },
  { emoji: '🌹', text: 'Your beauty — inside and out — takes my breath away' },
  { emoji: '🧭', text: 'You are my compass when I feel lost' },
  { emoji: '♾️', text: 'I could list infinite reasons and still not cover them all' },
];

const ReasonsPage: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [likedReasons, setLikedReasons] = useState<Set<number>>(new Set());

  const displayedReasons = showAll ? reasons : reasons.slice(0, 20);

  const toggleLike = (index: number) => {
    const newLiked = new Set(likedReasons);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedReasons(newLiked);
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">💝</span>
          </motion.div>
          <h1 className="font-dancing text-5xl md:text-7xl font-bold text-shimmer mb-4">
            50 Reasons I Love You
          </h1>
          <p className="font-playfair text-xl text-gray-500 italic max-w-2xl mx-auto">
            Because you deserve to know exactly why you are the most amazing person in my universe ✨
          </p>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="mt-8 inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg shadow-rose-100/30 border border-rose-100"
          >
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <span className="text-gray-600 font-medium">
              <span className="text-rose-500 font-bold text-2xl">{reasons.length}</span> reasons and counting...
            </span>
            <Sparkles className="w-5 h-5 text-amber-400" />
          </motion.div>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {displayedReasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: (i % 6) * 0.08, duration: 0.5 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md shadow-rose-100/30 border border-rose-100/50 hover:shadow-lg hover:shadow-rose-200/40 transition-all duration-300 overflow-hidden">
                {/* Number badge */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                  <span className="text-rose-400 text-xs font-bold">#{i + 1}</span>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="flex items-start gap-4">
                  <motion.span
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    className="text-3xl flex-shrink-0 mt-0.5"
                  >
                    {reason.emoji}
                  </motion.span>
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium leading-relaxed">
                      {reason.text}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleLike(i)}
                    className="flex-shrink-0 mt-1"
                  >
                    <motion.div
                      whileTap={{ scale: 1.5 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors ${
                          likedReasons.has(i)
                            ? 'text-rose-500 fill-rose-500'
                            : 'text-gray-300 hover:text-rose-300'
                        }`}
                      />
                    </motion.div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Less Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 transition-shadow"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-5 h-5" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5" />
                Show All {reasons.length} Reasons
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-10 md:p-14 text-white shadow-2xl shadow-rose-300/30 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-white/10 text-6xl"
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    left: `${i * 14}%`,
                    top: `${(i * 20) % 80}%`,
                  }}
                >
                  ♥
                </motion.div>
              ))}
            </div>
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-5xl mb-6"
              >
                💗
              </motion.div>
              <h3 className="font-dancing text-3xl md:text-4xl mb-4">
                The truth is...
              </h3>
              <p className="font-playfair text-lg md:text-xl italic max-w-xl mx-auto leading-relaxed">
                I could write a million reasons and it still wouldn't be enough. 
                You are the reason my heart beats, the reason I smile, 
                and the reason I believe in love. <strong>I love everything about you.</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReasonsPage;
