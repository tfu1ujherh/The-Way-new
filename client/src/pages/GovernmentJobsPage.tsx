import React, { useState } from 'react';
import { 
  Shield, 
  Building, 
  GraduationCap, 
  Heart, 
  Scale, 
  Search,
  Calendar,
  Users,
  BookOpen,
  FileText,
  Video,
  ArrowRight,
  Filter,
  Star
} from 'lucide-react';

const GovernmentJobsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Sectors', icon: Building },
    { id: 'defense', label: 'Defense', icon: Shield },
    { id: 'banking', label: 'Banking', icon: Building },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'healthcare', label: 'Healthcare', icon: Heart },
    { id: 'judiciary', label: 'Judiciary', icon: Scale }
  ];

  const levels = [
    { id: 'all', label: 'All Levels' },
    { id: 'after-10th', label: 'After 10th' },
    { id: 'after-12th', label: 'After 12th' },
    { id: 'after-graduation', label: 'After Graduation' }
  ];

  const jobData = [
    {
      id: 'ssc-cgl',
      title: 'SSC Combined Graduate Level (CGL)',
      category: 'administration',
      level: 'after-graduation',
      department: 'Staff Selection Commission',
      eligibility: 'Bachelor\'s degree from recognized university',
      ageLimit: '18-32 years',
      salary: '₹25,500 - ₹81,100',
      posts: [
        'Assistant Audit Officer',
        'Assistant Section Officer',
        'Income Tax Inspector',
        'Sub Inspector (CBI)',
        'Inspector (Central Excise)'
      ],
      examPattern: {
        tier1: 'Objective Questions (100 marks)',
        tier2: 'Objective Questions (400 marks)',
        tier3: 'Descriptive Paper (100 marks)',
        tier4: 'Computer Proficiency Test/Skill Test'
      },
      syllabus: [
        'General Intelligence & Reasoning',
        'General Awareness',
        'Quantitative Aptitude',
        'English Comprehension'
      ],
      resources: {
        books: [
          'Lucent\'s General Knowledge',
          'R.S. Aggarwal - Quantitative Aptitude',
          'Kiran\'s SSC CGL Previous Papers'
        ],
        youtube: [
          'Study IQ Education',
          'Adda247',
          'SSC ADDA',
          'Mahendras'
        ]
      },
      applicationFee: '₹100 (General), ₹0 (SC/ST/Women)',
      vacancies: '8000+',
      rating: 4.8
    },
    {
      id: 'banking-po',
      title: 'Bank Probationary Officer (PO)',
      category: 'banking',
      level: 'after-graduation',
      department: 'Various Public Sector Banks',
      eligibility: 'Bachelor\'s degree, 21-30 years',
      ageLimit: '21-30 years',
      salary: '₹23,700 - ₹42,020',
      posts: [
        'Probationary Officer',
        'Assistant Manager',
        'Scale-I Officer'
      ],
      examPattern: {
        preliminary: 'English, Reasoning, Quantitative Aptitude (100 marks)',
        mains: 'Reasoning, English, Quantitative Aptitude, General Awareness, Computer (200 marks)',
        interview: 'Personal Interview (100 marks)'
      },
      syllabus: [
        'English Language',
        'Quantitative Aptitude',
        'Reasoning Ability',
        'General Awareness',
        'Computer Knowledge'
      ],
      resources: {
        books: [
          'Objective General English by SP Bakshi',
          'Quantitative Aptitude by R.S. Aggarwal',
          'A Modern Approach to Verbal & Non-Verbal Reasoning'
        ],
        youtube: [
          'Banking Wallah',
          'Adda247',
          'Study Smart',
          'Oliveboard'
        ]
      },
      applicationFee: '₹175 (General), ₹175 (OBC), ₹0 (SC/ST)',
      vacancies: '4000+',
      rating: 4.7
    },
    {
      id: 'railway-ntpc',
      title: 'Railway NTPC (Non-Technical Popular Categories)',
      category: 'transport',
      level: 'after-12th',
      department: 'Railway Recruitment Board',
      eligibility: '12th Pass, 18-33 years',
      ageLimit: '18-33 years',
      salary: '₹19,900 - ₹35,400',
      posts: [
        'Junior Clerk cum Typist',
        'Accounts Clerk cum Typist',
        'Traffic Assistant',
        'Goods Guard',
        'Commercial cum Ticket Clerk'
      ],
      examPattern: {
        cbt1: 'General Awareness, Mathematics, General Intelligence (100 marks)',
        cbt2: 'Mathematics, General Intelligence, General Awareness, General Science (120 marks)',
        skillTest: 'Typing Test/Computer Based Aptitude Test'
      },
      syllabus: [
        'General Awareness',
        'Mathematics',
        'General Intelligence & Reasoning',
        'General Science'
      ],
      resources: {
        books: [
          'Railway NTPC Guide by Disha Experts',
          'Lucent\'s General Knowledge',
          'Kiran\'s Railway NTPC Previous Papers'
        ],
        youtube: [
          'Railway Adda',
          'StudyIQ',
          'Testbook',
          'Gradeup'
        ]
      },
      applicationFee: '₹250 (General), ₹250 (OBC), ₹0 (SC/ST)',
      vacancies: '35,000+',
      rating: 4.6
    },
    {
      id: 'upsc-cse',
      title: 'UPSC Civil Services Examination (CSE)',
      category: 'administration',
      level: 'after-graduation',
      department: 'Union Public Service Commission',
      eligibility: 'Bachelor\'s degree, 21-32 years',
      ageLimit: '21-32 years (General)',
      salary: '₹56,100 - ₹2,50,000',
      posts: [
        'IAS (Indian Administrative Service)',
        'IPS (Indian Police Service)',
        'IFS (Indian Foreign Service)',
        'IRS (Indian Revenue Service)'
      ],
      examPattern: {
        preliminary: 'General Studies Paper I & II (400 marks)',
        mains: 'Written Examination (1750 marks) + Essay, GS Papers, Optional Subject',
        interview: 'Personality Test (275 marks)'
      },
      syllabus: [
        'History, Geography, Polity',
        'Economics, Environment',
        'Science & Technology',
        'Current Affairs',
        'Optional Subject'
      ],
      resources: {
        books: [
          'NCERT Books (6th-12th)',
          'Indian Polity by M. Laxmikanth',
          'Geography by G.C. Leong',
          'Economic Survey'
        ],
        youtube: [
          'StudyIQ IAS',
          'Unacademy UPSC',
          'Drishti IAS',
          'Vision IAS'
        ]
      },
      applicationFee: '₹200 (General), ₹200 (OBC), ₹0 (SC/ST/Women)',
      vacancies: '900+',
      rating: 4.9
    }
  ];

  const filteredJobs = jobData.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || job.level === selectedLevel;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Government Job Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore comprehensive government job opportunities with detailed exam information, 
            preparation resources, and career guidance for all education levels.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Jobs</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by exam name or department..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sector</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.label}</option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Education Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {levels.map(level => (
                  <option key={level.id} value={level.id}>{level.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredJobs.length}</span> government job opportunities
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="space-y-8">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current text-yellow-400" />
                        <span className="text-sm font-medium text-gray-700">{job.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{job.department}</p>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{job.ageLimit}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{job.vacancies} posts</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm font-medium text-green-600">
                        <span>₹</span>
                        <span>{job.salary}</span>
                      </div>
                      <div className="text-sm text-blue-600 font-medium">
                        Fee: {job.applicationFee}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Eligibility */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Eligibility Criteria</h3>
                      <p className="text-gray-700">{job.eligibility}</p>
                    </div>

                    {/* Available Posts */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Available Posts</h3>
                      <div className="space-y-2">
                        {job.posts.map((post, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <ArrowRight className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-700 text-sm">{post}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Syllabus */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Syllabus Overview</h3>
                      <div className="flex flex-wrap gap-2">
                        {job.syllabus.map((subject, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Exam Pattern */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Exam Pattern</h3>
                      <div className="space-y-3">
                        {Object.entries(job.examPattern).map(([stage, description]) => (
                          <div key={stage} className="p-3 bg-gray-50 rounded-lg">
                            <h4 className="font-medium text-gray-900 capitalize mb-1">
                              {stage.replace(/([A-Z])/g, ' $1').trim()}
                            </h4>
                            <p className="text-sm text-gray-600">{description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Resources */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
                          <FileText className="w-4 h-4" />
                          <span>Books</span>
                        </h4>
                        <ul className="space-y-2">
                          {job.resources.books.slice(0, 3).map((book, index) => (
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
                          <span>YouTube</span>
                        </h4>
                        <ul className="space-y-2">
                          {job.resources.youtube.slice(0, 3).map((channel, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{channel}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-6 border-t border-gray-100">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Start Preparation</span>
                  </button>
                  <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Download Syllabus</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Need Personalized Guidance for Government Jobs?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our AI assistant can help you find the perfect government job based on your education, 
              interests, and career goals.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Get AI Guidance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentJobsPage;