import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { FaBehance } from "react-icons/fa";

const SocialLinks = ({ variants, itemVariants }) => {
  const socialLinks = [
    {
      label: "Behance",
      icon: FaBehance,
      url: "https://www.behance.net/yourprofile",
    },
    { label: "Github", icon: Github, url: "https://github.com/yourprofile" },
    {
      label: "Linkedin",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/yourprofile",
    },
    {
      label: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/yourprofile",
    },
  ];

  const contactItems = [
    {
      label: "marshalp006@gmail.com",
      icon: Mail,
      url: "mailto:marshalp006@gmail.com",
    },
    { label: "+91 7510828193", icon: Phone, url: "tel:+917510828193" },
    {
      label: "Kannur, Kerala, India",
      icon: MapPin,
      url: "https://www.google.com/maps/place/Kannur,+Kerala,+India",
    },
  ];

  const allLinks = [...socialLinks, ...contactItems];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="space-y-3"
    >
      {allLinks.map((item) => {
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
  );
};

export default SocialLinks;
