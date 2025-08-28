import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Layers, 
  Palette, 
  Smartphone, 
  Monitor,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Layers,
      title: 'Wireframing & Prototyping',
      description: 'Transform your ideas into interactive prototypes that bring your vision to life.',
      features: [
        'Low & High Fidelity Wireframes',
        'Interactive Prototypes',
        'User Flow Mapping',
        'Clickable Mockups'
      ],
      gradient: 'from-primary to-primary-light'
    },
    {
      icon: Palette,
      title: 'Visual Design & UI/UX',
      description: 'Create stunning visual experiences that captivate users and drive engagement.',
      features: [
        'Modern UI Design',
        'User Experience Design',
        'Design Systems',
        'Brand Integration'
      ],
      gradient: 'from-primary-light to-primary-lighter'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Design',
      description: 'Design intuitive mobile experiences that users love to interact with.',
      features: [
        'iOS & Android Design',
        'Mobile-First Approach',
        'Touch-Friendly Interfaces',
        'App Store Optimization'
      ],
      gradient: 'from-accent to-secondary'
    },
    {
      icon: Monitor,
      title: 'Website Design & Landing Pages',
      description: 'Build responsive web experiences that convert visitors into customers.',
      features: [
        'Responsive Web Design',
        'Landing Page Optimization',
        'E-commerce Design',
        'Web Accessibility'
      ],
      gradient: 'from-secondary to-accent'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive design solutions that combine creativity, functionality, and user-centric thinking 
            to deliver exceptional results for your projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 shadow-soft hover-lift transition-all duration-300 hover:shadow-medium animate-scale-in overflow-hidden relative group" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="p-4 bg-primary/10 rounded-xl inline-block">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <Card className="p-8 shadow-medium bg-gradient-hero animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-8">
            <h3 className="font-heading text-3xl font-semibold text-foreground mb-4">
              My Creative Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing together. I'm here to help bring your vision to life 
            with thoughtful design and seamless user experiences.
          </p>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-primary hover:opacity-90 text-white shadow-medium hover-lift"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;