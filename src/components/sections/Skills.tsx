import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Shield, Cloud, Terminal } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'C++', level: 75 },
        { name: 'HTML/CSS', level: 80 },
      ],
    },
    {
      title: 'Cyber Security',
      icon: Shield,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'Log Analysis', level: 85 },
        { name: 'Incident Investigation', level: 80 },
        { name: 'Web Monitoring', level: 75 },
        { name: 'Kali Linux', level: 60 },
      ],
    },
    {
      title: 'DevSecOps',
      icon: Cloud,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'CI/CD Basics', level: 65 },
        { name: 'Git', level: 80 },
        { name: 'Cloud Fundamentals', level: 70 },
      ],
    },
    {
      title: 'Tools & Systems',
      icon: Terminal,
      color: 'from-green-500 to-cyan-600',
      skills: [
        { name: 'Linux', level: 80 },
        { name: 'Wireshark', level: 70 },
        { name: 'Burp Suite', level: 65 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="relative py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technical proficiencies across security, development, and cloud operations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                   style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />

              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300">
                <div className={`inline-block p-3 bg-gradient-to-r ${category.color} rounded-lg mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
