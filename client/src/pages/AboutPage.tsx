import React from 'react';
import { 
  Target, 
  Users, 
  Award, 
  Heart,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  BookOpen,
  Lightbulb,
  Shield,
  Zap,
  Brain,
  Code,
  GraduationCap
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '50,000+', label: 'Students Guided', icon: Users },
    { number: '1,000+', label: 'Career Paths', icon: Target },
    { number: '200+', label: 'Expert Counselors', icon: Award },
    { number: '95%', label: 'Success Rate', icon: TrendingUp }
  ];

  const values = [
    {
      icon: Target,
      title: 'Personalized Guidance',
      description: 'Every student is unique. We provide tailored career advice based on individual strengths, interests, and goals.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Resources',
      description: 'From educational pathways to government job opportunities, we offer complete information for informed decisions.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Our advanced AI technology provides instant, accurate answers to career questions and personalized recommendations.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Student-Centric Approach',
      description: 'We put students first, ensuring every feature and service is designed to maximize their success and satisfaction.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Trusted Platform',
      description: 'Built with security and privacy in mind, ensuring your personal information and career data remain protected.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving students worldwide with localized content and opportunities tailored to different regions and markets.',
      color: 'from-teal-500 to-green-500'
    }
  ];

  const team = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Former IIT professor with 15+ years in career counseling and educational technology',
      expertise: ['Career Counseling', 'Educational Psychology', 'Leadership']
    },
    {
      name: 'Rahul Kumar',
      role: 'Head of Technology',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ex-Google engineer specializing in AI and machine learning technologies',
      expertise: ['AI/ML', 'Software Architecture', 'Data Science']
    },
    {
      name: 'Dr. Anita Patel',
      role: 'Chief Academic Officer',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Educational psychologist with expertise in student development and learning',
      expertise: ['Educational Psychology', 'Curriculum Design', 'Student Assessment']
    },
    {
      name: 'Vikram Singh',
      role: 'Head of Counseling',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Certified career counselor with 12+ years of experience in student guidance',
      expertise: ['Career Guidance', 'Student Mentoring', 'Industry Relations']
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Founded with a mission to democratize career guidance for all students across India and beyond',
      icon: Lightbulb
    },
    {
      year: '2021',
      title: 'AI Integration',
      description: 'Launched our AI-powered career assistant using advanced machine learning technology',
      icon: Brain
    },
    {
      year: '2022',
      title: 'Rapid Growth',
      description: 'Reached 10,000+ students and expanded to cover 500+ career paths and educational opportunities',
      icon: TrendingUp
    },
    {
      year: '2023',
      title: 'Recognition',
      description: 'Won "Best EdTech Innovation" award and partnered with leading educational institutions',
      icon: Award
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Serving 50,000+ students worldwide with comprehensive career guidance and support',
      icon: Globe
    }
  ];

  const features = [
    {
      title: 'Educational Pathways',
      description: 'Comprehensive guidance for students after 10th, 12th, and graduation',
      icon: GraduationCap
    },
    {
      title: 'Government Jobs',
      description: 'Complete information about government job opportunities and exam preparation',
      icon: Shield
    },
    {
      title: 'Career Roadmaps',
      description: 'Visual career journeys with step-by-step guidance and timelines',
      icon: Target
    },
    {
      title: 'AI Assistant',
      description: '24/7 AI-powered career guidance and instant doubt resolution',
      icon: Brain
    },
    {
      title: 'Interview Preparation',
      description: 'Comprehensive interview preparation with practice questions and tips',
      icon: Users
    },
    {
      title: 'Online Courses',
      description: 'Access to premium courses and certifications for skill development',
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About The Way
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students to make informed career decisions through comprehensive guidance, 
            AI support, and personalized pathways to success.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                To bridge the gap between student aspirations and career reality by providing 
                comprehensive, personalized, and accessible career guidance that empowers every 
                student to make informed decisions about their future.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span>Democratize access to quality career guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span>Reduce career confusion and mismatched choices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span>Empower students with data-driven insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span>Provide 24/7 AI-powered career support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <Globe className="w-16 h-16 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                <p className="text-blue-100">
                  Serving students across multiple countries with localized career guidance 
                  and opportunities tailored to their regional job markets and educational systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Features Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools and resources for career success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${value.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate experts dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform career guidance
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="flex items-center space-x-3 mb-3">
                          {index % 2 === 0 ? (
                            <>
                              <div>
                                <div className="text-2xl font-bold text-blue-600 mb-1">{milestone.year}</div>
                                <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                              </div>
                              <Icon className="w-8 h-8 text-blue-600" />
                            </>
                          ) : (
                            <>
                              <Icon className="w-8 h-8 text-blue-600" />
                              <div>
                                <div className="text-2xl font-bold text-blue-600 mb-1">{milestone.year}</div>
                                <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                              </div>
                            </>
                          )}
                        </div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Built with Modern Technology</h2>
            <p className="text-gray-600">
              Our platform leverages cutting-edge technology to provide the best user experience
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Code className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">React.js</h4>
              <p className="text-sm text-gray-600">Modern Frontend</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Node.js</h4>
              <p className="text-sm text-gray-600">Robust Backend</p>
            </div>
            <div className="text-center">
              <Brain className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">AI Technology</h4>
              <p className="text-sm text-gray-600">Smart Assistance</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">MongoDB</h4>
              <p className="text-sm text-gray-600">Secure Database</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have already discovered their perfect career path with The Way.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;