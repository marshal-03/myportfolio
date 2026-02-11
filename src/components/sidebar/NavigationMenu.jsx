import React from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, FolderOpen } from "lucide-react";

const NavigationMenu = ({
  activeItem,
  setActiveItem,
  variants,
  itemVariants,
  onItemClick = () => { },
}) => {
  const navItems = [
    { label: "Home", icon: Home },
    { label: "About", icon: User },
    { label: "Skills", icon: Briefcase },
    { label: "Projects", icon: FolderOpen },
  ];

  const handleClick = (label) => {
    setActiveItem(label);
    onItemClick();
  };

  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="visible"
      className="py-3 space-y-2 pr-0 text-[15px]"
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
            onClick={() => handleClick(item.label)}
            className="flex items-center gap-3 transition-all duration-300 rounded-l-3xl w-full"
            style={
              isActive
                ? {
                  background: "#EBEBEB",
                  borderTop: "1.6px solid #002CD6",
                  borderBottom: "1.6px solid #002CD6",
                  borderLeft: "1.6px solid #002CD6",
                  borderRight: "none",
                  padding: "8px 16px",
                  marginLeft: "10px",
                  marginRight: "0px",
                  overflow: "hidden",
                }
                : {
                  background: "transparent",
                  borderTop: "1.6px solid transparent",
                  borderBottom: "1.6px solid transparent",
                  borderLeft: "1.6px solid transparent",
                  borderRight: "none",
                  padding: "8px 16px",
                  marginLeft: "10px",
                  marginRight: "0px",
                  overflow: "hidden",
                }
            }
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = "#EBEBEB";
                e.currentTarget.style.borderTop = "1.6px solid #002CD6";
                e.currentTarget.style.borderBottom = "1.6px solid #002CD6";
                e.currentTarget.style.borderLeft = "1.6px solid #002CD6";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderTop = "1.6px solid transparent";
                e.currentTarget.style.borderBottom = "1.6px solid transparent";
                e.currentTarget.style.borderLeft = "1.6px solid transparent";
              }
            }}
          >
            <Icon
              size={20}
              className={`${isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                }`}
            />
            <span
              className={`${isActive
                  ? "font-semibold text-primary text-[17px]"
                  : "text-[16px] text-gray-700"
                }`}
            >
              {item.label}
            </span>
          </motion.button>
        );
      })}
    </motion.nav>
  );
};

export default NavigationMenu;
