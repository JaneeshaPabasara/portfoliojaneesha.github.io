import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye } from 'lucide-react';
import vehicleProject from '@/assets/baybat.png';
import opulex from '@/assets/opulex.png';
import SLR from '@/assets/slr.png';
import cartoonApp from '@/assets/skribble1.png';
import flowerApp from '@/assets/florio.png';
import Aqualume from '@/assets/Aqualume 1.png';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Opulex - Multi-Property Marketplace',
      description: 'Comprehensive platform for buying, selling, and renting vehicles, homes, and land with advanced search capabilities.',
      image: opulex,
      category: 'Web Design',
      technologies: ['Figma', 'Web Design', 'UI/UX Design'],
      features: ['Multi-category property listings', 'Advanced search and filtering', 'User-friendly booking system', 'Modern and clean interface'],
      type: 'Website',
      year: '2024',
      projectUrl: 'https://www.figma.com/proto/VhlnqQzKbGvgDmQaKqYZes/Home-page?page-id=47%3A9&node-id=100-614&viewport=782%2C-279%2C0.22&t=SQlirAAs2eEL5CmY-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=100%3A614'
    },
    {
      id: 2,
      title: 'SkribbleTale - Cartoon Character Generator',
      description: 'Interactive mobile app allowing users to create and customize unique cartoon characters with various features.',
      image: cartoonApp,
      category: 'Mobile App',
      technologies: ['Figma', 'Mobile UI', 'Interactive Design'],
      features: ['Character customization tools', 'Real-time preview', 'Save and share functionality', 'Intuitive touch interface'],
      type: 'Mobile App',
      year: '2024',
      projectUrl: 'https://www.figma.com/proto/iPpCBhhCgtGbS8JmPWAczE/mobileApp?node-id=23-18&t=pj0ic7il9eoHNYQK-1&starting-point-node-id=23%3A18&content-scaling=fixed'
    },
    {
      id: 3,
      title: 'Florio - Flower Shop Mobile App',
      description: 'E-commerce mobile application for a flower shop with custom bouquet creation and delivery tracking.',
      image: flowerApp,
      category: 'Mobile App',
      technologies: ['Figma', 'E-commerce', 'Mobile UX'],
      features: ['Custom bouquet builder', 'Real-time delivery tracking', 'Seamless checkout process', 'Beautiful product gallery'],
      type: 'Mobile App',
      year: '2024',
      projectUrl: 'https://www.figma.com/proto/iPpCBhhCgtGbS8JmPWAczE/mobileApp?page-id=154%3A55&node-id=195-437&p=f&viewport=381%2C68%2C0.46&t=TkXqfnY4aJSnzEdr-1&scaling=scale-down&content-scaling=fixed'
    },
    {
      id: 4,
      title: 'Aqualume - Habit Tracker',
      description: 'Mobile habit tracking application designed to help users build better habits and maintain streaks with beautiful visualizations.',
      image: Aqualume,
      category: 'Mobile App',
      technologies: ['Figma', 'Mobile UI', 'UX Design'],
      features: ['Daily habit tracking', 'Progress visualization', 'Streak maintenance', 'Motivational reminders'],
      type: 'Mobile App',
      year: '2024',
      projectUrl: 'https://www.figma.com/proto/iPpCBhhCgtGbS8JmPWAczE/mobileApp?page-id=316%3A431&node-id=316-493&p=f&viewport=-356%2C162%2C0.32&t=cbFdyx04OuN9c4tk-1&scaling=scale-down&content-scaling=fixed'
    },
    {
      id: 5,
      title: 'SLR - Railway Ticket Reservation System',
      description: 'Streamlined online platform for Sri Lanka Railways ticket booking with real-time availability and seat selection.',
      image: SLR,
      category: 'Web Design',
      technologies: ['Figma', 'Web Design', 'Booking System'],
      features: ['Real-time train schedules', 'Interactive seat selection', 'Secure payment integration', 'Ticket management system'],
      type: 'Website',
      year: '2024',
      projectUrl: 'https://www.figma.com/proto/VhlnqQzKbGvgDmQaKqYZes/Home-page?page-id=6%3A376&node-id=249-649&viewport=231%2C106%2C0.19&t=LqsBqrSQzPkelO3o-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=249%3A649'
    },
    {
      id: 6,
      title: 'Baybat - Multi-Category E-Commerce Platform',
      description: 'Comprehensive online marketplace offering electronics, fashion, home appliances, and vehicles with seamless shopping experience.',
      image: vehicleProject,
      category: 'Web Design',
      technologies: ['Figma', 'E-commerce', 'Web App Design'],
      features: ['Multi-category product listings', 'Smart product filtering', 'Secure checkout process', 'Vendor management system'],
      type: 'Web App',
      year: '2024',
      projectUrl: 'https://www.figma.com/proto/VhlnqQzKbGvgDmQaKqYZes/Home-page?page-id=17%3A28&node-id=59-92&viewport=192%2C319%2C0.26&t=VEaYeK1tCnYm6nRx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=59%3A92'
    }
  ];

  const categories = ['All', 'Web Design', 'Mobile App', 'Landing Pages'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-sans text-4xl font-bold mb-6 text-gray-900 sm:text-5xl">
            My <span className="text-5xl font-bold text-gray-900">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring innovative solutions that blend creativity 
            with functionality to deliver exceptional user experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={category === selectedCategory ? 'default' : 'outline'}
              className={category === selectedCategory 
                ? 'bg-gray-900 text-white hover:bg-gray-800' 
                : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden shadow-soft hover-lift transition-all duration-300 hover:shadow-medium animate-scale-in group bg-white" style={{ animationDelay: `${index * 0.2}s` }}>
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
                  <Badge className="bg-[#BCEEFF] text-gray-900">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-sans text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <span>{project.type}</span>
                      <span className="mx-2">•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-[#DBFDE4] text-gray-900">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.projectUrl ? (
                    <>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                        onClick={() => window.open(project.projectUrl, '_blank', 'noopener,noreferrer')}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
                        onClick={() => window.open(project.projectUrl, '_blank', 'noopener,noreferrer')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" size="sm" className="flex-1 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                        <Eye className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                      <Button variant="outline" size="sm" className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Projects Showcase */}
        <Card className="p-8 shadow-medium bg-[#DBFDE4] animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="text-center mb-8">
            <h3 className="font-sans text-3xl font-semibold text-gray-900 mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              I'm constantly working on new and exciting projects. Each one is an opportunity to 
              push creative boundaries and deliver innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'E-commerce Platform', status: 'In Progress', type: 'Web Design' },
              { title: 'Healthcare App', status: 'Planning', type: 'Mobile App' },
              { title: 'Portfolio Website', status: 'Concept', type: 'Landing Page' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{item.type}</p>
                <Badge variant="secondary" className="text-xs bg-[#BCEEFF] text-gray-900">
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="font-sans text-2xl font-semibold text-gray-900 mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'd love to hear about your next project and help you create something amazing. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <Button size="lg" className="bg-[#BCEEFF] hover:bg-[#BCEEFF]/90 text-gray-900 shadow-medium hover-lift" onClick={() => {
            const element = document.querySelector('#contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;