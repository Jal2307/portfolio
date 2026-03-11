import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Target } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Driven professional committed to securing digital infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 space-y-6"
            >
              <h3 className="text-2xl font-bold text-cyan-400">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                Recent Cyber Security graduate with practical experience in threat detection, log analysis,
                and incident investigation. Demonstrated ability through Deloitte Australia's Cyber Security
                Job Simulation, where I analyzed complex security events and identified potential breaches.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently expanding expertise in DevSecOps practices, cloud security, and automation.
                Passionate about integrating security throughout the development lifecycle and building
                resilient systems. Actively seeking opportunities in UAE and internationally to contribute
                to cutting-edge cybersecurity initiatives.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                  Security Analysis
                </span>
                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                  Incident Response
                </span>
                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                  Cloud Security
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Education</h4>
                    <div className="space-y-2">
                      <p className="text-cyan-400 font-semibold">Bachelor of Cyber Security</p>
                      <p className="text-gray-400 text-sm">2024</p>
                      <p className="text-gray-300 text-sm">
                        Comprehensive study of network security, cryptography, ethical hacking,
                        and security frameworks
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Certifications</h4>
                    <div className="space-y-2">
                      <p className="text-cyan-400 font-semibold">Deloitte Cyber Security Simulation</p>
                      <p className="text-gray-400 text-sm">Forage Platform</p>
                      <p className="text-gray-300 text-sm">
                        Practical experience in web log analysis and security incident investigation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Target className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Career Goals</h4>
                    <p className="text-gray-300 text-sm">
                      Seeking Security Analyst or DevSecOps Engineer roles in UAE or internationally.
                      Focused on growing expertise in cloud security, automation, and threat intelligence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
