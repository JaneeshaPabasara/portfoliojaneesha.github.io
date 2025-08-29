import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye, Github } from 'lucide-react';
import vehicleProject from '@/assets/vehicle-project.jpg';
import cartoonApp from '@/assets/cartoon-app.jpg';
import flowerApp from '@/assets/flower-app.jpg';
const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const projects = [{
    id: 1,
    title: 'Vehicle Selling Website',
    description: 'Modern e-commerce platform for buying and selling vehicles with advanced search and filtering capabilities.',
    image: vehicleProject,
    category: 'Web Design',
    technologies: ['Figma', 'Webflow', 'UI/UX Design'],
    features: ['Responsive design across all devices', 'Advanced vehicle search and filtering', 'User-friendly booking system', 'Modern and clean interface'],
    type: 'Website',
    year: '2024'
  }, {
    id: 2,
    title: 'Cartoon Character Generator',
    description: 'Interactive mobile app allowing users to create and customize unique cartoon characters with various features.',
    image: cartoonApp,
    category: 'Mobile App',
    technologies: ['Figma', 'Mobile UI', 'Interactive Design'],
    features: ['Character customization tools', 'Real-time preview', 'Save and share functionality', 'Intuitive touch interface'],
    type: 'Mobile App',
    year: '2024'
  }, {
    id: 3,
    title: 'Flower Shop Mobile App',
    description: 'E-commerce mobile application for a flower shop with custom bouquet creation and delivery tracking.',
    image: flowerApp,
    category: 'Mobile App',
    technologies: ['Figma', 'E-commerce', 'Mobile UX'],
    features: ['Custom bouquet builder', 'Real-time delivery tracking', 'Seamless checkout process', 'Beautiful product gallery'],
    type: 'Mobile App',
    year: '2024'
  }];
  const categories = ['All', 'Web Design', 'Mobile App', 'Landing Pages'];
  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory);
  return <section id="portfolio" className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl font-bold mb-6 text-slate-700 sm:text-5xl">
            My <span className="text-5xl font-bold text-slate-700">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring innovative solutions that blend creativity 
            with functionality to deliver exceptional user experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => <Button key={category} variant={category === selectedCategory ? 'default' : 'outline'} className={category === selectedCategory ? 'bg-gradient-primary text-white' : 'border-primary text-primary hover:bg-primary hover:text-white'} onClick={() => setSelectedCategory(category)}>
              {category}
            </Button>)}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {filteredProjects.map((project, index) => <Card key={project.id} className="overflow-hidden shadow-soft hover-lift transition-all duration-300 hover:shadow-medium animate-scale-in group" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button size="sm" className="bg-white text-black hover:bg-white/90">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Project Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-primary text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <span>{project.type}</span>
                      <span className="mx-2">•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>)}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>)}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary hover:text-white">
                    <Eye className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button variant="outline" size="sm" className="border-muted-foreground text-muted-foreground hover:bg-muted-foreground hover:text-white">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Additional Projects Showcase */}
        <Card className="p-8 shadow-medium bg-gradient-hero animate-fade-in-up" style={{
        animationDelay: '1s'
      }}>
          <div className="text-center mb-8">
            <h3 className="font-heading text-3xl font-semibold text-foreground mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm constantly working on new and exciting projects. Each one is an opportunity to 
              push creative boundaries and deliver innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            title: 'E-commerce Platform',
            status: 'In Progress',
            type: 'Web Design'
          }, {
            title: 'Healthcare App',
            status: 'Planning',
            type: 'Mobile App'
          }, {
            title: 'Portfolio Website',
            status: 'Concept',
            type: 'Landing Page'
          }].map((item, index) => <div key={index} className="text-center p-6 bg-background/50 rounded-lg">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{item.type}</p>
                <Badge variant="secondary" className="text-xs">
                  {item.status}
                </Badge>
              </div>)}
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'd love to hear about your next project and help you create something amazing. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-medium hover-lift" onClick={() => {
          const element = document.querySelector('#contact');
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }}>
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>;
};
export default PortfolioSection;