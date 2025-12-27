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
  MapPin,
  ArrowRight,
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
  ];

  const contactItems = [
    { label: "+91 7510828193", icon: Phone, url: "tel:+917510828193" },
    {
      label: "Kannur, Kerala, India",
      icon: MapPin,
      url: "https://www.google.com/maps/place/Kannur,+Kerala,+India",
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
          className="fixed top-6 right-6 z-50 p-2  text-blue rounded-lg hover:bg-blue-700 transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      )}

      {isMobile && isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30"
        />
      )}

      <motion.aside
        initial={isMobile ? { x: -330 } : false}
        animate={isMobile ? (isSidebarOpen ? { x: 0 } : { x: -330 }) : false}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed 
    top-[25px] 
    left-[25px] 
    right-[25px] 
    bottom-[25px] 
    w-[330px]
    rounded-3xl bg-white z-40 shadow-xl overflow-hidden flex flex-col
    ${isMobile ? "fixed" : "sticky"}
`}
        style={!isMobile ? { height: "calc(100vh - 52px)" } : {}}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-6 flex items-center gap-2"
        >
          <motion.img
            src="/profile.webp"
            alt="Marshalp"
            className="w-16 h-16 rounded-2xl object-cover cursor-pointer "
            whileHover={{ scale: 1.05 }}
          />
          <div>
            <p className="font-semibold text-black text-sm">Marshalp</p>
            <a
              href="mailto:marshalp006@gmail.com"
              className="text-gray-400 text-[13px] md:text-[12px] sm:text-[11px] truncate max-w-[140px] hover:text-blue-600 transition-colors"
            >
              marshalp006@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-2 space-y-2 pr-0 text=[15px]"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.label === activeItem;
            return (
              <motion.button
                key={item.label}
                variants={itemVariants}
                whileHover={{ x: 0 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveItem(item.label)}
                className="flex items-center gap-2 rounded-l-3xl px-3 py-1 ml-[10px] w-full transition-all duration-300"
                style={
                  isActive
                    ? {
                        background: "#EBEBEB",
                        borderTop: "1.6px solid #002CD7",
                        borderBottom: "1.6px solid #002CD7",
                        borderLeft: "1.6px solid #002CD7",
                        borderRight: "none",
                        padding: "6px 20px",
                        marginLeft: "10px",
                        marginRight: "0px",
                        width: "100%",
                        overflow: "hidden",
                      }
                    : {
                        background: "transparent",
                        borderTop: "1.6px solid transparent",
                        borderBottom: "1.6px solid transparent",
                        borderLeft: "1.6px solid transparent",
                        borderRight: "none",
                        padding: "6px 8px",
                        marginLeft: "10px",
                        marginRight: "0px",
                        width: "100%",
                        overflow: "hidden",
                      }
                }
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "#EBEBEB";
                    e.currentTarget.style.borderTop = "1.6px solid #002CD7";
                    e.currentTarget.style.borderBottom = "1.6px solid #002CD7";
                    e.currentTarget.style.borderLeft = "1.6px solid #002CD7";
                    e.currentTarget.style.borderRight = "none";
                    e.currentTarget.style.overflow = "hidden";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderTop = "1.6px solid transparent";
                    e.currentTarget.style.borderBottom =
                      "1.6px solid transparent";
                    e.currentTarget.style.borderLeft =
                      "1.6px solid transparent";
                    e.currentTarget.style.borderRight = "none";
                    e.currentTarget.style.overflow = "hidden";
                  }
                }}
              >
                <Icon
                  size={20}
                  className={`${
                    isActive
                      ? "text-blue-700"
                      : "text-gray-600 hover:text-blue-700"
                  }`}
                />

                <span
                  className={`${
                    isActive
                      ? " text-blue-700 text-[16px]"
                      : "text-[16px] text-gray-700"
                  }`}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </motion.nav>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-6 space-y-3 mt-auto"
        >
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                onClick={() => window.open(item.url, "_blank")}
                className="w-full flex items-center justify-between text-gray-600 hover:text-blue-600 cursor-pointer transition-all group"
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

          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                onClick={() => window.open(item.url, "_blank")}
                className="w-full flex items-center justify-between text-gray-600 hover:text-blue-600 cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Icon size={18} />
                  <span className="text-[14px]">{item.label}</span>
                </div>
                <ArrowRight
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  size={16}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
