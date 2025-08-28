import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Send, 
  Clock,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_contact', // You'll need to set up EmailJS service
        'template_contact', // You'll need to create a template
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'Janeeshapaba@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error!",
        description: "Failed to send message. Please try again or contact directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Janeeshapaba@gmail.com',
      href: 'mailto:Janeeshapaba@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 76 613 9452',
      href: 'tel:+94766139452',
      description: 'Call or WhatsApp me'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'janeesha-pabasara',
      href: 'https://linkedin.com/in/janeesha-pabasara-3128ba317',
      description: 'Connect with me professionally'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Colombo, Sri Lanka',
      href: '#',
      description: 'Available for remote work worldwide'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? I'd love to hear from you. 
            Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-soft animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                Send me a message
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:shadow-soft"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:shadow-soft"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry, collaboration, etc."
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-200 focus:shadow-soft"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-200 focus:shadow-soft resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:opacity-90 text-white shadow-medium hover-lift"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {/* Contact Details */}
            <Card className="p-8 shadow-soft">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Get in touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                      <a 
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-primary hover:text-primary-light transition-colors font-medium flex items-center group"
                      >
                        {item.value}
                        {item.href.startsWith('http') && (
                          <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Additional Info */}
            <Card className="p-8 shadow-soft bg-gradient-hero">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                  <p className="text-muted-foreground">
                    I typically respond within 24 hours. For urgent projects, 
                    feel free to call or message me directly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Project Discussion</h4>
                  <p className="text-muted-foreground">
                    I offer free consultations to discuss your project needs and 
                    provide initial recommendations.
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Call-to-Action */}
            <Card className="p-8 shadow-soft bg-gradient-primary text-white">
              <div className="text-center">
                <h4 className="font-heading text-xl font-semibold mb-4">
                  Let's build something amazing together!
                </h4>
                <p className="mb-6 text-white/90">
                  Whether it's a new project or just a friendly chat about design, 
                  I'm always excited to connect with fellow creatives and potential collaborators.
                </p>
                <Button 
                  variant="outline" 
                  className="bg-white text-primary border-white hover:bg-white/90"
                  onClick={() => window.open('https://linkedin.com/in/janeesha-pabasara-3128ba317', '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;