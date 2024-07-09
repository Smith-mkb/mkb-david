import { CONTACT } from "../constant/index.js";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Entre en Contact
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNumber}
        </motion.p>
        <a href="#" className="hover:border-b">
          {CONTACT.email}
        </a>
      </div>
    </section>
  );
};

export default Contact;
