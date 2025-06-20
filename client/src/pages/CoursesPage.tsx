import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  Star,
  Filter,
  Search,
  Play,
  Download,
  CheckCircle,
  TrendingUp,
  Code,
  Heart,
  Calculator,
  Palette,
  Globe,
  Building
} from 'lucide-react';

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Courses', icon: BookOpen },
    { id: 'technology', label: 'Technology', icon: Code },
    { id: 'business', label: 'Business', icon: Building },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'science', label: 'Science', icon: Calculator },
    { id: 'healthcare', label: 'Healthcare', icon: Heart },
    { id: 'language', label: 'Languages', icon: Globe }
  ];

  const levels = [
    { id: 'all', label: 'All Levels' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' }
  ];

  const courses = [
    {
      id: 'web-development',
      title: 'Complete Web Development Bootcamp',
      category: 'technology',
      level: 'beginner',
      instructor: 'Dr. Angela Yu',
      duration: '65 hours',
      students: '850,000+',
      rating: 4.7,
      price: '₹3,499',
      originalPrice: '₹12,999',
      description: 'Learn to code and become a web developer in 2024 with HTML, CSS, Javascript, React, Node.js, MongoDB and more!',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      features: [
        '65 hours of video content',
        'Downloadable resources',
        'Certificate of completion',
        'Lifetime access',
        'Mobile and TV access'
      ],
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'data-science',
      title: 'Data Science and Machine Learning',
      category: 'technology',
      level: 'intermediate',
      instructor: 'Jose Portilla',
      duration: '42 hours',
      students: '500,000+',
      rating: 4.6,
      price: '₹2,999',
      originalPrice: '₹10,999',
      description: 'Learn Data Science and Machine Learning with Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn and more!',
      skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Data Visualization'],
      features: [
        '42 hours of video content',
        'Hands-on projects',
        'Real-world datasets',
        'Certificate of completion',
        'Q&A support'
      ],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'digital-marketing',
      title: 'Complete Digital Marketing Course',
      category: 'business',
      level: 'beginner',
      instructor: 'Phil Ebiner',
      duration: '23 hours',
      students: '300,000+',
      rating: 4.5,
      price: '₹1,999',
      originalPrice: '₹8,999',
      description: 'Master digital marketing with SEO, Google Ads, Facebook Ads, Social Media Marketing, Email Marketing and more!',
      skills: ['SEO', 'Google Ads', 'Facebook Marketing', 'Email Marketing', 'Analytics'],
      features: [
        '23 hours of video content',
        'Marketing templates',
        'Case studies',
        'Certificate of completion',
        'Community access'
      ],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design Masterclass',
      category: 'design',
      level: 'intermediate',
      instructor: 'Daniel Schifano',
      duration: '30 hours',
      students: '200,000+',
      rating: 4.8,
      price: '₹2,499',
      originalPrice: '₹9,999',
      description: 'Learn UI/UX design from scratch with Figma, Adobe XD, user research, wireframing, prototyping and more!',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping'],
      features: [
        '30 hours of video content',
        'Design templates',
        'Portfolio projects',
        'Certificate of completion',
        'Design resources'
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'financial-analysis',
      title: 'Financial Analysis and Modeling',
      category: 'business',
      level: 'advanced',
      instructor: 'Chris Haroun',
      duration: '18 hours',
      students: '150,000+',
      rating: 4.4,
      price: '₹3,999',
      originalPrice: '₹14,999',
      description: 'Master financial analysis, financial modeling, valuation, and investment banking with Excel and real case studies!',
      skills: ['Financial Modeling', 'Excel', 'Valuation', 'Investment Banking', 'Financial Analysis'],
      features: [
        '18 hours of video content',
        'Excel templates',
        'Real case studies',
        'Certificate of completion',
        'Bonus materials'
      ],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design Masterclass',
      category: 'design',
      level: 'beginner',
      instructor: 'Lindsay Marsh',
      duration: '35 hours',
      students: '400,000+',
      rating: 4.6,
      price: '₹1,799',
      originalPrice: '₹7,999',
      description: 'Learn graphic design with Photoshop, Illustrator, InDesign, logo design, branding, and portfolio creation!',
      skills: ['Photoshop', 'Illustrator', 'InDesign', 'Logo Design', 'Branding'],
      features: [
        '35 hours of video content',
        'Design projects',
        'Software tutorials',
        'Certificate of completion',
        'Design assets'
      ],
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Online Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your skills with our comprehensive online courses. Learn from industry experts 
            and advance your career with practical, hands-on training.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Courses</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by course name or topic..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
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
            Showing <span className="font-semibold">{filteredCourses.length}</span> courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">{course.rating}</span>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {course.description}
                  </p>
                  <p className="text-sm text-gray-500">by {course.instructor}</p>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {course.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{course.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                    <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have already transformed their careers with our expert-led courses.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Browse All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;