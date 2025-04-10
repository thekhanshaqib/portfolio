import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from 'lucide-react';


import { 
  Rocket, 
  User, 
  Briefcase, 
  LineChart,
  MessageCircle, 
  Send,
  Sparkles,
  Award,
  Mail,
  Phone,
  Linkedin,
  Database,
  Code,
  Users
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isFloatingBubbleVisible, setFloatingBubbleVisible] = useState(true);

  const sections = ['intro', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
  const currentIndex = sections.indexOf(activeSection);

  const nextSection = () => {
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1]);
    }
  };

  const goToSection = (section: string) => {
    setActiveSection(section);
    setFloatingBubbleVisible(false);
    setTimeout(() => setFloatingBubbleVisible(true), 500);
  };

  const skills = {
    technical: ["Advanced Excel", "Power BI", "SQL", "Python", "A/B Testing",  "Statistics", "Data Analysis", "ETL", "Data Visualization"],
    pmTools: ["Figma", "Wireframing", "Product Roadmap Planning", "User Stories", "Sprint Planning", "PRD", "BRD", "FRD", "Market Research", "Jira", "User Feedback Analysis", "Feature Prioritization", "KPIs & Metrics"],
    soft: ["Cross-functional leadership", "Requirement Gathering & Definition","Problem-solving", "Communication & Presentation"]
  };

  const certifications = [
    { name: "Agile Scrum Foundation", link: "#" },
    { name: "Introduction to Jira", link: "#" },
    { name: "Excel Skills", link: "#" },
    {name: "Data Analytics and Visualization", link: "#" },
    { name: "Power BI Certified Training", link: "#" },
    { name: "SQL for Data Analysis", link: "#" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-4 relative">
      <AnimatePresence mode="wait">
        {activeSection === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto text-center py-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-6"
            >
              <Database className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
            >
              Shaqib Iqbal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Data to Product — A Journey of Impact 🚀
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={nextSection}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
              >
                Start Exploring My Story <Sparkles className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        )}

        {activeSection === 'about' && (
  <motion.div
    key="about"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
  >
    <div className="flex items-center mb-6">
      <User className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mr-3" />
      <h2 className="text-3xl font-bold">About Me</h2>
    </div>
    <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
      <p>
        Aspiring Product Manager with a growth-driven journey from Data Analyst Intern to Lead Business Analyst. Skilled in Agile, product strategy, and stakeholder collaboration. Proven ability to drive user-centric solutions with measurable impact across data-driven and tech-focused environments.
      </p>
      <p>
        Recognized for excellent problem-solving skills and the ability to meet tight deadlines in fast-paced environments. 🌟
      </p>
      <p className="flex items-center">
        <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
        Based in Pune, India
      </p>
      <p>
        Background in Computer Science (BCA, 9.4 CGPA) 🎓
      </p>
    </div>

    {/* Timeline */}
    <div className="mt-10">
      <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">About Timeline</h3>
      <ol className="relative border-l border-indigo-300 dark:border-indigo-500">
        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-medium text-indigo-500">March 2021</time>
          <p className="text-base text-gray-600 dark:text-gray-300">Got Bachelor Degree</p>
        </li>
        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-medium text-indigo-500">June 2021</time>
          <p className="text-base text-gray-600 dark:text-gray-300">Started as Data Analyst Intern</p>
        </li>
        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-medium text-indigo-500">April 2022</time>
          <p className="text-base text-gray-600 dark:text-gray-300">Joined Mahavir AV Solutions as Business Analyst</p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-medium text-indigo-500">November 2024</time>
          <p className="text-base text-gray-600 dark:text-gray-300">Promoted to Lead Business Analyst</p>
        </li>
      </ol>
    </div>

    <Button onClick={nextSection} className="mt-6">
      Explore My Skills <LineChart className="ml-2" />
    </Button>
  </motion.div>
)}


        {activeSection === 'skills' && (
          <motion.div
            key="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h3 className="text-2xl font-bold">Technical Skills</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.technical.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-lg text-center hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all cursor-pointer"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-2" />
                  <h3 className="text-2xl font-bold">PM Tools</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.pmTools.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg text-center hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all cursor-pointer"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-pink-600 dark:text-pink-400 mr-2" />
                  <h3 className="text-2xl font-bold">Soft Skills</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {skills.soft.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-pink-50 dark:bg-pink-900/30 p-3 rounded-lg text-center hover:bg-pink-100 dark:hover:bg-pink-900/50 transition-all cursor-pointer"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <Button onClick={nextSection} className="mt-8">
              View Projects <Briefcase className="ml-2" />
            </Button>
          </motion.div>
        )}

        {activeSection === 'projects' && (
          <motion.div
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-4xl mx-auto grid grid-cols-1 gap-6"
          >
            

            {[
              {
                title: "BOQ (Bill of Quantity) Web Application",
                description: "Developed an automated procurement tracking system, enhancing cost estimation accuracy and reducing manual processing time.",
                metrics: 
                <ul className="list-disc pl-5 text-indigo-700 dark:text-indigo-300">
                <li>Increasing cost estimation accuracy by 99%</li>
                <li>Reduced manual processing time by 70%</li>
              </ul>,
                tech: ["React Js","TypeScript", "Node.js", "MongoDB"],
                role:<p className="flex items-center text-fuchsia-600 dark:text-fuchsia-400 font-semibold mb-3">
                <Briefcase className="w-5 h-5 mr-2" />
                Role - Project Manager
              </p>,
                teams:"Team Size: 3"
                
              },
              {
                title: "Demo Product Management Web Application",
                description: "Role-based web application to streamline the tracking and return of demo products assigned to sales partners.",
                metrics: <ul className="list-disc pl-5 text-indigo-700 dark:text-indigo-300">
                <li>System with automated alerts, reducing return delays by 50%.</li>
                <li>Integrated email notifications to streamline operations and reduce mismanagement issues.</li>
              </ul>,
                tech: ["React Js","TypeScript", "Node.js", "MYSQL"],
                role:<p className="flex items-center text-fuchsia-600 dark:text-fuchsia-400 font-semibold mb-3">
                <Briefcase className="w-5 h-5 mr-2" />
                Role - Project Manager
              </p>,
                teams:"Team Size: 5 "
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">{project.metrics}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div><br />
                  <p className="text-indigo-600 dark:text-black-400 font-semibold mb-3">{project.role}</p>
                  <p className="text-grey-400 dark:text-grey-400 font-semibold mb-3">{project.teams}</p>
                </Card>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-6"
            >
              <Button onClick={nextSection}>
                View Experience <LineChart className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* {activeSection === 'experience' && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-indigo-600 pl-4 py-2"
              >
                <h3 className="text-xl font-bold">Lead Business Analyst</h3>
                <p className="text-gray-600 dark:text-gray-400">Mahavir AV Solutions</p>
                <p className="text-sm text-gray-500">Apr 2022–Present</p>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Spearheaded the development of interactive Power BI dashboards, reducing manual reporting by 40%.</li>
                  <li>• Conducted market research and competitor analysis, enabling a 15% increase in lead conversion.</li>
                  <li>• Aligned stakeholders across sales, marketing, and operations to improve decision-making and execution.</li>
                  <li>• Collaborated with cross-functional teams to refine customer targeting strategies and optimize sales pipeline.</li>
                </ul>
              </motion.div>
            </div>
            <Button onClick={nextSection} className="mt-8">
              View Certifications <Award className="ml-2" />
            </Button>
          </motion.div>
        )} */}

{/* {activeSection === 'experience' && (
  <motion.div
    key="experience"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
  >
    <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
    <div className="space-y-6 border-l-4 border-indigo-600 pl-6 relative">

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="relative mb-6"
      >
        <div className="absolute -left-[32px] top-2 w-4 h-4 bg-indigo-600 rounded-full"></div>
        <p className="text-sm text-gray-500">June 2021 – March 2022</p>
        <h3 className="text-xl font-bold">Associate Data Analyst</h3>
        <p className="text-gray-600 dark:text-gray-400">AH Enterprises</p>
        <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
          <li>• Handled raw data and helped transform it into meaningful reports for business decisions.</li>
          <li>• Built daily/weekly trackers and performance dashboards using Excel and PowerPoint.</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="relative mb-6"
      >
        <div className="absolute -left-[32px] top-2 w-4 h-4 bg-indigo-600 rounded-full"></div>
        <p className="text-sm text-gray-500">April 2022 – October 2024</p>
        <h3 className="text-xl font-bold">Business Analyst</h3>
        <p className="text-gray-600 dark:text-gray-400">Mahavir AV Solutions</p>
        <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
          <li>• Collaborated with sales and backend teams to refine customer targeting strategies.</li>
          <li>• Conducted market research and competitor analysis, enabling a 15% increase in lead conversion.</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        <div className="absolute -left-[32px] top-2 w-4 h-4 bg-indigo-600 rounded-full"></div>
        <p className="text-sm text-gray-500">November 2024 – Present</p>
        <h3 className="text-xl font-bold">Lead Business Analyst</h3>
        <p className="text-gray-600 dark:text-gray-400">Mahavir AV Solutions</p>
        <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
          <li>• Spearheaded the development of interactive Power BI dashboards, reducing manual reporting by 40%.</li>
          <li>• Aligned stakeholders across sales, marketing, and operations to improve decision-making and execution.</li>
          <li>• Led end-to-end delivery of data-backed insights for high-stakes AV solution projects.</li>
        </ul>
      </motion.div>
    </div>

    <Button onClick={nextSection} className="mt-8">
      View Certifications <Award className="ml-2" />
    </Button>
  </motion.div>
)} */}


{activeSection === 'experience' && (
  <motion.div
    key="experience"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
  >
    <h2 className="text-3xl font-bold mb-6">Work Experience</h2>

    <div className="space-y-6 border-l-4 border-fuchsia-600 pl-6 relative">
      {[1, 2, 3].map((step, index) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: index * 0.3 }}
          className="relative mb-6"
        >
          <div className="absolute -left-[34px] top-2 w-4 h-4 bg-fuchsia-600 rounded-full"></div>

          {step === 1 && (
            <>
              <p className="text-sm text-gray-500">June 2021 – March 2022</p>
              <h3 className="text-xl font-bold">Associate Data Analyst</h3>
              <p className="text-gray-600 dark:text-gray-400">AH Enterprises</p>
              <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Handled raw data and helped transform it into meaningful reports for business decisions.</li>
                <li>• Built daily/weekly trackers and performance dashboards using Excel and PowerPoint.</li>
              </ul>
            </>
          )}

          {step === 2 && (
            <>
              <p className="text-sm text-gray-500">April 2022 – October 2024</p>
              <h3 className="text-xl font-bold">Business Analyst</h3>
              <p className="text-gray-600 dark:text-gray-400">Mahavir AV Solutions</p>
              <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Spearheaded the development of interactive Power BI dashboards, reducing manual reporting by 40%.</li>
                  <li>• Conducted market research and competitor analysis, enabling a 15% increase in lead conversion.</li>
                  <li>• Aligned stakeholders across sales, marketing, and operations to improve decision-making and execution.</li>
                  <li>• Collaborated with cross-functional teams to refine customer targeting strategies and optimize sales pipeline.</li>
              </ul>
            </>
          )}

          {step === 3 && (
            <>
              <p className="text-sm text-gray-500">November 2024 – Present</p>
              <h3 className="text-xl font-bold">Lead Business Analyst</h3>
              <p className="text-gray-600 dark:text-gray-400">Mahavir AV Solutions</p>
              <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Defined and executed marketing strategies in collaboration with marketing team.</li>
                <li>• Managed marketing budgets and tracked campaign ROI using performance dashboards.</li>
                <li>• Conducted A/B testing on campaign creatives and landing pages to identify high-performing assets.</li>
              </ul>
            </>
          )}
        </motion.div>
      ))}
    </div>

    <Button onClick={nextSection} className="mt-8">
      View Certifications <Award className="ml-2" />
    </Button>
  </motion.div>
)}


        {activeSection === 'certifications' && (
          <motion.div
            key="certifications"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6">Certifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.name}
                  href={cert.link}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-4 rounded-lg text-center hover:shadow-lg transition-all group"
                >
                  <Award className="w-8 h-8 mx-auto mb-2 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold">{cert.name}</p>
                </motion.a>
              ))}
            </div>
            <Button onClick={nextSection} className="mt-8">
              Contact Me <MessageCircle className="ml-2" />
            </Button>
          </motion.div>
        )}

        {activeSection === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6">Let's Connect!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <a href="mailto:shaqibiqbal.1212@gmail.com" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Mail className="w-6 h-6" />
                <span>shaqibiqbal.1212@gmail.com</span>
              </a>
              <a href="tel:+918707258890" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Phone className="w-6 h-6" />
                <span>+91 87072 58890</span>
              </a>
              <a href="https://linkedin.com/in/shaqib-iqbal-a15675170" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
            <form className="space-y-4">
              <Input
                placeholder="Your Name"
                className="w-full p-3 rounded-lg"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg"
              />
              <Textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-lg"
                rows={4}
              />
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Send Message <Send className="ml-2" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {isFloatingBubbleVisible && activeSection !== 'intro' && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-8 right-8 flex flex-col gap-2"
        >
          {sections.map((section) => (
            <motion.div
              key={section}
              whileHover={{ scale: 1.1 }}
              className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg ${
                activeSection === section
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
              }`}
              onClick={() => goToSection(section)}
            >
              {section === 'intro' && <Rocket className="w-6 h-6" />}
              {section === 'about' && <User className="w-6 h-6" />}
              {section === 'skills' && <Code className="w-6 h-6" />}
              {section === 'projects' && <Briefcase className="w-6 h-6" />}
              {section === 'experience' && <LineChart className="w-6 h-6" />}
              {section === 'certifications' && <Award className="w-6 h-6" />}
              {section === 'contact' && <MessageCircle className="w-6 h-6" />}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default App;