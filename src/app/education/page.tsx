import Education from "@/components/Education";

// Placeholder data for education, to be replaced by resume parsing or dynamic data later if needed
const educationData = [
  {
    institution: "San Jose State University",
    degree: "M.S. in Artificial Intelligence",
    duration: "Expected Fall 2025 - Spring 2027",
    details:
      "Pursuing advanced studies in AI, focusing on machine learning, deep learning, and natural language processing.",
  },
  {
    institution: "San Jose State University",
    degree: "B.S. in Data Science",
    duration: "Graduated May 2025",
    details:
      "Relevant coursework: Data Structures and Algorithms, Database Management Systems, Processing Big Data, Data Visualization, Intro Artificial Intelligence, Intro Machine Learning, Applied Probability and Statistics, Object-Oriented Design. Dean's Scholar.",
  },
];

export default function EducationPage() {
  return <Education educationHistory={educationData} />;
}
