import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

// Import your service images here
// Replace these with your actual image paths
import wireframingImage from '@/assets/proto.png';
import visualDesignImage from '@/assets/brush.png';
import mobileDesignImage from '@/assets/mobile.png';
import webDesignImage from '@/assets/dd.png';

const ServicesSection = () => {
  const services = [
    {
      image: wireframingImage, // Changed from icon to image
      title: 'Wireframing & Prototyping',
      description: 'Transform your ideas into interactive prototypes that bring your vision to life.',
      features: ['Low & High Fidelity Wireframes', 'Interactive Prototypes', 'User Flow Mapping', 'Clickable Mockups'],
      bgColor: 'bg-[#DBFDE4]'
    },
    {
      image: visualDesignImage, // Changed from icon to image
      title: 'Visual Design & UI/UX',
      description: 'Create stunning visual experiences that captivate users and drive engagement.',
      features: ['Modern UI Design', 'User Experience Design', 'Design Systems', 'Brand Integration'],
      bgColor: 'bg-[#BCEEFF]'
    },
    {
      image: mobileDesignImage, // Changed from icon to image
      title: 'Mobile App Design',
      description: 'Design intuitive mobile experiences that users love to interact with.',
      features: ['iOS & Android Design', 'Mobile-First Approach', 'Touch-Friendly Interfaces', 'App Store Optimization'],
      bgColor: 'bg-[#DBFDE4]'
    },
    {
      image: webDesignImage, // Changed from icon to image
      title: 'Website Design & Landing Pages',
      description: 'Build responsive web experiences that convert visitors into customers.',
      features: ['Responsive Web Design', 'Landing Page Optimization', 'E-commerce Design', 'Web Accessibility'],
      bgColor: 'bg-[#BCEEFF]'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-sans text-4xl font-bold mb-6 text-gray-900 sm:text-5xl">
            My <span className="text-gray-900 text-5xl font-bold">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive design solutions that combine creativity, functionality, and user-centric thinking 
            to deliver exceptional results for your projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 shadow-soft hover-lift transition-all duration-300 hover:shadow-medium animate-scale-in overflow-hidden relative group bg-white" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Background Accent */}
              <div className={`absolute inset-0 ${service.bgColor} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Image instead of Icon */}
                <div className="mb-6">
                  <div className={`p-4 ${service.bgColor} rounded-xl inline-block`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="h-8 w-8 object-contain scale-[2]"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-sans text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-gray-900 mr-3 flex-shrink-0" />
                      <span className="text-gray-900">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group/btn border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300" onClick={scrollToContact}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <Card className="p-8 shadow-medium bg-[#BCEEFF] animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-8">
            <h3 className="font-sans text-3xl font-semibold text-gray-900 mb-4">
              My Creative Process
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Every project follows a structured approach that ensures quality, creativity, 
              and alignment with your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals and users' },
              { step: '02', title: 'Design', desc: 'Creating wireframes and visual concepts' },
              { step: '03', title: 'Prototype', desc: 'Building interactive experiences' },
              { step: '04', title: 'Deliver', desc: 'Final designs and ongoing support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="font-sans text-2xl font-semibold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing together. I'm here to help bring your vision to life 
            with thoughtful design and seamless user experiences.
          </p>
          <Button size="lg" onClick={scrollToContact} className="bg-[#DBFDE4] hover:bg-[#DBFDE4]/90 text-gray-900 shadow-medium hover-lift">
            Start Your Project Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;