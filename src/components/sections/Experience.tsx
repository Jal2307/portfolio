import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experience = {
    company: 'Deloitte Australia',
    role: 'Cyber Security Job Simulation',
    platform: 'Forage Platform',
    period: '2024',
    description: 'Completed intensive cybersecurity simulation focused on real-world threat analysis and incident response.',
    achievements: [
      'Analyzed web server logs to identify and track suspicious activity patterns',
      'Conducted thorough investigation of potential security breaches using industry-standard methodologies',
      'Identified attack vectors and compiled detailed incident reports',
      'Simulated real-world security operations center (SOC) analyst responsibilities',
      'Demonstrated proficiency in log analysis tools and techniques',
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="relative py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Practical exposure to enterprise-level cybersecurity operations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />

            <div className="relative pl-20 pb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 transition-all duration-300"
              >
                <div className="absolute left-5 top-8 w-6 h-6 bg-cyan-500 rounded-full border-4 border-gray-900 shadow-lg shadow-cyan-500/50" />

                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{experience.role}</h3>
                      <p className="text-cyan-400 font-semibold">{experience.company}</p>
                      <p className="text-gray-400 text-sm">{experience.platform}</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
                    {experience.period}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                  {experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
