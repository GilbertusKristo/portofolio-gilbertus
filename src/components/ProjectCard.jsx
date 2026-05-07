import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  FiExternalLink,
  FiCalendar,
  FiServer,
  FiMonitor,
} from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const hasImage = Boolean(project.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]"
    >
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

      {/* Top preview/header area */}
      <div className="relative h-40 shrink-0 overflow-hidden border-b border-white/10 bg-slate-900">
        {hasImage ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_45%)]">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                {project.type === "backend" ? (
                  <FiServer size={28} />
                ) : (
                  <FiMonitor size={28} />
                )}
              </div>
              <p className="text-sm font-semibold text-slate-300">
                {project.type === "backend"
                  ? "Backend Project"
                  : "Project Preview"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            {project.category}
          </span>

          {project.period && (
            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
              <FiCalendar />
              {project.period}
            </span>
          )}
        </div>

        <h3 className="min-h-[56px] text-xl font-bold leading-snug text-white">
          {project.title}
        </h3>

        <p
          className="mt-3 text-sm leading-7 text-slate-400"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <FaGithub />
              GitHub
            </a>

            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                {project.buttonLabel || "Demo"}
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;