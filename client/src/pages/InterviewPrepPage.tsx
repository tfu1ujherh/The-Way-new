import React, { useState } from 'react';
import { 
  MessageSquare, 
  Code, 
  Heart, 
  Building, 
  Scale, 
  TrendingUp,
  ChevronDown,
  ChevronRight,
  Play,
  CheckCircle,
  Clock,
  Users,
  Star,
  BookOpen,
  Video,
  Mic
} from 'lucide-react';

const InterviewPrepPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('technical');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'technical', label: 'Technical', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { id: 'behavioral', label: 'Behavioral', icon: MessageSquare, color: 'from-green-500 to-teal-500' },
    { id: 'healthcare', label: 'Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'finance', label: 'Finance', icon: TrendingUp, color: 'from-purple-500 to-indigo-500' },
    { id: 'government', label: 'Government', icon: Scale, color: 'from-orange-500 to-red-500' },
    { id: 'corporate', label: 'Corporate', icon: Building, color: 'from-gray-500 to-gray-700' }
  ];

  const interviewData = {
    technical: {
      title: 'Technical Interview Preparation',
      description: 'Master coding interviews and technical discussions',
      sections: [
        {
          id: 'programming',
          title: 'Programming & Algorithms',
          questions: [
            {
              id: 'q1',
              question: 'Explain the difference between Array and LinkedList',
              difficulty: 'Easy',
              type: 'Concept',
              answer: 'Arrays store elements in contiguous memory locations with fixed size, while LinkedLists use nodes with pointers, allowing dynamic size but requiring more memory for pointers.',
              tips: ['Draw diagrams to explain', 'Mention time complexities', 'Give real-world examples']
            },
            {
              id: 'q2',
              question: 'Implement a function to reverse a string',
              difficulty: 'Easy',
              type: 'Coding',
              answer: 'Multiple approaches: using built-in reverse(), two-pointer technique, or recursion. Focus on time/space complexity.',
              tips: ['Start with brute force', 'Optimize step by step', 'Handle edge cases']
            },
            {
              id: 'q3',
              question: 'Design a URL shortener like bit.ly',
              difficulty: 'Hard',
              type: 'System Design',
              answer: 'Discuss database design, encoding algorithms, caching strategies, load balancing, and scalability considerations.',
              tips: ['Start with requirements', 'Draw architecture diagram', 'Discuss trade-offs']
            }
          ]
        },
        {
          id: 'databases',
          title: 'Database & SQL',
          questions: [
            {
              id: 'q4',
              question: 'Explain ACID properties in databases',
              difficulty: 'Medium',
              type: 'Concept',
              answer: 'Atomicity, Consistency, Isolation, Durability - fundamental properties ensuring reliable database transactions.',
              tips: ['Give examples for each property', 'Relate to real scenarios', 'Mention transaction handling']
            },
            {
              id: 'q5',
              question: 'Write a SQL query to find the second highest salary',
              difficulty: 'Medium',
              type: 'Coding',
              answer: 'Use LIMIT with OFFSET, or subquery with MAX function excluding the highest salary.',
              tips: ['Consider multiple approaches', 'Handle edge cases', 'Explain query execution']
            }
          ]
        }
      ],
      tips: [
        'Practice coding on whiteboard or paper',
        'Think out loud during problem solving',
        'Ask clarifying questions before starting',
        'Discuss time and space complexity',
        'Test your solution with examples'
      ],
      resources: [
        'LeetCode Practice Problems',
        'Cracking the Coding Interview',
        'System Design Interview Book',
        'GeeksforGeeks'
      ]
    },
    behavioral: {
      title: 'Behavioral Interview Preparation',
      description: 'Master soft skills and behavioral questions',
      sections: [
        {
          id: 'leadership',
          title: 'Leadership & Teamwork',
          questions: [
            {
              id: 'b1',
              question: 'Tell me about a time you led a team through a difficult project',
              difficulty: 'Medium',
              type: 'STAR Method',
              answer: 'Use STAR method: Situation, Task, Action, Result. Focus on your leadership actions and measurable outcomes.',
              tips: ['Be specific with examples', 'Quantify results', 'Show learning and growth']
            },
            {
              id: 'b2',
              question: 'Describe a conflict you had with a team member and how you resolved it',
              difficulty: 'Medium',
              type: 'Conflict Resolution',
              answer: 'Show emotional intelligence, communication skills, and problem-solving approach.',
              tips: ['Stay professional', 'Focus on resolution', 'Show empathy and understanding']
            }
          ]
        },
        {
          id: 'motivation',
          title: 'Motivation & Goals',
          questions: [
            {
              id: 'b3',
              question: 'Why do you want to work for our company?',
              difficulty: 'Easy',
              type: 'Company Research',
              answer: 'Research company values, mission, recent achievements, and align with your career goals.',
              tips: ['Research thoroughly', 'Be genuine', 'Connect to your values']
            },
            {
              id: 'b4',
              question: 'Where do you see yourself in 5 years?',
              difficulty: 'Easy',
              type: 'Career Planning',
              answer: 'Show ambition while being realistic, align with company growth opportunities.',
              tips: ['Be realistic', 'Show growth mindset', 'Align with role progression']
            }
          ]
        }
      ],
      tips: [
        'Use the STAR method for behavioral questions',
        'Prepare specific examples from your experience',
        'Practice storytelling and clear communication',
        'Show self-awareness and learning ability',
        'Research the company culture thoroughly'
      ],
      resources: [
        'Behavioral Interview Questions Guide',
        'Company Glassdoor Reviews',
        'LinkedIn Company Research',
        'STAR Method Practice'
      ]
    },
    healthcare: {
      title: 'Healthcare Interview Preparation',
      description: 'Prepare for medical and healthcare positions',
      sections: [
        {
          id: 'clinical',
          title: 'Clinical Knowledge',
          questions: [
            {
              id: 'h1',
              question: 'Explain the pathophysiology of diabetes mellitus',
              difficulty: 'Medium',
              type: 'Medical Knowledge',
              answer: 'Discuss insulin resistance, beta-cell dysfunction, glucose metabolism, and complications.',
              tips: ['Use medical terminology correctly', 'Explain step by step', 'Mention latest guidelines']
            },
            {
              id: 'h2',
              question: 'How would you handle a medical emergency in the clinic?',
              difficulty: 'Hard',
              type: 'Clinical Scenario',
              answer: 'Follow emergency protocols, assess patient, call for help, provide immediate care, document.',
              tips: ['Show calm decision-making', 'Follow protocols', 'Prioritize patient safety']
            }
          ]
        },
        {
          id: 'ethics',
          title: 'Medical Ethics',
          questions: [
            {
              id: 'h3',
              question: 'How do you handle patient confidentiality?',
              difficulty: 'Medium',
              type: 'Ethics',
              answer: 'Discuss HIPAA compliance, patient rights, exceptions for safety, and professional boundaries.',
              tips: ['Know legal requirements', 'Give specific examples', 'Show ethical reasoning']
            }
          ]
        }
      ],
      tips: [
        'Stay updated with latest medical guidelines',
        'Practice clinical scenarios',
        'Understand healthcare regulations',
        'Show empathy and communication skills',
        'Demonstrate continuous learning'
      ],
      resources: [
        'Medical Interview Questions',
        'Clinical Guidelines (WHO, CDC)',
        'Medical Ethics Textbooks',
        'Healthcare Case Studies'
      ]
    }
  };

  const selectedData = interviewData[selectedCategory as keyof typeof interviewData];

  const toggleQuestionComplete = (questionId: string) => {
    const newCompleted = new Set(completedQuestions);
    if (newCompleted.has(questionId)) {
      newCompleted.delete(questionId);
    } else {
      newCompleted.add(questionId);
    }
    setCompletedQuestions(newCompleted);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interview Preparation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master your interviews with comprehensive question banks, expert tips, 
            and practice resources tailored to your industry.
          </p>
        </div>

        {/* Category Selector */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-gray-200'
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedData.title}</h2>
              <p className="text-gray-600 mb-6">{selectedData.description}</p>

              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm text-gray-600">
                    {completedQuestions.size} / {selectedData.sections.reduce((acc, section) => acc + section.questions.length, 0)} completed
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${(completedQuestions.size / selectedData.sections.reduce((acc, section) => acc + section.questions.length, 0)) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-6">
                {selectedData.sections.map((section) => (
                  <div key={section.id} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                      className="w-full p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                    >
                      <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600">{section.questions.length} questions</span>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-600 transition-transform ${
                            expandedSection === section.id ? 'transform rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </button>

                    {expandedSection === section.id && (
                      <div className="p-6 space-y-6">
                        {section.questions.map((question) => (
                          <div key={question.id} className="border border-gray-100 rounded-lg p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h4 className="font-medium text-gray-900">{question.question}</h4>
                                  <button
                                    onClick={() => toggleQuestionComplete(question.id)}
                                    className={`p-1 rounded-full transition-colors ${
                                      completedQuestions.has(question.id)
                                        ? 'text-green-600 hover:text-green-700'
                                        : 'text-gray-400 hover:text-gray-600'
                                    }`}
                                  >
                                    <CheckCircle className="w-5 h-5" />
                                  </button>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(question.difficulty)}`}>
                                    {question.difficulty}
                                  </span>
                                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                    {question.type}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <h5 className="font-medium text-gray-900 mb-2">Sample Answer:</h5>
                                <p className="text-gray-700 text-sm">{question.answer}</p>
                              </div>

                              <div>
                                <h5 className="font-medium text-gray-900 mb-2">Tips:</h5>
                                <ul className="space-y-1">
                                  {question.tips.map((tip, index) => (
                                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                                      <span>{tip}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="flex space-x-3 mt-4 pt-4 border-t border-gray-100">
                              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <Mic className="w-4 h-4" />
                                <span>Practice</span>
                              </button>
                              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                <Video className="w-4 h-4" />
                                <span>Record</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Tips */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Interview Tips</h3>
              <ul className="space-y-3">
                {selectedData.tips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Recommended Resources</h3>
              <ul className="space-y-3">
                {selectedData.resources.map((resource, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{resource}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock Interview */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2">Mock Interview</h3>
              <p className="text-blue-100 text-sm mb-4">
                Practice with AI-powered mock interviews
              </p>
              <button className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Start Mock Interview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrepPage;