import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full pl-[17px] pr-[17px] py-[25px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1400px] mx-auto rounded-3xl bg-white border border-gray-100 shadow-lg overflow-hidden flex flex-col lg:flex-row"
      >
        <motion.div
          variants={itemVariants}
          className="lg:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto flex-shrink-0 overflow-hidden relative"
          style={{ borderRadius: "0 24px 24px 0" }}
        >
          <img
            src="/profile.webp"
            alt="Marshal P"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 flex flex-col justify-between p-8 sm:p-10 lg:p-12"
        >
          <div className="space-y-5 sm:space-y-6">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8EEFF] rounded-full w-fit mb-4"
            >
              <TrendingUp size={16} className="text-primary" />
              <span className="text-primary font-semibold text-sm">
                About me
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium leading-tight"
            >
              Crafting Meaningful{" "}
              <span className="text-primary">Digital Experiences</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-normal text-[18px] leading-[30px] text-gray-500"
            >
              I'm Marshal P, a UI/UX Designer focused on creating intuitive
              interfaces and meaningful user experiences. I enjoy turning ideas
              into thoughtful designs that balance creativity with function. My
              work aims to build digital products that feel seamless,
              purposeful, and visually engaging.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-normal text-[18px] leading-[30px] text-gray-500"
            >
              When I'm not designing, I'm exploring new design trends, refining
              my skills, or sketching concepts for upcoming projects. Let's
              create something that connects people and solves problems through
              design.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex justify-end pt-8 sm:pt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 group"
            >
              <span className="text-primary font-semibold text-sm sm:text-base">
                Learn more
              </span>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 sm:w-9 sm:h-9 bg-[#002CD6] rounded-full flex items-center justify-center text-white flex-shrink-0"
              >
                <ArrowUpRight size={16} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
