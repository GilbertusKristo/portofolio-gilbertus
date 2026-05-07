import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiHash, FiLayers } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { certifications } from "../constants";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative bg-transparent px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Certifications"
          title="Certifications and learning achievements."
          description="Sertifikasi dan pembelajaran yang mendukung kemampuan dalam backend development, database, cloud computing, dan pengembangan aplikasi."
        />

        {/* Certificate Grid: 4 card per row on desktop */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certifications.map((cert, index) => (
            <motion.article
              key={`${cert.name}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]"
            >
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

              <div className="relative">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <FiAward size={24} />
                  </div>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {cert.category || "Certificate"}
                  </span>
                </div>

                <h3 className="min-h-[72px] text-base font-bold leading-snug text-white">
                  {cert.name}
                </h3>

                <p className="mt-3 text-sm font-medium text-slate-400">
                  {cert.issuer}
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <FiCalendar className="text-cyan-300" />
                    <span>{cert.issueDate || cert.year}</span>
                  </div>

                  {cert.credentialId && cert.credentialId !== "-" && (
                    <div className="flex items-start gap-2 text-sm text-slate-400">
                      <FiHash className="mt-0.5 text-cyan-300" />
                      <span className="break-all">{cert.credentialId}</span>
                    </div>
                  )}

                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex items-start gap-2 text-sm text-slate-400">
                      <FiLayers className="mt-0.5 text-cyan-300" />
                      <span>{cert.skills.slice(0, 2).join(", ")}</span>
                    </div>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cert.skills?.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;