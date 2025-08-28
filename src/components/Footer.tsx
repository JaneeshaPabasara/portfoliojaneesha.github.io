import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
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
      icon: Phone,
      label: 'Phone',
      href: 'tel:+94766139452'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/janeesha-pabasara-3128ba317'
    }
  ];

  return (
    <footer className="bg-gradient-soft border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <button 
              onClick={scrollToTop}
              className="font-heading text-2xl font-semibold text-primary hover:text-primary-light transition-colors"
            >
              Janeesha Pabasara
            </button>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
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
                  className="p-2 border-primary/20 hover:border-primary hover:bg-primary/10"
                  onClick={() => window.open(social.href, '_blank')}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:Janeeshapaba@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  Janeeshapaba@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Phone:</strong>{' '}
                <a 
                  href="tel:+94766139452" 
                  className="hover:text-primary transition-colors"
                >
                  +94 76 613 9452
                </a>
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Alternative:</strong>{' '}
                <a 
                  href="tel:+94725139452" 
                  className="hover:text-primary transition-colors"
                >
                  +94 72 513 9452
                </a>
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Location:</strong> Colombo, Sri Lanka
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Janeesha Pabasara. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and passion for great design.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button 
                onClick={() => scrollToSection('#about')}
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;