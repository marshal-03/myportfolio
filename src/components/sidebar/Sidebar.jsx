import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  FolderOpen,
  Linkedin,
  Instagram,
  Phone,
  ArrowRight,
  Github,
} from "lucide-react";

import { FaBehance } from "react-icons/fa";

const Sidebar = ({
  activeItem,
  setActiveItem,
  isMobile,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  console.log("Sidebar props:", {
    activeItem,
    setActiveItem,
    isMobile,
    isSidebarOpen,
  });

  const navItems = [
    { label: "Home", icon: Home },
    { label: "About", icon: User },
    { label: "Skills", icon: Briefcase },
    { label: "Projects", icon: FolderOpen },
  ];

  const socialLinks = [
    {
      label: "Behance",
      icon: FaBehance,
      url: "https://www.behance.net/marshalp",
    },

    {
      label: "Linkedin",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/marshal-p-7a6545266/",
    },
    {
      label: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/uiux_grid/",
    },
    {
      label: "GitHub",
      icon: Github,
      url: "https://github.com/marshal-03",
    },
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      {isMobile && (
        <motion.button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed top-6 right-6 z-50 p-2 bg-white text-primary rounded-xl shadow-lg border border-gray-100 transition-all"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      )}

      {isMobile && isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
        />
      )}

      <motion.aside
        initial={isMobile ? { x: "-110%" } : { opacity: 0 }}
        animate={isMobile ? (isSidebarOpen ? { x: 0 } : { x: "-110%" }) : { opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`${isMobile ? 'fixed' : 'sticky'} 
          top-[16px] 
          left-[16px] 
          bottom-[16px] 
          ${isMobile ? 'w-[280px]' : 'w-[330px]'}
          rounded-3xl bg-white z-40 shadow-2xl overflow-hidden flex flex-col
        `}
        style={!isMobile ? { height: "calc(100vh - 52px)" } : { height: "calc(100vh - 32px)" }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-4 flex items-center gap-2"
        >
          <motion.img
            src="/profile.webp"
            alt="Marshalp"
            className="w-16 h-16 rounded-full object-cover cursor-pointer"
            whileHover={{ scale: 1.05 }}
          />
          <div>
            <p className="font-semibold text-black text-sm">Marshalp</p>
            <a
              href="mailto:marshalp006@gmail.com"
              className="text-gray-400 text-[13px] md:text-[12px] sm:text-[11px] truncate max-w-[140px] hover:text-primary transition-colors"
            >
              marshalp006@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-2 space-y-1 pr-0 text=[15px]"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.label === activeItem;
            return (
              <div key={item.label} className="relative flex items-center py-0.5">
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-1.5 h-6 w-1 bg-primary rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                <motion.button
                  variants={itemVariants}
                  whileHover={{ x: 0 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveItem(item.label)}
                  className={`
                    flex items-center gap-3 px-4 py-2 ml-4 mr-4 w-full rounded-2xl transition-all duration-300 group
                    ${isActive ? "bg-[#E8EEFF] text-primary" : "text-gray-500 hover:text-primary hover:bg-gray-50"}
                  `}
                >
                  <Icon size={20} className={isActive ? "text-primary" : "text-gray-500 group-hover:text-primary transition-colors"} />
                  <span className="text-[15px] font-medium">{item.label}</span>
                </motion.button>
              </div>
            );
          })}
        </motion.nav>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-4 space-y-4 mt-auto"
        >
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                onClick={() => window.open(item.url, "_blank")}
                className="w-full flex items-center justify-between text-gray-600 hover:text-primary cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Icon size={18} />
                  <span className="text-[15px] ">{item.label}</span>
                </div>
                <ArrowRight
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  size={16}
                />
              </motion.div>
            );
          })}


        </motion.div>
      </motion.aside >
    </>
  );
};

export default Sidebar;
