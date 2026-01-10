import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Palette, Figma, Smartphone, Monitor, TestTube, RefreshCw, Layers, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: 'Visual Design',
      description: 'Creating beautiful and cohesive visual experiences',
      skills: ['UI Design', 'Visual Design', 'Color Theory', 'Typography', 'Brand Identity']
    },
    {
      icon: Layers,
      title: 'UX Design',
      description: 'Crafting user-centered design solutions',
      skills: ['User Research', 'Wireframing', 'User Journey Mapping', 'Information Architecture']
    },
    {
      icon: Zap,
      title: 'Prototyping',
      description: 'Bringing ideas to life through interactive prototypes',
      skills: ['Interactive Prototypes', 'Micro-interactions',  'User Testing']
    },
    {
      icon: Smartphone,
      title: 'Mobile Design',
      description: 'Designing seamless mobile experiences',
      skills: ['iOS Design', 'Android Design', 'Mobile UI Patterns', 'Responsive Design']
    },
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'Creating engaging web interfaces and experiences',
      skills: ['Landing Pages', 'Web Applications', 'Responsive Layouts', 'Web Accessibility']
    },
    {
      icon: TestTube,
      title: 'Research & Testing',
      description: 'Validating designs through user feedback',
      skills: ['Usability Testing', 'A/B Testing', 'User Interviews', 'Analytics Review']
    }
  ];

  const tools = [
    { name: 'Figma', proficiency: 95, color: 'bg-[#BCEEFF]' },
    { name: 'Affinity Designer', proficiency: 85, color: 'bg-[#DBFDE4]' },
    { name: 'Webflow', proficiency: 80, color: 'bg-[#BCEEFF]' },
    { name: 'Adobe XD', proficiency: 75, color: 'bg-[#DBFDE4]' }
  ];

  const processes = [
    {
      icon: RefreshCw,
      title: 'Iterative Design Process',
      description: 'Continuously refining designs based on feedback and testing results'
    },
    {
      icon: TestTube,
      title: 'Usability Testing',
      description: 'Regular testing with real users to validate design decisions'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-sans text-4xl font-bold mb-6 text-gray-900 sm:text-5xl">
            Skills & <span className="text-gray-900 font-bold text-5xl">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for creating exceptional user experiences across all platforms and touchpoints.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 shadow-soft hover-lift transition-all duration-300 hover:shadow-medium animate-scale-in bg-white" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#BCEEFF] rounded-lg mr-4">
                  <category.icon className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900">{category.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-xs bg-[#DBFDE4] text-gray-900">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Proficiency */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Tools */}
          <Card className="p-8 shadow-soft animate-fade-in-up bg-white" style={{ animationDelay: '0.6s' }}>
            <h3 className="font-sans text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Figma className="mr-3 h-6 w-6 text-gray-900" />
              Design Tools
            </h3>
            
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{tool.name}</span>
                    
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 rounded-full ${tool.color} transition-all duration-1000 ease-out`} style={{ width: `${tool.proficiency}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Process */}
          <Card className="p-8 shadow-soft animate-fade-in-up bg-white" style={{ animationDelay: '0.8s' }}>
            <h3 className="font-sans text-2xl font-semibold text-gray-900 mb-6">
              Design Process
            </h3>
            
            <div className="space-y-6">
              {processes.map((process, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-[#DBFDE4] rounded-lg flex-shrink-0">
                    <process.icon className="h-5 w-5 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{process.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Design Process Steps */}
            <div className="mt-8 p-6 bg-[#BCEEFF] rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">My Design Workflow</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-2"></div>
                    <span className="text-gray-700">Research & Discovery</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-2"></div>
                    <span className="text-gray-700">Wireframing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-2"></div>
                    <span className="text-gray-700">Visual Design</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-2"></div>
                    <span className="text-gray-700">Prototyping</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-2"></div>
                    <span className="text-gray-700">Testing & Iteration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-2"></div>
                    <span className="text-gray-700">Final Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;