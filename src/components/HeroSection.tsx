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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in-up">
            <div className="leading-none">
              <h1 className="font- open sans text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 mb-0">
                Hi
              </h1>
              <h2 className="font-open sans text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mt-0 leading-tight">
                I'm Janeesha<br />
                UI/UX Designer 
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-gray-500 max-w-md">
              Creating intuitive digital experiences where users and ideas connect.
            </p>

            
            <Button 
              onClick={scrollToContact} 
              size="lg" 
              className="bg-[#BCEEFF] hover:bg-[#BCEEFF]/90 text-gray-900 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-semibold shadow-none hover:shadow-sm transition-all group"
              type="button"
            >
              Hire Me!
              <div className="ml-2 bg-gray-900 rounded-full p-1 sm:p-1.5 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
            </Button>
          </div>

          {/* Floating tags and prof */}
          <div className="flex justify-center sm:justify-end animate-scale-in relative" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px]">
              {/* bg shapes */}
              <div className="absolute top-0 -left-8 sm:-left-12 w-48 sm:w-56 lg:w-72 h-64 sm:h-80 lg:h-[500px] bg-[#DBFDE4] rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] -z-10"></div>
              <div className="absolute top-6 sm:top-8 lg:top-12 left-12 sm:left-16 lg:left-24 w-52 sm:w-64 lg:w-80 h-64 sm:h-[350px] lg:h-[480px] bg-[#BCEEFF] rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] -z-10"></div>
              
              {/* img  */}
              <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[500px] flex items-center justify-center">
                <img 
                  src={profileImage} 
                  alt="Janeesha Pabasara - UI/UX Designer" 
                  className="w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover z-20" 
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>

              {/* floating tags */}
              <div className="absolute top-2 sm:top-4 lg:top-20 -right-2 sm:right-0 lg:-right-8 bg-[#DBFDE4] text-gray-900 px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full font-semibold text-[10px] sm:text-xs lg:text-sm shadow-sm animate-float z-30">
                UI/UX Designer
              </div>
              
              <div className="absolute top-[45%] -left-6 sm:-left-8 lg:-left-12 bg-[#BCEEFF] text-gray-900 px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full font-semibold text-[10px] sm:text-xs lg:text-sm shadow-sm animate-float z-30" style={{
                animationDelay: '0.5s'
              }}>
                Webflow Developer
              </div>
              
              <div className="absolute bottom-4 sm:bottom-8 lg:bottom-32 -right-2 sm:right-0 lg:-right-8 bg-[#DBFDE4] text-gray-900 px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full font-semibold text-[10px] sm:text-xs lg:text-sm shadow-sm animate-float z-30" style={{
                animationDelay: '1s'
              }}>
                Product Designer
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;