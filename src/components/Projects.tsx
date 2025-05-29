
import { ExternalLink, Github, Monitor, Smartphone, Database } from "lucide-react";

const Projects = () => {
  const featuredProject = {
    title: "JoyMart - Online Supermarket Platform",
    description: "A comprehensive e-commerce solution built with the MERN stack, featuring real-time interactions, user authentication, shopping cart functionality, and payment integration. Developed as part of my academic coursework to demonstrate full-stack development capabilities.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "CSS"],
    features: [
      "User Authentication & Authorization",
      "Real-time Product Browsing",
      "Shopping Cart Management",
      "Order Processing System",
      "Admin Dashboard",
      "Responsive Design"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    status: "Academic Project",
    year: "2024"
  };

  const additionalProjects = [
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing my skills and projects",
      tech: ["React", "Tailwind CSS", "TypeScript"],
      icon: Monitor,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard for visualizing business metrics and KPIs",
      tech: ["Power BI", "SQL", "Data Analysis"],
      icon: Database,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Mobile App Prototype",
      description: "UI/UX design prototype for mobile application",
      tech: ["Figma", "UI/UX Design", "Prototyping"],
      icon: Smartphone,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Showcasing my technical skills through real-world applications and academic projects
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover min-h-[400px] hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured Project
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {featuredProject.year}
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredProject.status}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredProject.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{featuredProject.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {featuredProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <ExternalLink size={18} />
                    View Project
                  </button>
                  <button className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                    <Github size={18} />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Projects */}
        <div className="grid md:grid-cols-3 gap-8">
          {additionalProjects.map((project, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 h-full hover:shadow-2xl transition-shadow duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className={`w-full bg-gradient-to-r ${project.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Interested in seeing more of my work?</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
