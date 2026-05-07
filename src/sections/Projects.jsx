import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-transparent px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Selected backend and web development projects."
          description="Beberapa project yang menunjukkan kemampuan dalam membangun API, integrasi database, autentikasi, dan sistem web."
        />

        <div className="grid auto-rows-fr gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;