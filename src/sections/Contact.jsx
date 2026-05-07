import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiSend,
  FiTerminal,
  FiCheckCircle,
} from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { contactItems, personalInfo } from "../constants";

const iconMap = {
  Email: FiMail,
  Phone: FiPhone,
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Location: FiMapPin,
};

const Contact = () => {
  return (
    <section id="contact" className="relative bg-transparent px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s Build Something Together"
          description="Saya terbuka untuk peluang magang, freelance, kolaborasi project, dan diskusi pengembangan aplikasi backend."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-8 lg:p-10"
        >
          {/* Decorative glow */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Left CTA */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available for Internship & Collaboration
              </div>

              <h3 className="max-w-xl text-3xl font-bold leading-tight text-white md:text-4xl">
                Have a backend idea, API project, or collaboration opportunity?
              </h3>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
                Hubungi saya untuk membahas pembuatan REST API, backend service,
                integrasi database, autentikasi, deployment, atau pengembangan
                web berbasis kebutuhan project.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
                >
                  Send Email
                  <FiSend size={16} />
                </motion.a>

                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  View GitHub
                  <FiGithub size={16} />
                </motion.a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Focus", value: "Backend API" },
                  { label: "Stack", value: "Node.js / Laravel" },
                  { label: "Location", value: "Semarang" },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right contact panel */}
            <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-5 shadow-xl shadow-black/30">
              {/* Terminal header */}
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                  <FiTerminal />
                  contact.config.js
                </div>
              </div>

              {/* Code identity */}
              <div className="mb-5 rounded-2xl border border-cyan-400/10 bg-slate-900/60 p-4 font-mono text-xs leading-6 text-cyan-200/80">
                <p>
                  <span className="text-emerald-300">const</span> contact = {"{"}
                </p>
                <p className="pl-4">
                  name: <span className="text-white">"{personalInfo.shortName}"</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-white">"Backend Developer"</span>,
                </p>
                <p className="pl-4">
                  status:{" "}
                  <span className="text-emerald-300">"Open to opportunities"</span>
                </p>
                <p>{"};"}</p>
              </div>

              {/* Contact list */}
              <div className="space-y-3">
                {contactItems.map((item) => {
                  const Icon = iconMap[item.label] || FiCheckCircle;
                  const isLink = item.href && item.href !== "#";
                  const Component = isLink ? "a" : "div";

                  return (
                    <motion.div
                      key={item.label}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Component
                        href={isLink ? item.href : undefined}
                        target={
                          isLink && item.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          isLink && item.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                            <Icon size={20} />
                          </div>

                          <div className="min-w-0">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                              {item.label}
                            </p>
                            <p className="mt-1 truncate text-sm font-semibold text-slate-200">
                              {item.value}
                            </p>
                          </div>
                        </div>

                        {isLink && (
                          <FiArrowUpRight className="shrink-0 text-cyan-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                        )}
                      </Component>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;