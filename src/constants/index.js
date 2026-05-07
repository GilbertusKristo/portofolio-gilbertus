import {
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaJava,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiLaravel,
  SiMysql,
  SiJavascript,
  SiGooglecloud,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiTailwindcss,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { FiDatabase, FiServer, FiCode, FiTool, FiCloud } from "react-icons/fi";
import pneumoniaDetectionImage from "../assets/projects/pneumonia-detection.png";
import backendAbsensi from "../assets/projects/backend-absensi.png"
export const personalInfo = {
  name: "Gilbertus Kristo Anugerah Adviandito",
  shortName: "Gilbertus Kristo",
  role: "Backend Developer",
  status: "Informatics Engineering Student",
  university: "Semarang State University",
  location: "Semarang, Central Java, Indonesia",
  email: "gilbertuskristo@gmail.com",
  phone: "+6285974830337",
  github: "https://github.com/GilbertusKristo",
  linkedin:
    "https://www.linkedin.com/in/gilbertus-kristo-anugerah-adviandito-a81809240/",
  cv: "public\CV_GilbertusKristoAA.pdf",
  description:
    "Backend Developer yang berfokus pada pengembangan REST API, sistem web, integrasi database, autentikasi, cloud computing, serta solusi digital berbasis web dan mobile.",
};

export const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Tech Stack", to: "tech-stack" },
  { label: "Experience", to: "experience" },
  { label: "Certifications", to: "certifications" },
  { label: "Contact", to: "contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: personalInfo.github,
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: personalInfo.linkedin,
    icon: FaLinkedin,
  },
];

export const projects = [
  {
    title: "Back-End Absensi",
    period: "2026",
    category: "Backend API",
    description:
      "Backend API for an attendance system with authentication, user management, attendance records, image upload, and REST-based digital attendance workflows.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
      "Cloudinary",
      "Vercel",
    ],
    github: "https://github.com/GilbertusKristo",
    demo: "https://back-end-absensi.vercel.app/api-docs/",
    image: backendAbsensi,
    type: "backend",
    buttonLabel: "API Demo",
  },
  {
    title: "Pneumonia Detection Frontend",
    period: "2026",
    category: "Frontend Web Application",
    description:
      "Frontend web application for pneumonia detection that allows users to upload chest X-ray images and view prediction results through a clean and responsive interface.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel", "API Integration"],
    github: "https://github.com/GilbertusKristo",
    demo: "https://pneumonia-detection-liard.vercel.app/",
    image: pneumoniaDetectionImage,
    type: "frontend",
    buttonLabel: "Live Demo",
  },
  {
    title: "Pneumonia Detection Backend API",
    period: "2026",
    category: "Machine Learning API",
    description:
      "Backend API for pneumonia detection that receives chest X-ray images, processes prediction requests, and returns machine learning classification results.",
    tech: [
      "Python",
      "Flask API",
      "TensorFlow",
      "Machine Learning",
      "Hugging Face",
    ],
    github: "https://github.com/GilbertusKristo",
    demo: "https://gilbertusk-pneumonia-detection-api.hf.space",
    image: null,
    type: "backend",
    buttonLabel: "API Demo",
  },
  {
    title: "AI-Based Career Decider Application",
    period: "Oct 2024 - Dec 2024",
    category: "AI Web Application",
    description:
      "Job recommendation system that helps users determine suitable career paths and learning roadmaps through AI-based features.",
    tech: ["AI", "Web App", "Backend", "Learning Roadmap"],
    github: "https://github.com/GilbertusKristo",
    demo: "#",
    image: null,
    type: "frontend",
    buttonLabel: "Preview",
  },
  {
    title: "HealthBot",
    period: "Jun 2024 - Jul 2024",
    category: "AI Health Application",
    description:
      "AI-based application that supports healthy lifestyles through chatbot, consultation, sport schedule, and diet recommendation features.",
    tech: ["AI", "Health App", "Chatbot", "Recommendation System"],
    github: "https://github.com/GilbertusKristo",
    demo: "#",
    image: null,
    type: "frontend",
    buttonLabel: "Preview",
  },
];

export const techGroups = [
  {
    title: "Backend",
    icon: FiServer,
    description:
      "Teknologi utama untuk membangun server-side logic dan REST API.",
    items: [
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Java", icon: FaJava },
      { name: "REST API", icon: TbApi },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "Database",
    icon: FiDatabase,
    description:
      "Teknologi penyimpanan data untuk aplikasi web dan backend service.",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "Firestore", icon: SiFirebase },
    ],
  },
  {
    title: "Frontend & Web",
    icon: FiCode,
    description:
      "Teknologi pendukung untuk membangun tampilan web dan integrasi frontend.",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: FiCloud,
    description:
      "Tools pendukung untuk deployment, cloud computing, testing API, dan version control.",
    items: [
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Compute Engine", icon: SiGooglecloud },
      { name: "Cloud Run", icon: SiGooglecloud },
      { name: "App Engine", icon: SiGooglecloud },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
      { name: "Python", icon: FaPython },
    ],
  },
];

export const experiences = [
  {
    role: "Expert Staff",
    organization: "Hima Ilmu Komputer UNNES Semarang",
    period: "Jan 2023 - Dec 2023",
    description:
      "Bertugas sebagai Expert Staff pada Divisi Sosial Masyarakat dengan fokus pada perancangan dan pelaksanaan program pemberdayaan masyarakat, termasuk pelatihan teknologi informasi untuk masyarakat lokal.",
  },
  {
    role: "Chief Executive",
    organization: "Ilkom Social Journey Magelang",
    period: "Nov 2023",
    description:
      "Memimpin kegiatan Ilkom Social Journey di Magelang, mengatur koordinasi acara, mengontrol jalannya kegiatan, serta memastikan program sosial berjalan sesuai tujuan.",
  },
  {
    role: "Informatics Engineering Student",
    organization: "Semarang State University",
    period: "Jul 2022 - Present",
    description:
      "Mempelajari pengembangan perangkat lunak, web development, backend development, database, cloud computing, machine learning dasar, dan pengembangan aplikasi berbasis web maupun mobile.",
  },
  {
    role: "Bangkit Academy Cloud ComputingCohort",
    organization: "Bangkit Academy",
    period: "Aug 2023 - Dec 2023",
    description:
      "Mempelajari cloud computing, backend development, database, web development, dasar machine learning, serta deployment aplikasi berbasis cloud."
  },
];

export const certifications = [
  {
    name: "Applying Machine Learning with Google Cloud",
    issuer: "Dicoding Indonesia",
    credentialId: "07Z64952RPQR",
    year: "2024",
    issueDate: "Dec 2024",
    category: "Machine Learning",
    skills: ["Google Cloud", "Machine Learning", "AI"],
    pdfUrl: "/certifications/machine-learning-google-cloud.pdf",
  },
  {
    name: "Python For Data Science Batch 2",
    issuer: "HiColleagues",
    credentialId: "-",
    year: "2024",
    issueDate: "Nov 2024",
    category: "Data Science",
    skills: ["Python", "Data Science"],
    pdfUrl: "src\assets\sertifications\Sertifikat data sciance Gilbertus Kristo Anugerah Adviandito.pdf",
  },
  {
    name: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    credentialId: "6RPNYGVE5Z2M",
    year: "2024",
    issueDate: "Nov 2024",
    category: "Programming",
    skills: ["JavaScript", "Programming"],
    pdfUrl: "/certifications/javascript.pdf",
  },
  {
    name: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
    issuer: "Dicoding Indonesia",
    credentialId: "JMZV4L2OOXN9",
    year: "2024",
    issueDate: "Nov 2024",
    category: "Backend",
    skills: ["Back-End", "Google Cloud", "REST API"],
    pdfUrl: "/certifications/backend-google-cloud.pdf",
  },
  {
    name: "Menjadi Google Cloud Engineer",
    issuer: "Dicoding Indonesia",
    credentialId: "EYX4JM82OZDL",
    year: "2024",
    issueDate: "Nov 2024",
    category: "Cloud",
    skills: ["Google Cloud", "Cloud Engineer"],
    pdfUrl: "/certifications/google-cloud-engineer.pdf",
  },
  {
    name: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    credentialId: "1RXY2JWNMXVM",
    year: "2024",
    issueDate: "Nov 2024",
    category: "AI",
    skills: ["AI", "Machine Learning", "Deep Learning"],
    pdfUrl: "/certifications/belajar-dasar-ai.pdf",
  },
  {
    name: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    credentialId: "1RXYL5G5KPVM",
    year: "2024",
    issueDate: "Sep 2024",
    category: "Tools",
    skills: ["Git", "GitHub", "Version Control"],
    pdfUrl: "/certifications/git-github.pdf",
  },
  {
    name: "Pengenalan ke Logika Pemrograman Programming Logic 101",
    issuer: "Dicoding Indonesia",
    credentialId: "4EXGQW70DZRL",
    year: "2024",
    issueDate: "Sep 2024",
    category: "Logic",
    skills: ["Programming Logic", "Problem Solving"],
    pdfUrl: "/certifications/logika-pemrograman.pdf",
  },
];

export const contactItems = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `https://wa.me/${personalInfo.phone.replace("+", "")}`,
  },
  {
    label: "GitHub",
    value: "github.com/GilbertusKristo",
    href: personalInfo.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gilbertus-kristo",
    href: personalInfo.linkedin,
  },
  {
    label: "Location",
    value: personalInfo.location,
    href: "#",
  },
];

export const languages = [
  {
    name: "Indonesia",
    level: "Native proficiency",
  },
  {
    name: "English",
    level: "Elementary proficiency",
  },
];