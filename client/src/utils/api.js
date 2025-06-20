import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getCurrentUser: () => api.get('/auth/me'),
  refreshToken: () => api.post('/auth/refresh'),
  logout: () => api.post('/auth/logout'),
};

// User API calls
export const userAPI = {
  getProfile: () => api.get('/user/profile'),
  updateProfile: (profileData) => api.put('/user/profile', profileData),
  getDashboard: () => api.get('/user/dashboard'),
  savePathway: (pathwayId) => api.post('/user/save-pathway', { pathwayId }),
  saveRoadmap: (roadmapId) => api.post('/user/save-roadmap', { roadmapId }),
  saveJob: (jobId) => api.post('/user/save-job', { jobId }),
};

// Pathways API calls
export const pathwaysAPI = {
  getCategories: () => api.get('/pathways'),
  getPathways: (category) => api.get(`/pathways/${category}`),
  getPathwayDetails: (category, pathwayId) => api.get(`/pathways/${category}/${pathwayId}`),
};

// Government Jobs API calls
export const governmentJobsAPI = {
  getJobs: (params) => api.get('/government-jobs', { params }),
  getJobDetails: (jobId) => api.get(`/government-jobs/${jobId}`),
  getJobStats: () => api.get('/government-jobs/stats/overview'),
};

// Roadmaps API calls
export const roadmapsAPI = {
  getRoadmaps: (params) => api.get('/roadmaps', { params }),
  getRoadmapDetails: (roadmapId) => api.get(`/roadmaps/${roadmapId}`),
  getPhaseDetails: (roadmapId, phaseId) => api.get(`/roadmaps/${roadmapId}/phases/${phaseId}`),
  getRoadmapStats: () => api.get('/roadmaps/stats/overview'),
};

// Courses API calls
export const coursesAPI = {
  getCourses: (params) => api.get('/courses', { params }),
  getCourseDetails: (courseId) => api.get(`/courses/${courseId}`),
  enrollCourse: (courseId) => api.post(`/courses/${courseId}/enroll`),
  getCourseStats: () => api.get('/courses/stats/overview'),
};

// Interview Prep API calls
export const interviewPrepAPI = {
  getCategories: () => api.get('/interview-prep/categories'),
  getCategoryData: (category) => api.get(`/interview-prep/${category}`),
  getQuestionDetails: (category, sectionId, questionId) => 
    api.get(`/interview-prep/${category}/${sectionId}/${questionId}`),
  markQuestionComplete: (category, sectionId, questionId) => 
    api.post(`/interview-prep/${category}/${sectionId}/${questionId}/complete`),
  getInterviewStats: () => api.get('/interview-prep/stats/overview'),
};

// AI Chat API calls
export const aiChatAPI = {
  sendMessage: (message) => api.post('/ai-chat/message', { message }),
  getChatHistory: (params) => api.get('/ai-chat/history', { params }),
  clearChatHistory: () => api.delete('/ai-chat/history'),
  getChatStats: () => api.get('/ai-chat/stats'),
};

export default api;