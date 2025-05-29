
import { Building, Calendar, MapPin, Star } from "lucide-react";

const Experience = () => {
  const experience = {
    position: "Former Trainer",
    company: "Regional Development Bank",
    location: "District Office, Matale",
    duration: "November 2021 - May 2021",
    type: "Internship",
    description: "Gained valuable experience in the banking sector, assisting with various operational tasks and supporting digital transformation initiatives.",
    responsibilities: [
      "Assisted in day-to-day banking operations and customer service",
      "Supported digital banking initiatives and system implementations",
      "Participated in training programs for banking procedures and regulations",
      "Collaborated with team members to improve operational efficiency",
      "Gained exposure to financial technology and banking software systems",
      "Developed professional communication skills in a corporate environment"
    ],
    skills: ["Banking Operations", "Customer Service", "Digital Systems", "Team Collaboration", "Professional Communication"],
    achievements: [
      "Successfully completed comprehensive banking training program",
      "Contributed to digital transformation projects",
      "Received positive feedback for dedication and learning ability"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-white/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Professional experience that shaped my understanding of business operations and technology
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{experience.position}</h3>
                  <div className="flex items-center gap-2 text-blue-100">
                    <Building size={18} />
                    <span className="text-lg">{experience.company}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 mb-2">
                    <span className="text-white font-medium">{experience.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-100">
                    <Calendar size={16} />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-100 mt-1">
                    <MapPin size={16} />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed text-lg">{experience.description}</p>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Star className="text-white" size={14} />
                  </div>
                  Key Responsibilities
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Gained */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Skills Gained</h4>
                <div className="flex flex-wrap gap-3">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h4>
                <div className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-600">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Star className="text-white" size={14} />
                      </div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking Forward</h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building on this foundation, I'm excited to pursue opportunities in web development, project management, 
              and business analysis where I can apply my technical skills and professional experience to create 
              meaningful impact in the technology sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
