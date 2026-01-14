import { CONTACT } from "../constant/index.js";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <div className="glass rounded-2xl p-8 text-center glow">
        <p className="text-2xl font-semibold mb-4">
          Travaillons ensemble 🚀
        </p>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNumber}
        </motion.p>

        <motion.a
        whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          href={`mailto:${CONTACT.email}`}
          className="inline-block mt-4 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition"
        >
          Me contacter
        </motion.a>
      </div>

      </div>
    </section>
  );
};

export default Contact;
