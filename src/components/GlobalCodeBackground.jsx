import { motion } from "framer-motion";

const snippets = [
  {
    top: "8%",
    left: "4%",
    content: `const api = express.Router();

api.get("/users", auth, getUsers);
api.post("/login", loginUser);`,
  },
  {
    top: "16%",
    right: "6%",
    content: `{
  "status": 200,
  "message": "API connected",
  "service": "backend"
}`,
  },
  {
    top: "35%",
    left: "6%",
    content: `SELECT users.name, roles.name
FROM users
JOIN roles ON users.role_id = roles.id;`,
  },
  {
    top: "48%",
    right: "8%",
    content: `const token = jwt.sign(
  { id: user.id },
  process.env.JWT_SECRET
);`,
  },
  {
    top: "63%",
    left: "10%",
    content: `class BackendService {
  async createData(payload) {
    return await repository.save(payload);
  }
}`,
  },
  {
    top: "78%",
    right: "10%",
    content: `router.post("/projects", createProject);
router.get("/projects", getProjects);
router.put("/projects/:id", updateProject);`,
  },
];

const GlobalCodeBackground = () => {
  return (
    <div className="global-code-bg pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="global-gradient absolute inset-0" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />

      {/* Theme overlay */}
      <div className="global-bg-overlay absolute inset-0" />

      {/* Floating code snippets */}
      {snippets.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: {
              duration: 0.5,
              ease: "easeOut",
            },
            y: {
              duration: 7 + index,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="code-snippet absolute hidden max-w-xs rounded-2xl border border-cyan-400/10 bg-slate-900/25 p-4 font-mono text-[11px] leading-5 text-cyan-200/20 backdrop-blur-sm lg:block"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
        >
          <pre className="whitespace-pre-wrap">{item.content}</pre>
        </motion.div>
      ))}

      {/* Decorative blur */}
      <div className="absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-[10%] top-[35%] h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute bottom-[10%] left-[25%] h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
    </div>
  );
};

export default GlobalCodeBackground;