import React from "react";
import { motion } from "framer-motion";

const HamburgerIcon = ({ isOpen, toggle }) => {
  return (
    <motion.div
      onClick={toggle}
      className="fixed top-6 right-6 z-50 cursor-pointer"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className="w-8 h-1 bg-white rounded-lg"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 6 },
        }}
      />

      <motion.div
        className="w-8 h-1 bg-white rounded-lg my-1"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
      />

      <motion.div
        className="w-8 h-1 bg-white rounded-lg"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -6 },
        }}
      />
    </motion.div>
  );
};

export default HamburgerIcon;
