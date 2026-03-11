import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Globe, Database, ExternalLink } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'API Interaction Automation Tool',
      description: 'Python-based automation tool for interacting with various APIs, streamlining data retrieval and processing workflows.',
      tech: ['Python', 'REST APIs', 'JSON', 'Requests Library'],
      icon: Code2,
      gradient: 'from-cyan-500 to-blue-600',
      features: [
        'Automated API authentication and request handling',
        'Data validation and error handling',
        'Configurable endpoints and parameters',
        'Response parsing and data extraction',
      ],
    },
    {
      title: 'Website Audit & Discovery Tool',
      description: 'Comprehensive web reconnaissance tool for discovering website sub-links, analyzing site structure, and extracting metadata.',
      tech: ['Python', 'BeautifulSoup', 'Web Scraping', 'URL Parsing'],
      icon: Globe,
      gradient: 'from-blue-500 to-purple-600',
      features: [
        'Recursive sub-link discovery and mapping',
        'Broken link detection and reporting',
        'Sitemap generation and visualization',
        'Metadata extraction and analysis',
      ],
    },
    {
      title: 'Structured Data Extraction System',
      description: 'Advanced data extraction framework for parsing and structuring information from various web sources.',
      tech: ['Python', 'Regex', 'Data Processing', 'File I/O'],
      icon: Database,
      gradient: 'from-purple-500 to-pink-600',
      features: [
        'Pattern-based data extraction',
        'Multi-format output support (JSON, CSV)',
        'Custom parsing rules engine',
        'Batch processing capabilities',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="relative py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Practical applications demonstrating security and automation expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`} />

              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 flex flex-col">
                <div className={`inline-block p-3 bg-gradient-to-r ${project.gradient} rounded-lg mb-4 w-fit`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed flex-grow">{project.description}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 pt-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 font-medium hover:bg-cyan-500/20 transition-all flex items-center justify-center gap-2 group-hover:border-cyan-500/60">
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
