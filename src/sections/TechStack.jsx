import SectionTitle from "../components/SectionTitle";
import TechCard from "../components/TechCard";
import { techGroups } from "../constants";

const TechStack = () => {
  return (
    <section id="tech-stack" className="relative bg-transparent px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Tech Stack"
          title="Tools and technologies I use."
          description="Teknologi yang digunakan untuk membangun backend, database, frontend pendukung, testing API, dan deployment."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {techGroups.map((group) => (
            <TechCard key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;