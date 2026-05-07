import { motion } from "framer-motion";

const ExperienceItem = ({ item, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="relative pl-10"
    >
      {!isLast && (
        <span className="absolute left-[11px] top-7 h-full w-px bg-white/10" />
      )}

      <span className="absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-400/30" />

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">{item.role}</h3>
            <p className="text-sm font-medium text-cyan-300">
              {item.organization}
            </p>
          </div>

          <span className="w-fit rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-300 ring-1 ring-white/10">
            {item.period}
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-400">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;