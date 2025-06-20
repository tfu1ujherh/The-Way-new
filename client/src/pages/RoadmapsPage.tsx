import React, { useState } from 'react';
import { 
  Code, 
  Stethoscope, 
  Scale, 
  TrendingUp, 
  Brain, 
  Palette,
  ChevronRight,
  Clock,
  Award,
  BookOpen,
  Users,
  Target,
  CheckCircle,
  Star
} from 'lucide-react';

const RoadmapsPage = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState<string | null>(null);
  const [activePhase, setActivePhase] = useState<number>(0);

  const roadmaps = [
    {
      id: 'software-developer',
      title: 'Software Developer',
      icon: Code,
      description: 'Complete roadmap to become a full-stack software developer',
      duration: '12-18 months',
      difficulty: 'Intermediate',
      averageSalary: '₹8-15 LPA',
      color: 'from-blue-500 to-cyan-500',
      rating: 4.9,
      phases: [
        {
          title: 'Foundation Phase (Months 1-3)',
          description: 'Build strong programming fundamentals',
          duration: '3 months',
          skills: ['Programming Logic', 'Data Structures', 'Algorithms', 'Version Control'],
          activities: [
            'Learn a programming language (Python/Java/JavaScript)',
            'Understand basic data structures and algorithms',
            'Practice coding problems daily',
            'Learn Git and GitHub',
            'Build 2-3 simple projects'
          ],
          resources: [
            'FreeCodeCamp',
            'Codecademy',
            'LeetCode (Easy problems)',
            'GitHub Learning Lab'
          ]
        },
        {
          title: 'Specialization Phase (Months 4-8)',
          description: 'Choose your path: Frontend, Backend, or Full-stack',
          duration: '5 months',
          skills: ['Web Technologies', 'Frameworks', 'Databases', 'APIs'],
          activities: [
            'Master HTML, CSS, JavaScript',
            'Learn a frontend framework (React/Angular/Vue)',
            'Understand backend development (Node.js/Django/Spring)',
            'Learn database management (SQL/NoSQL)',
            'Build 3-5 projects with different technologies'
          ],
          resources: [
            'React Documentation',
            'MDN Web Docs',
            'Node.js Tutorials',
            'Database Design Course'
          ]
        },
        {
          title: 'Professional Phase (Months 9-12)',
          description: 'Develop industry-ready skills and build portfolio',
          duration: '4 months',
          skills: ['System Design', 'Testing', 'DevOps', 'Deployment'],
          activities: [
            'Learn system design basics',
            'Practice testing and debugging',
            'Understand CI/CD pipelines',
            'Deploy applications to cloud',
            'Build a comprehensive portfolio'
          ],
          resources: [
            'System Design Primer',
            'AWS/GCP Documentation',
            'Docker Tutorials',
            'Portfolio Examples'
          ]
        },
        {
          title: 'Career Phase (Months 13-18)',
          description: 'Job preparation and career advancement',
          duration: '6 months',
          skills: ['Interview Skills', 'Communication', 'Leadership', 'Networking'],
          activities: [
            'Practice coding interviews',
            'Build professional network',
            'Apply for internships/jobs',
            'Contribute to open source',
            'Continuous learning and skill updates'
          ],
          resources: [
            'Cracking the Coding Interview',
            'LinkedIn Learning',
            'Tech Meetups',
            'Open Source Projects'
          ]
        }
      ]
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      icon: TrendingUp,
      description: 'Comprehensive path to become a data science professional',
      duration: '15-20 months',
      difficulty: 'Advanced',
      averageSalary: '₹10-20 LPA',
      color: 'from-green-500 to-teal-500',
      rating: 4.8,
      phases: [
        {
          title: 'Mathematics & Statistics (Months 1-4)',
          description: 'Build strong mathematical foundation',
          duration: '4 months',
          skills: ['Statistics', 'Linear Algebra', 'Calculus', 'Probability'],
          activities: [
            'Learn descriptive and inferential statistics',
            'Master linear algebra concepts',
            'Understand probability distributions',
            'Practice statistical analysis',
            'Use tools like R or Python for calculations'
          ],
          resources: [
            'Khan Academy Statistics',
            'MIT Linear Algebra Course',
            'Statistics for Data Science',
            'Probability Course (Coursera)'
          ]
        },
        {
          title: 'Programming & Tools (Months 5-8)',
          description: 'Master programming languages and data tools',
          duration: '4 months',
          skills: ['Python/R', 'SQL', 'Data Visualization', 'Excel'],
          activities: [
            'Master Python for data science',
            'Learn data manipulation with Pandas',
            'Create visualizations with Matplotlib/Seaborn',
            'Database querying with SQL',
            'Build data analysis projects'
          ],
          resources: [
            'Python for Data Science Handbook',
            'Pandas Documentation',
            'SQL Tutorial (W3Schools)',
            'Tableau Public'
          ]
        },
        {
          title: 'Machine Learning (Months 9-14)',
          description: 'Learn ML algorithms and build predictive models',
          duration: '6 months',
          skills: ['Machine Learning', 'Deep Learning', 'Model Evaluation', 'Feature Engineering'],
          activities: [
            'Understand supervised and unsupervised learning',
            'Implement various ML algorithms',
            'Learn deep learning with TensorFlow/PyTorch',
            'Practice feature engineering',
            'Build end-to-end ML projects'
          ],
          resources: [
            'Coursera ML Course (Andrew Ng)',
            'Scikit-learn Documentation',
            'Deep Learning Specialization',
            'Kaggle Competitions'
          ]
        },
        {
          title: 'Specialization & Career (Months 15-20)',
          description: 'Specialize and prepare for data science roles',
          duration: '6 months',
          skills: ['Domain Expertise', 'Communication', 'Business Acumen', 'Advanced ML'],
          activities: [
            'Choose a domain (finance, healthcare, etc.)',
            'Learn to communicate insights effectively',
            'Understand business metrics and KPIs',
            'Practice advanced ML techniques',
            'Build impressive portfolio projects'
          ],
          resources: [
            'Domain-specific courses',
            'Data Storytelling Books',
            'Business Analytics Courses',
            'GitHub Portfolio Examples'
          ]
        }
      ]
    },
    {
      id: 'doctor',
      title: 'Medical Doctor',
      icon: Stethoscope,
      description: 'Traditional path to becoming a medical professional',
      duration: '10-12 years',
      difficulty: 'Expert',
      averageSalary: '₹12-25 LPA',
      color: 'from-red-500 to-pink-500',
      rating: 4.7,
      phases: [
        {
          title: 'Pre-Medical (Class 11-12)',
          description: 'Build foundation in medical sciences',
          duration: '2 years',
          skills: ['Biology', 'Chemistry', 'Physics', 'NEET Preparation'],
          activities: [
            'Master Biology concepts (human anatomy, physiology)',
            'Strong foundation in Chemistry (organic, inorganic)',
            'Physics fundamentals for medical applications',
            'Intensive NEET preparation',
            'Regular mock tests and practice'
          ],
          resources: [
            'NCERT Biology (11th & 12th)',
            'NEET Preparation Books',
            'Online NEET Courses',
            'Biology Lab Manual'
          ]
        },
        {
          title: 'Medical School (Years 1-5.5)',
          description: 'Complete MBBS degree with clinical exposure',
          duration: '5.5 years',
          skills: ['Medical Knowledge', 'Clinical Skills', 'Patient Care', 'Ethics'],
          activities: [
            'Study basic medical sciences (anatomy, physiology)',
            'Learn pathology and pharmacology',
            'Clinical rotations in various departments',
            'Internship in hospital settings',
            'Medical research and case studies'
          ],
          resources: [
            'Medical Textbooks (Harrison\'s, etc.)',
            'Clinical Skills Videos',
            'Medical Journals',
            'Hospital Training Programs'
          ]
        },
        {
          title: 'Specialization (Years 6-9)',
          description: 'Choose and complete medical specialization',
          duration: '3 years',
          skills: ['Specialized Knowledge', 'Advanced Procedures', 'Research', 'Teaching'],
          activities: [
            'Choose specialization (cardiology, surgery, etc.)',
            'Complete MD/MS degree',
            'Advanced clinical training',
            'Medical research and publications',
            'Teaching junior medical students'
          ],
          resources: [
            'Specialty Textbooks',
            'Medical Conferences',
            'Research Papers',
            'Medical Associations'
          ]
        },
        {
          title: 'Practice & Advancement (Years 10+)',
          description: 'Establish practice and continue professional development',
          duration: 'Ongoing',
          skills: ['Practice Management', 'Leadership', 'Innovation', 'Mentoring'],
          activities: [
            'Establish medical practice or join hospital',
            'Continuous medical education (CME)',
            'Medical research and innovation',
            'Mentor new doctors',
            'Healthcare administration roles'
          ],
          resources: [
            'Medical Practice Management',
            'Healthcare Leadership Courses',
            'Medical Innovation Programs',
            'Professional Medical Bodies'
          ]
        }
      ]
    },
    {
      id: 'civil-servant',
      title: 'Civil Servant (IAS)',
      icon: Scale,
      description: 'Path to becoming an Indian Administrative Service officer',
      duration: '2-3 years preparation',
      difficulty: 'Expert',
      averageSalary: '₹56,100 - ₹2,50,000',
      color: 'from-purple-500 to-indigo-500',
      rating: 4.9,
      phases: [
        {
          title: 'Foundation Building (Months 1-6)',
          description: 'Build strong foundation in basic subjects',
          duration: '6 months',
          skills: ['History', 'Geography', 'Polity', 'Economics'],
          activities: [
            'Read NCERT books thoroughly (6th-12th)',
            'Understand Indian history and culture',
            'Learn Indian geography systematically',
            'Study Indian Constitution and polity',
            'Basic economics and current affairs'
          ],
          resources: [
            'NCERT Books (All Classes)',
            'Laxmikanth Indian Polity',
            'Certificate Physical Geography',
            'Economic Survey'
          ]
        },
        {
          title: 'Intensive Preparation (Months 7-18)',
          description: 'Deep dive into syllabus and current affairs',
          duration: '12 months',
          skills: ['Advanced Topics', 'Current Affairs', 'Optional Subject', 'Answer Writing'],
          activities: [
            'Complete detailed study of all GS papers',
            'Choose and master optional subject',
            'Daily current affairs reading',
            'Regular answer writing practice',
            'Take mock tests regularly'
          ],
          resources: [
            'Standard Reference Books',
            'The Hindu Newspaper',
            'Optional Subject Books',
            'Previous Year Papers'
          ]
        },
        {
          title: 'Revision & Test Series (Months 19-24)',
          description: 'Consolidate knowledge and practice extensively',
          duration: '6 months',
          skills: ['Revision Techniques', 'Time Management', 'Exam Strategy', 'Interview Skills'],
          activities: [
            'Comprehensive revision of all subjects',
            'Intensive test series participation',
            'Mock interview practice',
            'Time management strategies',
            'Health and stress management'
          ],
          resources: [
            'Revision Notes',
            'Test Series Platforms',
            'Mock Interview Panels',
            'Previous Toppers\' Strategies'
          ]
        },
        {
          title: 'Final Preparation & Beyond (Months 25+)',
          description: 'Final push and post-selection training',
          duration: 'Variable',
          skills: ['Final Revision', 'Interview Preparation', 'Professional Training'],
          activities: [
            'Last-minute revision and practice',
            'Personality development for interview',
            'Stay updated with latest developments',
            'Foundation course at LBSNAA (if selected)',
            'Continuous learning as civil servant'
          ],
          resources: [
            'Current Affairs Magazines',
            'Interview Guidance Books',
            'LBSNAA Training Materials',
            'Administrative Case Studies'
          ]
        }
      ]
    }
  ];

  const selectedRoadmapData = roadmaps.find(r => r.id === selectedRoadmap);

  if (selectedRoadmap && selectedRoadmapData) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <button
              onClick={() => setSelectedRoadmap(null)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5 transform rotate-180" />
              <span>Back to Roadmaps</span>
            </button>
          </div>

          {/* Roadmap Header */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <div className="flex items-center space-x-6 mb-6 lg:mb-0">
                <div className={`p-4 bg-gradient-to-r ${selectedRoadmapData.color} rounded-2xl`}>
                  <selectedRoadmapData.icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedRoadmapData.title}</h1>
                  <p className="text-gray-600 mb-4">{selectedRoadmapData.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedRoadmapData.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4" />
                      <span>{selectedRoadmapData.difficulty}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>{selectedRoadmapData.averageSalary}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 fill-current text-yellow-400" />
                <span className="text-lg font-semibold text-gray-900">{selectedRoadmapData.rating}</span>
              </div>
            </div>
          </div>

          {/* Phase Navigation */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {selectedRoadmapData.phases.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activePhase === index
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  Phase {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Phase Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedRoadmapData.phases[activePhase].title}
                </h2>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {selectedRoadmapData.phases[activePhase].duration}
                </span>
              </div>
              <p className="text-gray-600 text-lg">
                {selectedRoadmapData.phases[activePhase].description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Skills & Activities */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Skills to Develop</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedRoadmapData.phases[activePhase].skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Activities & Milestones</h3>
                  <div className="space-y-3">
                    {selectedRoadmapData.phases[activePhase].activities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Resources</h3>
                <div className="space-y-4">
                  {selectedRoadmapData.phases[activePhase].resources.map((resource, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounde-lg">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{resource}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                disabled={activePhase === 0}
                className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4 transform rotate-180" />
                <span>Previous Phase</span>
              </button>

              <span className="text-sm text-gray-600">
                Phase {activePhase + 1} of {selectedRoadmapData.phases.length}
              </span>

              <button
                onClick={() => setActivePhase(Math.min(selectedRoadmapData.phases.length - 1, activePhase + 1))}
                disabled={activePhase === selectedRoadmapData.phases.length - 1}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <span>Next Phase</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Career Roadmaps
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed step-by-step career journeys with timelines, skills, and resources 
            to help you achieve your professional goals.
          </p>
        </div>

        {/* Roadmaps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmaps.map((roadmap) => {
            const Icon = roadmap.icon;
            return (
              <div
                key={roadmap.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedRoadmap(roadmap.id)}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 bg-gradient-to-r ${roadmap.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">{roadmap.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{roadmap.title}</h3>
                  <p className="text-gray-600 mb-6">{roadmap.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{roadmap.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Target className="w-4 h-4" />
                      <span>{roadmap.difficulty}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Award className="w-4 h-4" />
                      <span className="text-green-600 font-medium">{roadmap.averageSalary}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{roadmap.phases.length} phases</span>
                    <div className="flex items-center space-x-2 text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="font-medium">View Roadmap</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Can't Find Your Dream Career?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our AI assistant can help create a personalized roadmap for any career path 
              based on your unique goals and circumstances.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Create Custom Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapsPage;