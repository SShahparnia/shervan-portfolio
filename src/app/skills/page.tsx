import Skills from "@/components/Skills";

// Placeholder data for skills, to be replaced by resume parsing or dynamic data later if needed
const skillsData = [
  { category: 'Programming Languages', items: ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'R'] },
  { category: 'Data Science & ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Keras'] },
  { category: 'Web Development', items: ['React', 'Next.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'Tailwind CSS', 'Firebase'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'Docker', 'Jupyter Notebooks', 'VS Code', 'Linux'] },
];

export default function SkillsPage() {
  return <Skills skills={skillsData} />;
}
