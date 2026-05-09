import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sprout, Beef, FlaskConical, Droplets, Building2, Scissors, BookOpen, Calculator, Globe, Languages } from 'lucide-react';

const subjects = [
  {
    category: 'Agricultural Subjects',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-700',
    items: [
      { name: 'Ezolimo (Crop Production)', icon: Sprout, description: 'Practical and theoretical study of crop farming — from soil preparation to harvesting. Learners grow cabbages, potatoes, and various vegetables on the school farm.' },
      { name: 'Ezemfuyo (Animal Production)', icon: Beef, description: 'Livestock management, animal health, and husbandry. Learners gain hands-on experience caring for and managing farm animals.' },
      { name: 'Ezenzululwazi nobuchwephetshe (Agricultural Science & Technology)', icon: FlaskConical, description: 'The science behind farming — soil science, plant biology, pest control, and modern agricultural technologies.' },
      { name: 'Planting and Care', icon: Sprout, description: 'Focused module on correct planting techniques, spacing, mulching, and the ongoing care of crops through to harvest.' },
      { name: 'Nutrient Solutions & pH Control', icon: Droplets, description: 'Understanding soil chemistry, fertiliser application, pH balancing, and nutrient management for optimal yield.' },
      { name: 'Urban Vertical Farming', icon: Building2, description: 'Innovative wall-mounted and vertical growing systems. Learners design and manage vertical farms growing onions, spinach, and leafy greens.' },
      { name: 'Harvesting', icon: Scissors, description: 'Post-harvest handling, sorting, packaging, and distribution of produce. Learners participate in real harvests that are shared with the school community.' },
    ]
  },
  {
    category: 'Core Academic Subjects',
    color: 'bg-red-50 border-red-200',
    iconColor: 'text-school-green',
    items: [
      { name: 'English (Home / First Additional)', icon: BookOpen, description: 'Reading, writing, communication, and literary analysis in English — a foundational subject for all learners.' },
      { name: 'Mathematics / Mathematical Literacy', icon: Calculator, description: 'Mathematical reasoning, problem solving, and real-world applications. Agricultural contexts are used to make maths relevant.' },
      { name: 'Life Sciences', icon: FlaskConical, description: 'The study of living organisms — complementing agricultural science with biology, ecology, and environmental studies.' },
      { name: 'Geography', icon: Globe, description: 'Physical and human geography with a focus on environmental management and land use — closely tied to agricultural contexts.' },
      { name: 'IsiXhosa / Home Language', icon: Languages, description: 'Mother tongue language development, literature, and oral communication in IsiXhosa.' },
    ]
  }
];

export const Subjects = () => {
  const [activeCategory, setActiveCategory] = useState('Agricultural Subjects');
  const current = subjects.find(s => s.category === activeCategory)!;

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="section-title">Subjects & Curriculum</h1>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10 -mt-4">
          Our school combines strong academic subjects with a full agricultural programme — offered from Grade 8 through Grade 12. Every learner gets their hands in the soil.
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {subjects.map(s => (
            <button
              key={s.category}
              onClick={() => setActiveCategory(s.category)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border-2 ${activeCategory === s.category ? 'bg-school-green text-white border-school-green' : 'bg-white text-school-green border-school-green hover:bg-red-50'}`}
            >
              {s.category}
            </button>
          ))}
        </div>

        {/* Subjects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.items.map((subj, i) => (
            <motion.div
              key={subj.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.3 }}
              className={`rounded-2xl border-2 p-6 hover:shadow-md transition-shadow ${current.color}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm ${current.iconColor}`}>
                <subj.icon size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{subj.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{subj.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Agriculture note */}
        <div className="mt-14 rounded-3xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #7B1C1C, #5a1414)' }}>
          <p className="text-white/80 text-sm uppercase tracking-widest font-bold mb-2">School Focus</p>
          <h2 className="text-2xl font-bold text-white mb-3">Agriculture from Grade 8 to Grade 12</h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Isikolo sethu sijongene ne Learning Content kunye nezolimo (Agriculture) kusukela kwiBanga le 08 ukuya kwiBanga le 12.
          </p>
          <a href="/admissions" className="mt-6 inline-block bg-white text-school-green font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
            Apply for 2026
          </a>
        </div>

      </div>
    </div>
  );
};
