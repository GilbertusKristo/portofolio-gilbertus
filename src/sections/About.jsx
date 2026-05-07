import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiServer, FiCloud } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { personalInfo } from "../constants";

const highlights = [
  {
    title: "Backend Development",
    description:
      "Berfokus pada pengembangan server-side application, REST API, autentikasi, dan struktur backend yang mudah dikembangkan.",
    icon: FiServer,
  },
  {
    title: "Web Development",
    description:
      "Memiliki pengalaman menggunakan Laravel, PHP, JavaScript, HTML, CSS, dan React untuk membangun aplikasi web.",
    icon: FiCode,
  },
  {
    title: "Database Management",
    description:
      "Memahami penggunaan MySQL dan Firestore untuk kebutuhan penyimpanan data aplikasi web dan mobile.",
    icon: FiDatabase,
  },
  {
    title: "Google Cloud Computing",
    description:
      "Mempelajari layanan Google Cloud seperti Compute Engine, Cloud Run, App Engine, dan Firestore.",
    icon: FiCloud,
  },
];

const About = () => {
  return (
    <section id="about" className="relative bg-transparent px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About Me"
          title="Informatics Engineering student with a strong interest in backend development."
          description={`Saya adalah mahasiswa Informatics Engineering di ${personalInfo.university}. Saya memiliki minat pada Backend Development, Web Development, API Development, Database, Google Cloud Computing, serta Machine Learning dasar untuk mendukung pengembangan aplikasi modern.`}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Icon size={23} />
                </div>

                <h3 className="text-lg font-bold text-white">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;