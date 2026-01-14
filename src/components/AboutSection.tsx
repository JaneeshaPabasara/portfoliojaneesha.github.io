import { Card } from '@/components/ui/card';
import { GraduationCap, Heart, Target, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Heart,
      title: 'Passionate Designer',
      description: 'Driven by the desire to create meaningful and impactful user experiences'
    },
    {
      icon: Target,
      title: 'User-Centered Approach',
      description: 'Always putting users first in every design decision and creative process'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'Thriving in team environments and building strong professional relationships'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-sans text-4xl font-bold mb-6 text-gray-900 sm:text-5xl">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get to know the person behind the designs and discover what drives my passion for creating 
            exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="font-sans text-2xl font-semibold text-gray-900 mb-4">
                My Creative Journey
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I am currently pursuing a Data Science–specialized degree at SLIIT, while actively exploring
                my passion for UI/UX design. My interest in design comes from a love for creativity and a 
                desire to craft unique, visually stunning, and user-friendly experiences.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                I enjoy transforming ideas into clean, minimal, and intuitive designs that focus on both aesthetics
                and usability. For me, UI/UX design is about understanding users, thinking creatively, and building 
                meaningful digital experiences that leave a lasting impression.
              </p>
            </div>

            {/* Education */}
            <Card className="p-6 shadow-soft hover-lift bg-[#DBFDE4]">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-lg">
                  <GraduationCap className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Education</h4>
                  <p className="font-medium text-gray-900">BSc. Hons in Information Technology</p>
                  <p className="text-gray-700">SLIIT University • Expected Graduation: 2027</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Focusing on user experience design, software development, and emerging technologies
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Highlights */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-sans text-2xl font-semibold text-gray-900 mb-8 text-center lg:text-left">
              What Defines Me
            </h3>
            
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 shadow-soft hover-lift transition-all duration-300 hover:shadow-medium bg-white">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#BCEEFF] rounded-lg flex-shrink-0">
                    <highlight.icon className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">{highlight.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;