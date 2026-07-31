import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Heart, MapPin, Calendar } from 'lucide-react';

interface Memory {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
  emoji: string;
}

const memories: Memory[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/14839193/pexels-photo-14839193.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Our First Sunset Together',
    description: 'That magical evening when we watched the sunset paint the sky in shades of gold and rose. Your hand in mine, the world felt perfect.',
    date: 'Forever in my heart',
    location: 'Wherever you are',
    emoji: '🌅',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/6410240/pexels-photo-6410240.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'The Kiss That Changed Everything',
    description: 'Time stopped, the world disappeared, and it was just us. That kiss sealed our love story forever.',
    date: 'A timeless moment',
    location: 'In our own universe',
    emoji: '💋',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/27254929/pexels-photo-27254929.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Walking Hand in Hand',
    description: 'Every step with you is an adventure. Every path becomes beautiful when I walk it with you by my side.',
    date: 'Every single day',
    location: 'Down every road together',
    emoji: '🚶‍♂️🚶‍♀️',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/9497059/pexels-photo-9497059.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Sunshine & Happiness',
    description: 'You are my sunshine on cloudy days. Walking together under the warm sun, laughing at everything and nothing.',
    date: 'Sun-kissed days',
    location: 'Under our favorite sky',
    emoji: '☀️',
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/10941877/pexels-photo-10941877.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Park Adventures',
    description: 'Those lazy afternoons at the park, sharing secrets, dreams, and ice cream. Simple moments that mean everything.',
    date: 'Lazy afternoons',
    location: 'Our favorite park',
    emoji: '🌳',
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/12130177/pexels-photo-12130177.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Romantic Dinner Nights',
    description: 'Candlelight, wine, your smile across the table — every dinner with you feels like the most special occasion.',
    date: 'Every special night',
    location: 'Our romantic spot',
    emoji: '🕯️',
  },
];

const MemoriesPage: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="inline-block mb-4"
          >
            <Camera className="w-14 h-14 text-rose-400 mx-auto" />
          </motion.div>
          <h1 className="font-dancing text-5xl md:text-7xl font-bold text-shimmer mb-4">
            Our Beautiful Memories
          </h1>
          <p className="font-playfair text-xl text-gray-500 italic max-w-2xl mx-auto">
            Every moment with you is a masterpiece painted by love, 
            a treasure I hold close to my heart forever 📸
          </p>
        </motion.div>

        {/* Timeline bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          className="h-1 bg-gradient-to-r from-rose-300 via-pink-400 to-purple-400 rounded-full max-w-md mx-auto mb-16"
        />

        {/* Memories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {memories.map((memory, i) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: 0 }}
              onClick={() => setSelectedMemory(memory)}
              className="cursor-pointer group"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-rose-100/50 border border-rose-100 love-card">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Emoji badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shadow-md text-2xl">
                    {memory.emoji}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg flex items-center gap-2"
                    >
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                      <span className="text-rose-600 font-medium text-sm">View Memory</span>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-playfair font-bold text-lg text-gray-800 mb-2 group-hover:text-rose-500 transition-colors">
                    {memory.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                    {memory.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {memory.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {memory.location}
                    </span>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="h-1 bg-gradient-to-r from-rose-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Memory count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg shadow-rose-100/30 border border-rose-100">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            </motion.div>
            <span className="text-gray-600 font-medium">
              And <span className="text-rose-500 font-bold">millions</span> more memories to create together...
            </span>
            <span className="text-xl">∞</span>
          </div>
        </motion.div>
      </div>

      {/* Memory Detail Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-rose-50 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedMemory.image}
                  alt={selectedMemory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl">{selectedMemory.emoji}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {selectedMemory.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {selectedMemory.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4 text-rose-400" /> {selectedMemory.date}
                  </span>
                  <span className="flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4 text-rose-400" /> {selectedMemory.location}
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-2 text-rose-500">
                  <Heart className="w-5 h-5 fill-rose-500" />
                  <span className="font-dancing text-xl">This memory is forever ours</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemoriesPage;
