import { motion } from "framer-motion";
import { ArrowUpRight, Send, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const ovalRef = useRef(null);

  useEffect(() => {
    if (ovalRef.current) {
      gsap.timeline({ repeat: -1 }).to(ovalRef.current, {
        borderRadius: [
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "70% 30% 30% 70% / 30% 70% 70% 30%",
          "30% 70% 70% 30% / 30% 30% 70% 70%",
        ],
        duration: 8,
        ease: "none",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
    <section id="contact" className="w-full px-[25px] py-[25px] pb-2">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[calc(100vw-340px)] rounded-3xl bg-black text-white overflow-hidden ml-[10px]"
      >
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute w-72 h-72 rounded-full bg-blue-700/20 blur-3xl animate-float top-10 right-10"></div>
          <div className="absolute w-56 h-56 rounded-full bg-purple-700/20 blur-3xl animate-float-delayed bottom-10 left-10"></div>

          <div
            ref={ovalRef}
            className="absolute w-96 h-80 border-2 border-blue-500/30 blur-sm"
            style={{
              left: "-50px",
              top: "80px",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            }}
          ></div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col justify-between h-full"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2"
              >
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                  Contact
                </span>
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-blue-400"
                >
                  <TrendingUp size={14} />
                </motion.span>
              </motion.div>

              <div className="space-y-3">
                <motion.h2
                  variants={itemVariants}
                  className="font-poppins font-medium "
                  style={{
                    fontSize: "41px",
                    lineHeight: "56px",
                    letterSpacing: "0%",
                    fontFamily: "Poppins",
                  }}
                >
                  very great journey starts with a simple conversation.
                </motion.h2>

                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 cursor-pointer"
                  whileHover={{ x: 10, color: "#0020A0" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontSize: "41px",
                    lineHeight: "56px",
                    fontWeight: "500",
                    fontFamily: "Poppins",
                    color: "#002CD6",
                    width: "fit-content",
                  }}
                >
                  Tell us yours
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowUpRight size={28} className="flex-shrink-0" />
                  </motion.div>
                </motion.div>
              </div>

              <motion.p
                variants={itemVariants}
                className="ml-auto"
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontStyle: "regular",
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                  textAlign: "right",
                  color: "#D1D5DB",
                  maxWidth: "300px",
                }}
              >
                Great products start with understanding. We listen, design with
                purpose, and create experiences people trust.
              </motion.p>
            </motion.div>

            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              onSubmit={handleSubmit}
              className="flex flex-col space-y-5 sm:space-y-6"
            >
              {["name", "email", "subject", "message"].map((field) => (
                <motion.div
                  key={field}
                  variants={itemVariants}
                  className="relative space-y-0"
                >
                  {field === "message" ? (
                    <textarea
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder=" "
                      rows="2"
                      className="peer w-full px-0 py-3 sm:py-4 bg-transparent text-white text-sm 
                                 border-b border-gray-600 focus:border-blue-500
                                 focus:outline-none transition-all resize-none"
                    />
                  ) : (
                    <input
                      type="text"
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full px-0 py-3 sm:py-4 bg-transparent text-white text-sm 
                                 border-b border-gray-600 focus:border-blue-500
                                 focus:outline-none transition-all"
                    />
                  )}

                  <label
                    className="
                      absolute left-0 text-sm text-gray-400 pointer-events-none
                      transition-all duration-300

                      top-3 sm:top-4

                      peer-focus:top-0
                      peer-focus:text-xs
                      peer-focus:text-gray-300

                      peer-[&:not(:placeholder-shown)]:top-0
                      peer-[&:not(:placeholder-shown)]:text-xs
                      peer-[&:not(:placeholder-shown)]:text-gray-300
                    "
                  >
                    {field === "name"
                      ? "Your Name"
                      : field === "email"
                      ? "Email Address"
                      : field === "subject"
                      ? "Subject"
                      : "Message"}
                  </label>
                </motion.div>
              ))}

              <motion.button
                variants={itemVariants}
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 sm:py-4 text-white font-semibold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #5B7AF3 0%, #002CD7 47.12%, #133CDD 58.17%, #5B7AF3 100%)",
                  marginTop: "8px",
                }}
              >
                <span>Submit</span>
                <Send size={16} />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
