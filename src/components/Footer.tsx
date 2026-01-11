import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:Janeeshapaba@gmail.com'
    },

    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/janeesha-pabasara-3128ba317'
    }
  ];

  const handleSocialClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <button 
              onClick={scrollToTop}
              className="font-sans text-2xl font-semibold text-gray-900 hover:text-gray-700 transition-colors"
              type="button"
            >
              Janeesha Pabasara
            </button>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Passionate UI/UX Designer creating intuitive and visually stunning user experiences. 
              Specializing in wireframing, prototyping, and visual design.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="p-2 border-gray-300 hover:border-gray-900 hover:bg-gray-100"
                  onClick={(e) => handleSocialClick(e, social.href)}
                  aria-label={social.label}
                  type="button"
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left text-sm"
                  type="button"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:Janeeshapaba@gmail.com" 
                  className="hover:text-gray-900 transition-colors"
                >
                  Janeeshapaba@gmail.com
                </a>
              </p>
              
              
              <p className="text-gray-600 text-sm">
                <strong>Location:</strong> Colombo, Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;