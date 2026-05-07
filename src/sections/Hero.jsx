import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
    FiArrowRight,
    FiDownload,
    FiMapPin,
    FiMail,
    FiServer,
    FiDatabase,
    FiCode,
} from "react-icons/fi";
import { personalInfo, socialLinks } from "../constants";
import profileImage from "../assets/foto.jpeg";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-transparent px-5 pt-32 text-white md:pt-36 lg:px-8"
        >
            {/* Soft gradient blur khusus hero */}
            <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[140px]" />
            <div className="absolute right-0 top-32 h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-emerald-400/10 blur-[120px]" />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 backdrop-blur"
                    >
                        <motion.span
                            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 1.8, repeat: Infinity }}
                            className="h-2.5 w-2.5 rounded-full bg-emerald-400"
                        />
                        {personalInfo.status}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative max-w-4xl text-4xl font-extrabold leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl"
                    >
                        <span>Hi, I’m </span>

                        <motion.span
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                textShadow: [
                                    "0 0 18px rgba(34, 211, 238, 0.12)",
                                    "0 0 30px rgba(34, 211, 238, 0.28)",
                                    "0 0 18px rgba(34, 211, 238, 0.12)",
                                ],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="inline-block bg-[linear-gradient(90deg,#67e8f9,#38bdf8,#a5b4fc,#6ee7b7,#67e8f9)] bg-[length:300%_300%] bg-clip-text text-transparent"
                        >
                            {personalInfo.shortName}
                        </motion.span>

                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="ml-2 inline-block h-12 w-1 rounded-full bg-cyan-300 align-middle md:h-16 lg:h-20"
                        />
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-6 text-2xl font-semibold text-slate-200 md:text-3xl"
                    >
                        {personalInfo.role}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
                    >
                        {personalInfo.description}
                    </motion.p>

                    {/* Highlight skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-6 flex flex-wrap gap-3"
                    >
                        {[
                            { icon: FiServer, label: "REST API Development" },
                            { icon: FiDatabase, label: "Database Integration" },
                            { icon: FiCode, label: "Backend System Design" },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.label}
                                    whileHover={{ y: -3, scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 backdrop-blur"
                                >
                                    <Icon className="text-cyan-300" size={16} />
                                    <span>{item.label}</span>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-8 flex flex-col gap-3 sm:flex-row"
                    >
                        <Link
                            to="projects"
                            smooth
                            duration={500}
                            offset={-80}
                            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
                        >
                            View Projects
                            <FiArrowRight />
                        </Link>

                        <a
                            href={personalInfo.cv}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300"
                        >
                            Download CV
                            <FiDownload />
                        </a>

                        <Link
                            to="contact"
                            smooth
                            duration={500}
                            offset={-80}
                            className="inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
                        >
                            Contact Me
                        </Link>
                    </motion.div>

                    {/* Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="mt-8 flex items-center gap-4"
                    >
                        {socialLinks.map((social) => {
                            const Icon = social.icon;

                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                                    aria-label={social.name}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    {/* Mini stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-10 grid gap-4 sm:grid-cols-3"
                    >
                        {[
                            { title: "Focus", value: "REST API" },
                            { title: "Stack", value: "Node.js / Laravel" },
                            { title: "Location", value: "Semarang, ID" },
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                            >
                                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                                    {item.title}
                                </p>
                                <p className="mt-2 text-sm font-semibold text-white">
                                    {item.value}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* RIGHT PROFILE CARD */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94, y: 30 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -10, 0],
                    }}
                    whileHover={{
                        scale: 1.02,
                    }}
                    transition={{
                        opacity: { duration: 0.7 },
                        scale: { duration: 0.7 },
                        y: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                    className="relative mx-auto w-full max-w-md"
                >
                    {/* Multi-layer animated glow */}
                    <motion.div
                        animate={{
                            opacity: [0.25, 0.55, 0.25],
                            scale: [1, 1.04, 1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -inset-3 rotate-6 rounded-[2.4rem] bg-cyan-400/20 blur-2xl"
                    />

                    <motion.div
                        animate={{
                            opacity: [0.2, 0.45, 0.2],
                            scale: [1.02, 1.08, 1.02],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                        }}
                        className="absolute -inset-5 -rotate-3 rounded-[2.6rem] bg-indigo-500/20 blur-3xl"
                    />

                    <motion.div
                        animate={{
                            opacity: [0.18, 0.4, 0.18],
                            scale: [1, 1.06, 1],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                        className="absolute -inset-6 rotate-12 rounded-[2.8rem] bg-emerald-400/10 blur-3xl"
                    />

                    <motion.div
                        animate={{
                            opacity: [0.3, 0.65, 0.3],
                            scale: [1, 1.03, 1],
                        }}
                        transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0 rotate-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 via-indigo-500/20 to-emerald-400/20 blur-md"
                    />

                    {/* Main glass card */}
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/40 backdrop-blur">
                        {/* Moving shine effect */}
                        <motion.div
                            animate={{
                                x: ["-120%", "140%"],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatDelay: 2,
                            }}
                            className="absolute top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        />

                        <div className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
                            {/* Terminal header */}
                            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                                <div className="flex items-center gap-2">
                                    <motion.span
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1.8, repeat: Infinity }}
                                        className="h-3 w-3 rounded-full bg-red-400"
                                    />
                                    <motion.span
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{
                                            duration: 1.8,
                                            repeat: Infinity,
                                            delay: 0.2,
                                        }}
                                        className="h-3 w-3 rounded-full bg-yellow-400"
                                    />
                                    <motion.span
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{
                                            duration: 1.8,
                                            repeat: Infinity,
                                            delay: 0.4,
                                        }}
                                        className="h-3 w-3 rounded-full bg-emerald-400"
                                    />
                                </div>

                                <span className="font-mono text-xs text-slate-500">
                                    backend-profile.js
                                </span>
                            </div>

                            {/* Profile */}
                            <div className="flex items-center gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.06, rotate: 1 }}
                                    transition={{ duration: 0.25 }}
                                    className="relative h-24 w-24 overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-900 shadow-lg shadow-cyan-400/20"
                                >
                                    <img
                                        src={profileImage}
                                        alt={personalInfo.shortName}
                                        className="h-full w-full object-cover"
                                    />

                                    <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                                </motion.div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {personalInfo.shortName}
                                    </h3>
                                    <p className="mt-1 text-sm font-semibold text-cyan-300">
                                        Backend Developer
                                    </p>
                                </div>
                            </div>

                            {/* Code block */}
                            <motion.div
                                whileHover={{
                                    borderColor: "rgba(34, 211, 238, 0.35)",
                                }}
                                className="mt-7 rounded-2xl border border-cyan-400/10 bg-slate-900/60 p-4 font-mono text-xs leading-6 text-cyan-200/80"
                            >
                                <p>
                                    <span className="text-emerald-300">const</span> developer ={" "}
                                    {"{"}
                                </p>
                                <p className="pl-4">
                                    role: <span className="text-white">"Backend Developer"</span>,
                                </p>
                                <p className="pl-4">
                                    stack:{" "}
                                    <span className="text-white">
                                        "Laravel, Node.js, MySQL"
                                    </span>
                                    ,
                                </p>
                                <p className="pl-4">
                                    status: <span className="text-emerald-300">"Available"</span>
                                </p>
                                <p>
                                    {"};"}
                                    <motion.span
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="ml-1 inline-block h-4 w-2 bg-cyan-300 align-middle"
                                    />
                                </p>
                            </motion.div>

                            {/* Skills grid */}
                            <div className="mt-7 grid grid-cols-2 gap-3">
                                {[
                                    { label: "Backend", value: "Laravel / Node.js" },
                                    { label: "Database", value: "MySQL / Firestore" },
                                    { label: "Cloud", value: "Google Cloud" },
                                    { label: "Focus", value: "API Development" },
                                ].map((item) => (
                                    <motion.div
                                        key={item.label}
                                        whileHover={{
                                            y: -4,
                                            borderColor: "rgba(34, 211, 238, 0.35)",
                                        }}
                                        transition={{ duration: 0.25 }}
                                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                                    >
                                        <p className="text-xs text-slate-500">{item.label}</p>
                                        <p className="mt-1 text-sm font-semibold text-white">
                                            {item.value}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Contact info */}
                            <div className="mt-7 space-y-3">
                                <motion.div
                                    whileHover={{ x: 4 }}
                                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300"
                                >
                                    <FiMapPin className="text-cyan-300" />
                                    {personalInfo.location}
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 4 }}
                                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300"
                                >
                                    <FiMail className="text-cyan-300" />
                                    {personalInfo.email}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;