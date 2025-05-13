import Projects from "@/components/Projects";
import projectsData from "@/data/projects.json"; // Import the project data

export default function ProjectsPage() {
  return <Projects projects={projectsData} />;
}
