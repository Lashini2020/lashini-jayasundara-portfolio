
import { Briefcase, Globe, Users, Server, BarChart3, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Project Manager",
      description: "Leading cross-functional teams to deliver projects on time and within budget. Expertise in project planning, risk management, and stakeholder communication.",
      features: ["Project Planning", "Risk Assessment", "Team Leadership", "Budget Management"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Business Analysis",
      description: "Analyzing business requirements and processes to identify opportunities for improvement and digital transformation.",
      features: ["Requirements Gathering", "Process Optimization", "Data Analysis", "Solution Design"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Server,
      title: "Network Engineer",
      description: "Designing and maintaining robust network infrastructure to ensure optimal performance and security.",
      features: ["Network Design", "Security Implementation", "Performance Monitoring", "Troubleshooting"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "IT Manager",
      description: "Overseeing IT operations and strategy to align technology solutions with business objectives.",
      features: ["IT Strategy", "Team Management", "System Integration", "Digital Transformation"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "System Operator",
      description: "Monitoring and maintaining system performance to ensure high availability and optimal user experience.",
      features: ["System Monitoring", "Performance Tuning", "Incident Response", "Maintenance Planning"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating responsive and user-friendly web applications using modern technologies and best practices.",
      features: ["Frontend Development", "Backend Integration", "Responsive Design", "Performance Optimization"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Professional services I offer to help businesses leverage technology for growth and success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 h-full hover:shadow-2xl transition-shadow duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your project to life with my technical expertise and professional approach.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
