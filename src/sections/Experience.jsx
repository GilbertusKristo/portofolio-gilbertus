import SectionTitle from "../components/SectionTitle";
import ExperienceItem from "../components/ExperienceItem";
import { experiences } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="relative bg-transparent px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Experience"
          title="Learning, building, and developing through real projects."
          description="Timeline singkat pengalaman akademik, project, dan pengembangan kemampuan sebagai backend developer."
        />

        <div className="max-w-4xl space-y-8">
          {experiences.map((item, index) => (
            <ExperienceItem
              key={item.role}
              item={item}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;