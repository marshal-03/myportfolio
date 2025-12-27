import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.015,
        type: "spring",
        stiffness: 180,
        damping: 18,
      },
    }),
  };

  const headingText = "Designing interfaces, crafting";
  const blueText = "Experiences & improving";
  const bottomText = "Digital product";

  return (
    <section className="w-full px-[25px]  pt-[8px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
      w-full max-w-[1400px] rounded-3xl bg-white border border-gray-100 shadow-lg 
      overflow-hidden
      p-6 sm:p-8 lg:p-10 ml-[10px] mr-[25px] relative min-h-[500px] flex flex-col
    "
      >
        <div className="flex flex-col space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="w-10 h-10">
              <img
                src="/logo.png"
                alt="Marshalp"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-black text-base">
                Hello, I'm Marshall
              </h3>
              <p className="text-gray-500 text-xs">UI/UX Designer</p>
            </div>
          </motion.div>

          <div className="space-y-1">
            <motion.h1
              className="overflow-hidden"
              style={{
                fontFamily: "poiret one",
                fontSize: "clamp(30px, 5vw, 60px)",
                lineHeight: "1.2",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              {headingText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h1
              className="text-blue-600 overflow-hidden"
              style={{
                fontFamily: "poiret one",
                fontSize: "clamp(30px, 5vw, 57px)",
                lineHeight: "1.2",
                fontWeight: 700,
                letterSpacing: "-0.1px",
              }}
            >
              {blueText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i + 30}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h1
              className="overflow-hidden"
              style={{
                fontFamily: "poiret one",
                fontSize: "clamp(28px, 5vw, 57px)",
                lineHeight: "1.3",
                fontWeight: 700,
                letterSpacing: "-0.1px",
              }}
            >
              {bottomText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i + 30}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>

        <div className="mt-auto flex flex-col lg:flex-row justify-between items-start pt-10 gap-6 lg:gap-0">
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background:
                  "linear-gradient(90deg, #5B7AF3 0%, #002CD7 47.12%, #133CDD 58.17%, #5B7AF3 100%)",
              }}
              className="px-6 py-3 text-white rounded-full font-semibold flex items-center gap-2 text-sm"
            >
              UI/UX Designs <ArrowRight size={16} />
            </motion.button>

            <motion.a
              href="/Marshal-CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background:
                  "linear-gradient(90deg, #5B7AF3 0%, #002CD7 47.12%, #133CDD 58.17%, #5B7AF3 100%)",
              }}
              className="px-6 py-3 text-white rounded-full font-semibold flex items-center gap-2 text-sm cursor-pointer"
            >
              <Download size={16} /> Download my CV
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-[260px] text-left mt-6 lg:mt-0"
          >
            <p className="text-gray-700 text-sm sm:text-base leading-snug">
              Talk to me about your product, and I'll design experiences that
              scale growth and earn customer trust
            </p>

            <motion.button
              whileHover={{ x: 5 }}
              className="mt-4 flex items-center gap-3 font-semibold text-black text-[18px]"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Let's talk
              <span className="w-8 h-8 sm:w-9 sm:h-9 bg-[#002CD7] rounded-full flex items-center justify-center">
                <ArrowUpRight size={16} color="white" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
