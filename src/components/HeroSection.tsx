import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Linkedin, ExternalLink } from 'lucide-react';
import profileImage from '@/assets/profile-picture.jpg';
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-soft opacity-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold mb-6 leading-tight text-slate-700 lg:text-6xl">
              Hi, I'm{' '}
              <span className="bg-gradient-primary bg-clip-text font-bold text-slate-700">
                Janeesha
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-light">
              Creating intuitive and visually stunning user experiences
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Passionate UI/UX Designer specializing in wireframing, prototyping, and visual design. 
              Currently pursuing BSc. Hons in Information Technology at SLIIT University.
            </p>

            {/* Skills Preview */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {['UI/UX Design', 'Wireframing', 'Prototyping', 'Visual Design'].map(skill => <span key={skill} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium shadow-soft">
                  {skill}
                </span>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button onClick={scrollToContact} size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-medium hover-lift">
                <Mail className="mr-2 h-5 w-5" />
                Let's Work Together
              </Button>
              
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300" onClick={() => window.open('https://linkedin.com/in/janeesha-pabasara-3128ba317', '_blank')}>
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce mt-12">
              <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110 animate-float"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-strong border-8 border-background">
                <img src={profileImage} alt="Janeesha Pabasara - UI/UX Designer" className="w-full h-full object-cover hover-scale" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary-light rounded-full animate-float" style={{
              animationDelay: '1s'
            }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;