import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  Briefcase, 
  MapPin, 
  MessageSquare, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Play,
  ChevronRight,
  Sparkles,
  Globe,
  Brain,
  GraduationCap,
  Building,
  Heart,
  Code,
  Stethoscope,
  Scale
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Educational Pathways',
      description: 'Comprehensive guidance for students after 10th, 12th, and graduation with detailed course information, eligibility criteria, and career prospects.',
      color: 'from-emerald-500 to-teal-500',
      stats: '500+ Pathways',
      link: '/pathways'
    },
    {
      icon: Briefcase,
      title: 'Government Jobs',
      description: 'Explore government job opportunities across all sectors with exam details, preparation resources, and eligibility information.',
      color: 'from-violet-500 to-purple-500',
      stats: '100+ Exams',
      link: '/government-jobs'
    },
    {
      icon: BookOpen,
      title: 'Career Roadmaps',
      description: 'Visual career journeys for various professions with step-by-step guidance, skills requirements, and timeline planning.',
      color: 'from-orange-500 to-red-500',
      stats: '50+ Careers',
      link: '/roadmaps'
    },
    {
      icon: MessageSquare,
      title: 'AI Career Assistant',
      description: 'Get instant answers to your career questions with our advanced AI-powered chatbot available 24/7.',
      color: 'from-cyan-500 to-blue-500',
      stats: '24/7 Support',
      link: '/dashboard'
    },
    {
      icon: GraduationCap,
      title: 'Online Courses',
      description: 'Access premium courses and certifications to enhance your skills and advance your career prospects.',
      color: 'from-pink-500 to-rose-500',
      stats: '1000+ Courses',
      link: '/courses'
    },
    {
      icon: Target,
      title: 'Interview Preparation',
      description: 'Master your interviews with comprehensive question banks, mock tests, and expert tips for all industries.',
      color: 'from-amber-500 to-yellow-500',
      stats: '500+ Questions',
      link: '/interview-prep'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Students Guided', icon: Users },
    { number: '500+', label: 'Career Paths', icon: MapPin },
    { number: '100+', label: 'Government Exams', icon: Award },
    { number: '95%', label: 'Success Rate', icon: Target }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Engineering Student',
      content: 'The Way helped me choose the right engineering branch after 12th. The AI chatbot answered all my doubts instantly and the career roadmaps were incredibly detailed!',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Rahul Kumar',
      role: 'Civil Services Aspirant',
      content: 'The government jobs section is comprehensive. I found all the information I needed for UPSC preparation in one place. The study materials and resources are top-notch.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Anita Patel',
      role: 'Data Analyst',
      content: 'The career roadmap for data analytics was incredibly detailed. It guided me through every step of my journey from learning to landing my dream job.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const benefits = [
    'Personalized career recommendations based on your profile and interests',
    'Comprehensive exam preparation resources and study materials',
    'Real-time AI support for instant career guidance and doubt resolution',
    'Visual career progression maps with detailed timelines and milestones',
    'Government job opportunity alerts and application notifications',
    'Interview preparation materials and mock tests for all industries',
    'Expert counselor support and one-on-one guidance sessions',
    'Industry insights and market trends for informed decision making'
  ];

  const popularCareers = [
    { name: 'Software Developer', growth: '+22%', salary: '₹8-15 LPA', icon: Code },
    { name: 'Data Scientist', growth: '+35%', salary: '₹10-20 LPA', icon: TrendingUp },
    { name: 'Civil Services', growth: '+8%', salary: '₹56K-2.5L PM', icon: Scale },
    { name: 'Medical Doctor', growth: '+15%', salary: '₹12-25 LPA', icon: Stethoscope },
    { name: 'Business Analyst', growth: '+18%', salary: '₹6-12 LPA', icon: Building },
    { name: 'Digital Marketer', growth: '+25%', salary: '₹4-10 LPA', icon: Globe }
  ];

  const pathwayOptions = [
    {
      title: 'After 10th Class',
      description: 'Choose the right stream and foundation for your future',
      options: ['Science Stream', 'Commerce Stream', 'Arts Stream', 'Vocational Courses'],
      icon: GraduationCap,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'After 12th Class',
      description: 'Explore higher education and career opportunities',
      options: ['Engineering', 'Medical', 'Commerce', 'Arts', 'Law', 'Design'],
      icon: BookOpen,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'After Graduation',
      description: 'Advanced degrees and professional development',
      options: ['MBA', 'M.Tech', 'Civil Services', 'Job Market', 'Entrepreneurship'],
      icon: Award,
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium">AI-Powered Career Guidance Platform</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Find Your
                  <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Perfect Career Path
                  </span>
                  with The Way
                </h1>
                
                <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                  Comprehensive career counseling platform with AI support, government job insights, 
                  educational pathways, and personalized guidance for students at every stage of their journey.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/auth"
                  className="group bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold text-slate-900"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-slate-300">
                  <p className="text-sm">Trusted by</p>
                  <p className="font-semibold">50,000+ Students Worldwide</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-emerald-300 text-sm font-medium">AI Assistant Online</span>
                    </div>
                    <Brain className="w-6 h-6 text-cyan-300" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-slate-200 text-sm">
                        "What career options do I have after 12th science?"
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg p-4">
                      <p className="text-white text-sm">
                        Based on your science background, you have excellent options in Engineering (JEE), Medical (NEET), Research, Pure Sciences, and emerging fields like Data Science and AI. I can provide detailed guidance for each path...
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Powered by Advanced AI Technology</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mb-4 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Educational Pathways Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Educational Pathways for Every Stage
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive guidance for students at every educational milestone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pathwayOptions.map((pathway, index) => {
              const Icon = pathway.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200 group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${pathway.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{pathway.title}</h3>
                  <p className="text-slate-600 mb-6">{pathway.description}</p>
                  <div className="space-y-2 mb-6">
                    {pathway.options.map((option, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span className="text-slate-700 text-sm">{option}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/pathways"
                    className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span>Explore Pathways</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need for Career Success
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive tools and resources to guide you through every step of your career journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{feature.description}</p>
                  <Link
                    to={feature.link}
                    className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span>Explore {feature.title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Careers Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Trending Career Opportunities
            </h2>
            <p className="text-xl text-slate-600">
              Explore high-growth careers with excellent prospects and competitive salaries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCareers.map((career, index) => {
              const Icon = career.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-slate-100 group">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-8 h-8 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                      {career.growth}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{career.name}</h3>
                  <p className="text-slate-600 text-sm mb-3">Average Salary</p>
                  <p className="text-lg font-bold text-emerald-600">{career.salary}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  Why Choose The Way?
                </h2>
                <p className="text-xl text-slate-600">
                  We provide comprehensive career guidance that goes beyond traditional counseling
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/auth"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <TrendingUp className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">Growth Tracking</h4>
                  <p className="text-sm text-slate-600">Monitor your progress and achievements</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <Shield className="w-8 h-8 text-violet-600 mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">Secure & Private</h4>
                  <p className="text-sm text-slate-600">Your data is protected and confidential</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <Zap className="w-8 h-8 text-orange-600 mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">Instant Results</h4>
                  <p className="text-sm text-slate-600">Get immediate answers and guidance</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <Globe className="w-8 h-8 text-cyan-600 mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">Global Opportunities</h4>
                  <p className="text-sm text-slate-600">Explore careers worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Students Say About Us
            </h2>
            <p className="text-xl text-slate-600">
              Real success stories from students who found their way to success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Showcase */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Meet Your AI Career Assistant
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Get instant, personalized career guidance powered by advanced AI technology. 
                Ask questions, get recommendations, and receive expert advice 24/7.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-300" />
                  <span>Instant answers to career questions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-300" />
                  <span>Personalized recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-300" />
                  <span>24/7 availability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-300" />
                  <span>Conversation history tracking</span>
                </div>
              </div>
              <Link
                to="/auth"
                className="inline-flex items-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transform hover:scale-105 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Try AI Assistant</span>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Brain className="w-6 h-6 text-cyan-300" />
                    <span className="font-medium">AI Career Assistant</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-3 text-right">
                      <p className="text-sm">"I'm confused about choosing between engineering and medical. Can you help?"</p>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg p-3">
                      <p className="text-sm">
                        I'd be happy to help! Both are excellent choices. Let me ask a few questions to give you personalized guidance:
                        <br /><br />
                        1. What subjects do you enjoy most?
                        <br />
                        2. Are you more interested in technology or healthcare?
                        <br />
                        3. How do you feel about long study periods?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Discover Your Perfect Career Path?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already found their way to success with our comprehensive career guidance platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Free Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pathways"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Features</span>
              <BookOpen className="w-5 h-5" />
            </Link>
          </div>
          <div className="mt-8 text-slate-400 text-sm">
            No credit card required • Free forever • Join 50,000+ students
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;