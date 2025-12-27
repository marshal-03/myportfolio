import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool,
 Lightbulb,
  Palette, 
  Layers,
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';

const SkillsSection = () => {
  const [glarePos, setGlarePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardInView, setCardInView] = useState({});
  const containerRef = useRef(null);

  const skillsData = [
    {
      id: 1,
      icon: PenTool,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Framer, focused on user flows, wireframes, prototypes, and clean intuitive UI."
    },
    {
      id: 2,
      icon: Palette,
      title: "Visual Design",
      description: "Crafting clean, modern, meaningful visuals for digital products"
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Soft Skills",
      description: "Creative Problem Solving, Collaboration & Communication, Design Thinking, Time Management"
    },
    {
      id: 4,
      icon: Layers,
      title: "Tools & Technology",
      description: "Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator, Canva, AI Framer"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardInView(prev => ({
              ...prev,
              [entry.target.dataset.cardId]: true
            }));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, cardId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlarePos({ x, y });
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateX: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      },
    },
  };

  return (
    <section className="w-full px-[25px] py-[25px] pb-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1400px] rounded-3xl bg-white border border-gray-100 shadow-lg overflow-hidden p-8 sm:p-10 lg:p-12 ml-[10px] relative min-h-[500px]"
      >
       
        <div className="mb-8">
          <div className="flex flex-col gap-2">
            <motion.div className="flex items-center gap-1">
              <p className="text-blue-600 text-sm font-semibold">
                My Design Skill
              </p>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-blue-600 "
              >
                <TrendingUp size={18} />
              </motion.span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mt-4 mb-4">
              UI/UX Design Skills <span className="text-blue-600">that Drive Impact</span>
            </h2>
          </div>
        </div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
        >
          {skillsData.map((skill) => {
            const IconComponent = skill.icon;
            const isHovered = hoveredCard === skill.id;
            const isVisible = cardInView[skill.id];

            return (
              <motion.div
                key={skill.id}
                data-card-id={skill.id}
                className="skill-card"
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                onMouseMove={(e) => handleMouseMove(e, skill.id)}
                onMouseLeave={handleMouseLeave}
              >
              
                <div
                  className={`relative h-full p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-300 overflow-hidden ${
                    isHovered ? 'border-2 border-blue-600 shadow-lg' : 'border border-gray-200'
                  }`}
                >
               
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute pointer-events-none w-32 h-32 rounded-full blur-2xl"
                      style={{
                        left: `${glarePos.x - 64}px`,
                        top: `${glarePos.y - 64}px`,
                        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(96, 165, 250, 0.5) 100%)'
                      }}
                    />
                  )}

               
                  <motion.div
                    animate={isHovered ? { y: -2 } : { y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col h-full"
                  >
                   
                    <div className="flex justify-between items-start mb-4">
                      <motion.div
                        animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent 
                          size={28} 
                          className={`transition-colors ${isHovered ? 'text-blue-600' : 'text-gray-700'}`}
                        />
                      </motion.div>

                      <motion.div
                        animate={isHovered ? { scale: 1.2, x: 2, y: -2 } : { scale: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowUpRight 
                          size={20}
                          className={`transition-colors ${isHovered ? 'text-blue-600' : 'text-gray-400'}`}
                        />
                      </motion.div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      {skill.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;