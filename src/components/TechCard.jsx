import { motion } from "framer-motion";

const TechCard = ({ group }) => {
  const GroupIcon = group.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
          <GroupIcon size={22} />
        </div>

        <div>
          <h3 className="font-bold text-white">{group.title}</h3>
          <p className="text-xs text-slate-500">{group.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {group.items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
            >
              <Icon className="text-cyan-300" size={20} />
              <span className="text-sm font-medium text-slate-300">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TechCard;