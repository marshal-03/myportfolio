import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationMenu from "./NavigationMenu";
import SocialLinks from "./SocialLinks";

const MobileMenu = ({
  isOpen,
  onClose,
  activeItem,
  setActiveItem,
  containerVariants,
  itemVariants,
}) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-30 top-[70px] md:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-[70px] left-0 right-0 z-30 bg-white rounded-b-3xl shadow-xl overflow-hidden md:hidden"
          >
            <div className="px-6 py-4 space-y-6 max-h-[calc(100vh-70px)] overflow-y-auto">
              <NavigationMenu
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                variants={containerVariants}
                itemVariants={itemVariants}
                onItemClick={onClose}
              />

              <div className="h-px bg-gray-200" />

              <SocialLinks
                variants={containerVariants}
                itemVariants={itemVariants}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
