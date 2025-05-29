
import { Code, Database, Globe, BarChart3, Users, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "Java", "JavaScript", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web & UI",
      icon: Globe,
      skills: ["HTML", "CSS", "React", "Figma"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      skills: ["Power BI", "Data Analysis", "SQL"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Project Management",
      icon: Users,
      skills: ["MS Project", "Business Analysis", "Team Leadership"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "System & Network",
      icon: Settings,
      skills: ["System Design", "Networking", "IT Management"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Office Suite",
      icon: Database,
      skills: ["MS Office", "Documentation", "Presentations"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const coreCompetencies = [
    { name: "Problem Solving", level: 90 },
    { name: "System Design", level: 85 },
    { name: "Web Development", level: 80 },
    { name: "Project Management", level: 75 },
    { name: "Business Analysis", level: 85 },
    { name: "Database Management", level: 80 }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and core competencies
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {coreCompetencies.map((competency, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{competency.name}</span>
                  <span className="text-blue-600 font-bold">{competency.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${competency.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
