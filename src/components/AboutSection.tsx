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
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get to know the person behind the designs and discover what drives my passion for creating 
            exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                My Creative Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate university student specializing in UI/UX design, driven by the belief 
                that great design can transform how people interact with technology. My journey in design 
                started with a curiosity about human behavior and a love for creating beautiful, functional solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every project I work on is an opportunity to solve real problems and make a positive impact 
                on users' lives. I approach each design challenge with empathy, creativity, and a commitment 
                to excellence that pushes boundaries and exceeds expectations.
              </p>
            </div>

            {/* Education */}
            <Card className="p-6 shadow-soft hover-lift bg-gradient-soft">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">Education</h4>
                  <p className="font-medium text-foreground">BSc. Hons in Information Technology</p>
                  <p className="text-muted-foreground">SLIIT University • Expected Graduation: 2027</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Focusing on user experience design, software development, and emerging technologies
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Highlights */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center lg:text-left">
              What Defines Me
            </h3>
            
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 shadow-soft hover-lift transition-all duration-300 hover:shadow-medium">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-2">{highlight.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Personal Quote */}
            <Card className="p-8 bg-gradient-primary text-white shadow-medium mt-8">
              <blockquote className="text-lg font-medium italic text-center">
                "Design is not just what it looks like and feels like. Design is how it works."
              </blockquote>
              <p className="text-center mt-4 text-white/80">— My design philosophy</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;