import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  ArrowRight,
  ChevronDown,
  Star,
  Video,
  FileText
} from 'lucide-react';

const PathwaysPage = () => {
  const [selectedPathway, setSelectedPathway] = useState<string>('after-10th');
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const pathwayOptions = [
    { id: 'after-10th', label: 'After 10th Class', icon: GraduationCap },
    { id: 'after-12th', label: 'After 12th Class', icon: BookOpen },
    { id: 'after-graduation', label: 'After Graduation', icon: Award }
  ];

  const pathwayData = {
    'after-10th': [
      {
        id: 'science-stream',
        title: 'Science Stream (11th & 12th)',
        duration: '2 years',
        eligibility: 'Pass in 10th with good marks in Science & Math',
        description: 'Foundation for engineering, medical, and research careers',
        subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology (Optional)'],
        careerScope: [
          'Engineering (B.Tech/B.E.)',
          'Medical (MBBS, BDS)',
          'Research & Development',
          'Pure Sciences (B.Sc.)',
          'Architecture'
        ],
        skills: ['Analytical Thinking', 'Problem Solving', 'Mathematical Skills', 'Scientific Reasoning'],
        resources: {
          books: [
            'NCERT Textbooks (Physics, Chemistry, Math)',
            'HC Verma - Concepts of Physics',
            'OP Tandon - Physical Chemistry'
          ],
          youtube: [
            'Khan Academy',
            'Vedantu',
            'Unacademy',
            'Physics Wallah'
          ]
        },
        rating: 4.8
      },
      {
        id: 'commerce-stream',
        title: 'Commerce Stream (11th & 12th)',
        duration: '2 years',
        eligibility: 'Pass in 10th, good in Math/Social Studies',
        description: 'Gateway to business, finance, and accounting careers',
        subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics/Informatics'],
        careerScope: [
          'Chartered Accountancy (CA)',
          'Company Secretary (CS)',
          'Bachelor of Commerce (B.Com)',
          'Business Administration (BBA)',
          'Banking & Finance'
        ],
        skills: ['Business Acumen', 'Financial Literacy', 'Communication', 'Analytical Skills'],
        resources: {
          books: [
            'NCERT Commerce Books',
            'T.S. Grewal - Accountancy',
            'Sandeep Garg - Economics'
          ],
          youtube: [
            'Commerce Baba',
            'Rajat Arora',
            'CA Parag Gupta',
            'Sunaina Rana'
          ]
        },
        rating: 4.6
      }
    ],
    'after-12th': [
      {
        id: 'engineering',
        title: 'Engineering (B.Tech/B.E.)',
        duration: '4 years',
        eligibility: '12th with PCM, qualify JEE/State CET',
        description: 'Technical degree leading to diverse engineering careers',
        subjects: ['Computer Science', 'Mechanical', 'Electrical', 'Civil', 'Electronics'],
        careerScope: [
          'Software Developer',
          'Data Scientist',
          'Mechanical Engineer',
          'Civil Engineer',
          'Product Manager'
        ],
        skills: ['Programming', 'Problem Solving', 'Design Thinking', 'Project Management'],
        resources: {
          books: [
            'JEE Main & Advanced Books',
            'Engineering Mathematics',
            'Programming Books (Language Specific)'
          ],
          youtube: [
            'Gate Lectures by Ravindrababu Ravula',
            'CodeWithHarry',
            'Gate Academy',
            'Unacademy Engineering'
          ]
        },
        rating: 4.9
      },
      {
        id: 'medical',
        title: 'Medical (MBBS)',
        duration: '5.5 years',
        eligibility: '12th with PCB, qualify NEET',
        description: 'Professional medical degree for healthcare careers',
        subjects: ['Anatomy', 'Physiology', 'Biochemistry', 'Pathology', 'Medicine'],
        careerScope: [
          'General Physician',
          'Specialist Doctor',
          'Surgeon',
          'Medical Researcher',
          'Public Health Expert'
        ],
        skills: ['Medical Knowledge', 'Empathy', 'Decision Making', 'Communication'],
        resources: {
          books: [
            'NCERT Biology (11th & 12th)',
            'KD Tripathi - Pharmacology',
            'Robbins Basic Pathology'
          ],
          youtube: [
            'Dr. Najeeb Lectures',
            'Osmosis',
            'Armando Hasudungan',
            'NEET Preparation Channels'
          ]
        },
        rating: 4.7
      }
    ],
    'after-graduation': [
      {
        id: 'mba',
        title: 'Master of Business Administration (MBA)',
        duration: '2 years',
        eligibility: 'Bachelor\'s degree, qualify CAT/MAT/XAT',
        description: 'Advanced business degree for leadership roles',
        subjects: ['Marketing', 'Finance', 'Operations', 'HR', 'Strategy'],
        careerScope: [
          'Management Consultant',
          'Product Manager',
          'Investment Banker',
          'Marketing Manager',
          'Entrepreneur'
        ],
        skills: ['Leadership', 'Strategic Thinking', 'Communication', 'Business Analysis'],
        resources: {
          books: [
            'CAT Preparation Books',
            'Case Studies in Business',
            'Marketing Management by Kotler'
          ],
          youtube: [
            'Study IQ MBA',
            'Unacademy CAT',
            'Career Launcher',
            'T.I.M.E. Tutorials'
          ]
        },
        rating: 4.8
      },
      {
        id: 'mtech',
        title: 'Master of Technology (M.Tech)',
        duration: '2 years',
        eligibility: 'B.Tech/B.E., qualify GATE',
        description: 'Advanced technical degree for specialization',
        subjects: ['Advanced Engineering Topics', 'Research Methodology', 'Specialization Subjects'],
        careerScope: [
          'Senior Software Engineer',
          'Research Scientist',
          'Technical Lead',
          'Academic Professor',
          'R&D Engineer'
        ],
        skills: ['Advanced Technical Skills', 'Research Abilities', 'Innovation', 'Problem Solving'],
        resources: {
          books: [
            'GATE Preparation Books',
            'Advanced Engineering Books',
            'Research Papers'
          ],
          youtube: [
            'GATE Academy',
            'Made Easy',
            'Ace Academy',
            'IIT Lectures'
          ]
        },
        rating: 4.6
      }
    ]
  };

  const selectedData = pathwayData[selectedPathway as keyof typeof pathwayData] || [];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Educational Pathways
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect educational journey for your career goals. Get detailed information 
            about courses, eligibility, career prospects, and resources.
          </p>
        </div>

        {/* Pathway Selector */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {pathwayOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedPathway(option.id)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedPathway === option.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {selectedData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Course Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600">{course.description}</p>
                  </div>
                  <div className="flex items-center space-x-1 ml-4">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>Popular Choice</span>
                  </div>
                </div>
              </div>

              {/* Course Details */}
              <div className="p-6 space-y-6">
                {/* Eligibility */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Eligibility</h4>
                  <p className="text-gray-600 text-sm">{course.eligibility}</p>
                </div>

                {/* Subjects */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Key Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Content */}
                <button
                  onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                  className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-900">View Detailed Information</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      expandedCourse === course.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedCourse === course.id && (
                  <div className="space-y-6 pt-4 border-t border-gray-100">
                    {/* Career Scope */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Career Opportunities</h4>
                      <div className="space-y-2">
                        {course.careerScope.map((career, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <ArrowRight className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700 text-sm">{career}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Required Skills */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Resources */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
                          <FileText className="w-4 h-4" />
                          <span>Recommended Books</span>
                        </h4>
                        <ul className="space-y-2">
                          {course.resources.books.map((book, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{book}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
                          <Video className="w-4 h-4" />
                          <span>YouTube Channels</span>
                        </h4>
                        <ul className="space-y-2">
                          {course.resources.youtube.map((channel, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{channel}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Explore This Pathway</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our AI career assistant can help you choose the perfect pathway based on your interests, 
              strengths, and career goals.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Chat with AI Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathwaysPage;