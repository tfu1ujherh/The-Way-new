import React, { useState, useEffect } from 'react';
import { 
  User, 
  BookOpen, 
  Briefcase, 
  MessageSquare, 
  Award, 
  Target,
  Calendar,
  TrendingUp,
  Bell,
  Settings,
  Edit,
  Save,
  MapPin,
  Loader
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { userAPI } from '../utils/api';

const Dashboard = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [profile, setProfile] = useState({
    name: user?.name || '',
    bio: user?.profile?.bio || 'Passionate about finding the right career path',
    skills: user?.profile?.skills || ['Problem Solving', 'Communication', 'Leadership'],
    interests: user?.profile?.interests || ['Technology', 'Science', 'Innovation'],
    education: user?.profile?.education || 'Class 12 - Science Stream'
  });

  const [newSkill, setNewSkill] = useState('');
  const [newInterest, setNewInterest] = useState('');

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setIsLoading(true);
      const response = await userAPI.getDashboard();
      setDashboardData(response.data);
    } catch (error) {
      console.error('Dashboard load error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    try {
      const profileData = {
        name: profile.name,
        profile: {
          bio: profile.bio,
          skills: profile.skills,
          interests: profile.interests,
          education: profile.education
        }
      };

      await userAPI.updateProfile(profileData);
      updateUser(profileData);
      setIsEditing(false);
    } catch (error) {
      console.error('Profile update error:', error);
    }
  };

  const addSkill = () => {
    if (newSkill && !profile.skills.includes(newSkill)) {
      setProfile({ ...profile, skills: [...profile.skills, newSkill] });
      setNewSkill('');
    }
  };

  const addInterest = () => {
    if (newInterest && !profile.interests.includes(newInterest)) {
      setProfile({ ...profile, interests: [...profile.interests, newInterest] });
      setNewInterest('');
    }
  };

  const removeSkill = (skill: string) => {
    setProfile({ ...profile, skills: profile.skills.filter(s => s !== skill) });
  };

  const removeInterest = (interest: string) => {
    setProfile({ ...profile, interests: profile.interests.filter(i => i !== interest) });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const stats = [
    { 
      label: 'Pathways Explored', 
      value: dashboardData?.stats?.savedPathways || '0', 
      icon: MapPin, 
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      label: 'Roadmaps Saved', 
      value: dashboardData?.stats?.savedRoadmaps || '0', 
      icon: BookOpen, 
      color: 'from-green-500 to-teal-500' 
    },
    { 
      label: 'AI Conversations', 
      value: dashboardData?.stats?.aiConversations || '0', 
      icon: MessageSquare, 
      color: 'from-purple-500 to-pink-500' 
    },
    { 
      label: 'Resources Accessed', 
      value: dashboardData?.stats?.savedJobs || '0', 
      icon: Award, 
      color: 'from-orange-500 to-red-500' 
    }
  ];

  const recentActivity = dashboardData?.recentActivity || [
    { type: 'pathway', timestamp: new Date(), id: 'science-stream' },
    { type: 'ai_chat', timestamp: new Date(), question: 'What is data science?' },
    { type: 'roadmap', timestamp: new Date(), id: 'software-developer' }
  ];

  const recommendations = [
    {
      title: 'Computer Science Engineering',
      description: 'Perfect match for your tech interests and problem-solving skills',
      match: '92%',
      type: 'Career Path'
    },
    {
      title: 'Data Analytics Certification',
      description: 'Enhance your skills with this industry-recognized certification',
      match: '85%',
      type: 'Skill Development'
    },
    {
      title: 'GATE Preparation Guide',
      description: 'Comprehensive resources for engineering entrance preparation',
      match: '78%',
      type: 'Exam Prep'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
                <p className="text-blue-100">Continue your career journey with personalized guidance</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Profile</h2>
                <button
                  onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                  <span className="text-sm font-medium">{isEditing ? 'Save' : 'Edit'}</span>
                </button>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="text-lg font-semibold text-gray-900 bg-gray-50 border border-gray-300 rounded-lg px-3 py-1 text-center"
                    />
                  ) : (
                    <h3 className="text-lg font-semibold text-gray-900">{profile.name}</h3>
                  )}
                  <p className="text-sm text-gray-600 capitalize">{user?.role}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  {isEditing ? (
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                    />
                  ) : (
                    <p className="text-gray-600">{profile.bio}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.education}
                      onChange={(e) => setProfile({ ...profile, education: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-600">{profile.education}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {profile.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                        {isEditing && (
                          <button
                            onClick={() => removeSkill(skill)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        )}
                      </span>
                    ))}
                  </div>
                  {isEditing && (
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add skill"
                        className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
                        onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      />
                      <button
                        onClick={addSkill}
                        className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                      >
                        Add
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {profile.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                      >
                        {interest}
                        {isEditing && (
                          <button
                            onClick={() => removeInterest(interest)}
                            className="ml-2 text-green-600 hover:text-green-800"
                          >
                            ×
                          </button>
                        )}
                      </span>
                    ))}
                  </div>
                  {isEditing && (
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newInterest}
                        onChange={(e) => setNewInterest(e.target.value)}
                        placeholder="Add interest"
                        className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
                        onKeyPress={(e) => e.key === 'Enter' && addInterest()}
                      />
                      <button
                        onClick={addInterest}
                        className="px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
                      >
                        Add
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recommendations */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Personalized Recommendations</h2>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{rec.title}</h3>
                      <span className="text-sm font-medium text-green-600">{rec.match} match</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{rec.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{rec.type}</span>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Explore →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const getActivityIcon = (type: string) => {
                    switch (type) {
                      case 'pathway': return BookOpen;
                      case 'roadmap': return Target;
                      case 'ai_chat': return MessageSquare;
                      default: return User;
                    }
                  };
                  
                  const Icon = getActivityIcon(activity.type);
                  
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Icon className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">
                          {activity.type === 'pathway' && 'Explored pathway'}
                          {activity.type === 'roadmap' && 'Saved roadmap'}
                          {activity.type === 'ai_chat' && `Asked: "${activity.question}"`}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {new Date(activity.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;