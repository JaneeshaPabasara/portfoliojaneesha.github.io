import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import profileImage from '@/assets/dp.png';

const HeroSection = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        {/* Mobile Layout (default) */}
        <div className="lg:hidden space-y-8">
          {/* Text Content - Mobile */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="font-sans text-4xl sm:text-5xl font-black leading-tight text-gray-900">
              Hi
            </h1>
            <h2 className="font-sans text-4xl sm:text-5xl font-black leading-tight text-gray-900">
              I'm Janeesha<br />
              UI/UX Designer 
            </h2>
            
            <p className="text-base text-gray-500 max-w-md">
              Creating intuitive digital experiences where users and ideas connect.
            </p>

            {/* CTA Button - Mobile */}
            <Button 
              onClick={scrollToContact} 
              size="lg" 
              className="bg-[#BCEEFF] hover:bg-[#BCEEFF]/90 text-gray-900 rounded-full px-8 py-6 text-base font-semibold shadow-none hover:shadow-sm transition-all group"
              type="button"
            >
              Hire Me!
              <div className="ml-2 bg-gray-900 rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </Button>
          </div>

          {/* Profile Image with Floating Tags - Mobile */}
          <div className="flex justify-center animate-scale-in relative" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-sm">
              {/* Background Shapes - Mobile */}
              <div className="absolute top-0 left-0 w-48 h-64 bg-[#DBFDE4] rounded-[80px] -z-10"></div>
              <div className="absolute top-8 left-16 w-56 h-64 bg-[#BCEEFF] rounded-[80px] -z-10"></div>
              
              {/* Profile Image - Mobile */}
              <div className="relative w-full h-72 flex items-center justify-center">
                <img 
                  src={profileImage} 
                  alt="Janeesha Pabasara - UI/UX Designer" 
                  className="w-56 h-56 rounded-full object-cover z-20" 
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>

              {/* Floating Tags - Mobile */}
              <div className="absolute top-4 right-0 bg-[#DBFDE4] text-gray-900 px-4 py-2 rounded-full font-semibold text-xs shadow-sm animate-float z-30">
                UI/UX Designer
              </div>
              
              <div className="absolute top-32 -left-4 bg-[#BCEEFF] text-gray-900 px-4 py-2 rounded-full font-semibold text-xs shadow-sm animate-float z-30" style={{
                animationDelay: '0.5s'
              }}>
                Webflow Developer
              </div>
              
              <div className="absolute bottom-8 right-2 bg-[#DBFDE4] text-gray-900 px-4 py-2 rounded-full font-semibold text-xs shadow-sm animate-float z-30" style={{
                animationDelay: '1s'
              }}>
                Product Designer
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
          {/* Text Content - Desktop */}
          <div className="space-y-8 animate-fade-in-up">
           <h1 className="font-sans text-4xl sm:text-5xl font-black leading-tight text-gray-900">
              Hi
            </h1>
            <h2 className="font-sans text-4xl sm:text-5xl font-black leading-tight text-gray-900">
              I'm Janeesha<br />
              UI/UX Designer 
            </h2>
            
            <p className="text-base text-gray-500 max-w-md">
              Creating intuitive digital experiences where users and ideas connect.
            </p>

            {/* CTA Button - Desktop */}
            <Button 
              onClick={scrollToContact} 
              size="lg" 
              className="bg-[#BCEEFF] hover:bg-[#BCEEFF]/90 text-gray-900 rounded-full px-8 py-6 text-base font-semibold shadow-none hover:shadow-sm transition-all group"
              type="button"
            >
              Hire Me!
              <div className="ml-2 bg-gray-900 rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </Button>
          </div>

          {/* Profile Image with Floating Tags - Desktop */}
          <div className="flex justify-center lg:justify-end animate-scale-in relative" style={{
            animationDelay: '0.3s'
          }}>
            <div className="relative">
              {/* Background Shapes - Desktop */}
              <div className="absolute top-0 -left-12 w-72 h-[500px] bg-[#DBFDE4] rounded-[100px] -z-10"></div>
              <div className="absolute top-12 left-24 w-80 h-[480px] bg-[#BCEEFF] rounded-[100px] -z-10"></div>
              
              {/* Profile Image - Desktop */}
              <div className="relative w-[400px] h-[500px] overflow-visible z-10">
                <img 
                  src={profileImage} 
                  alt="Janeesha Pabasara - UI/UX Designer" 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full object-cover z-20" 
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>

              {/* Floating Tags - Desktop */}
              <div className="absolute top-20 -right-8 bg-[#DBFDE4] text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-sm animate-float z-30">
                UI/UX Designer
              </div>
              
              <div className="absolute top-[45%] -left-12 bg-[#BCEEFF] text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-sm animate-float z-30" style={{
                animationDelay: '0.5s'
              }}>
                Webflow Developer
              </div>
              
              <div className="absolute bottom-32 -right-8 bg-[#DBFDE4] text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-sm animate-float z-30" style={{
                animationDelay: '1s'
              }}>
                Product Designer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;