import React from "react";
import { motion } from "framer-motion";
import ProfileSection from "./ProfileSection";
import HamburgerIcon from "./HamburgerIcon";

const MobileHeader = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-40 bg-white rounded-b-3xl shadow-md md:hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between px-4 py-3 gap-2">
        <div className="flex-1 min-w-0">
          <ProfileSection />
        </div>

        <div className="flex-shrink-0 ml-auto">
          <HamburgerIcon
            isOpen={isSidebarOpen}
            toggle={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MobileHeader;
