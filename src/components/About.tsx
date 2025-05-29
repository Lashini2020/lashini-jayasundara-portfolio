
import { GraduationCap, Award, Calendar } from "lucide-react";

const About = () => {
  const education = [
    {
      institution: "Rajarata University of Sri Lanka",
      degree: "B.Sc. (Hons) in Information Systems",
      period: "2022 - Present",
      gpa: "GPA: 3.30",
      status: "ongoing"
    },
    {
      institution: "Sangamitta Girls' National School, Matale",
      degree: "GCE A/L",
      period: "2018 - 2020",
      gpa: "Results: 1A, 1B, 1C",
      status: "completed"
    },
    {
      institution: "Sirimavo Bandaranaike National School, Matale",
      degree: "GCE O/L",
      period: "2006 - 2017",
      gpa: "Results: 5A, 1B, 3C",
      status: "completed"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white" size={18} />
                </div>
                My Story
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                A highly motivated and detail-oriented Information System undergraduate with a strong foundation in 
                system design, programming, and networking. I'm passionate about leveraging IT solutions to solve 
                real-world problems, with an unwavering commitment to continuous learning and professional growth.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                Currently in my final year at Rajarata University of Sri Lanka, I've maintained a strong academic 
                record while gaining practical experience in web development, project management, and business analysis. 
                My goal is to contribute meaningfully to the tech industry while making a positive impact on society.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
                <Award className="mx-auto text-blue-600 mb-2" size={32} />
                <div className="text-2xl font-bold text-blue-900">3.30</div>
                <div className="text-blue-700 font-medium">Current GPA</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center border border-purple-200">
                <Calendar className="mx-auto text-purple-600 mb-2" size={32} />
                <div className="text-2xl font-bold text-purple-900">2025</div>
                <div className="text-purple-700 font-medium">Expected Graduation</div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Educational Journey</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {index !== education.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                  )}
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      edu.status === 'ongoing' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                        : 'bg-gradient-to-r from-gray-400 to-gray-600'
                    }`}>
                      <GraduationCap className="text-white" size={20} />
                    </div>
                    <div className="flex-1 bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
                      <h4 className="font-bold text-gray-900 text-lg">{edu.institution}</h4>
                      <p className="text-blue-600 font-medium">{edu.degree}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-500 text-sm">{edu.period}</span>
                        <span className="text-green-600 font-medium text-sm">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
