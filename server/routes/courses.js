import express from 'express';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Mock courses data
const coursesData = [
  {
    id: 'web-development',
    title: 'Complete Web Development Bootcamp',
    category: 'technology',
    level: 'beginner',
    instructor: 'Dr. Angela Yu',
    duration: '65 hours',
    students: '850,000+',
    rating: 4.7,
    price: 3499,
    originalPrice: 12999,
    description: 'Learn to code and become a web developer in 2024 with HTML, CSS, Javascript, React, Node.js, MongoDB and more!',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    features: [
      '65 hours of video content',
      'Downloadable resources',
      'Certificate of completion',
      'Lifetime access',
      'Mobile and TV access'
    ],
    curriculum: [
      'HTML & CSS Fundamentals',
      'JavaScript Programming',
      'React.js Development',
      'Node.js & Express',
      'Database Management',
      'Full-stack Projects'
    ],
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    enrollmentCount: 850000,
    completionRate: 78,
    jobPlacementRate: 85
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
    price: 2999,
    originalPrice: 10999,
    description: 'Learn Data Science and Machine Learning with Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn and more!',
    skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Data Visualization'],
    features: [
      '42 hours of video content',
      'Hands-on projects',
      'Real-world datasets',
      'Certificate of completion',
      'Q&A support'
    ],
    curriculum: [
      'Python for Data Science',
      'Data Analysis with Pandas',
      'Data Visualization',
      'Machine Learning Algorithms',
      'Deep Learning Basics',
      'Capstone Projects'
    ],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    enrollmentCount: 500000,
    completionRate: 72,
    jobPlacementRate: 80
  }
];

// Get all courses (protected route)
router.get('/', authenticate, async (req, res) => {
  try {
    const { category, level, search, sortBy } = req.query;
    
    let filteredCourses = [...coursesData];
    
    if (category && category !== 'all') {
      filteredCourses = filteredCourses.filter(course => course.category === category);
    }
    
    if (level && level !== 'all') {
      filteredCourses = filteredCourses.filter(course => course.level === level);
    }
    
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredCourses = filteredCourses.filter(course => 
        course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm) ||
        course.skills.some(skill => skill.toLowerCase().includes(searchTerm))
      );
    }
    
    // Sort courses
    if (sortBy) {
      switch (sortBy) {
        case 'rating':
          filteredCourses.sort((a, b) => b.rating - a.rating);
          break;
        case 'price':
          filteredCourses.sort((a, b) => a.price - b.price);
          break;
        case 'students':
          filteredCourses.sort((a, b) => b.enrollmentCount - a.enrollmentCount);
          break;
        case 'duration':
          filteredCourses.sort((a, b) => {
            const aDuration = parseInt(a.duration.match(/\d+/)[0]);
            const bDuration = parseInt(b.duration.match(/\d+/)[0]);
            return aDuration - bDuration;
          });
          break;
        default:
          break;
      }
    }
    
    res.json({
      courses: filteredCourses,
      totalCount: filteredCourses.length,
      filters: {
        categories: [...new Set(coursesData.map(course => course.category))],
        levels: [...new Set(coursesData.map(course => course.level))]
      }
    });
  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get specific course (protected route)
router.get('/:courseId', authenticate, async (req, res) => {
  try {
    const { courseId } = req.params;
    
    const course = coursesData.find(c => c.id === courseId);
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    
    res.json({ course });
  } catch (error) {
    console.error('Get course details error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Enroll in course (protected route)
router.post('/:courseId/enroll', authenticate, async (req, res) => {
  try {
    const { courseId } = req.params;
    
    const course = coursesData.find(c => c.id === courseId);
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    
    // In a real application, you would:
    // 1. Check if user is already enrolled
    // 2. Process payment
    // 3. Add enrollment record to database
    // 4. Send confirmation email
    
    res.json({ 
      message: 'Successfully enrolled in course',
      course: {
        id: course.id,
        title: course.title,
        enrolledAt: new Date()
      }
    });
  } catch (error) {
    console.error('Course enrollment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get course statistics (protected route)
router.get('/stats/overview', authenticate, async (req, res) => {
  try {
    const stats = {
      totalCourses: coursesData.length,
      totalStudents: coursesData.reduce((sum, course) => sum + course.enrollmentCount, 0),
      averageRating: (coursesData.reduce((sum, course) => sum + course.rating, 0) / coursesData.length).toFixed(1),
      byCategory: {},
      byLevel: {},
      averageCompletionRate: Math.round(
        coursesData.reduce((sum, course) => sum + course.completionRate, 0) / coursesData.length
      )
    };
    
    coursesData.forEach(course => {
      stats.byCategory[course.category] = (stats.byCategory[course.category] || 0) + 1;
      stats.byLevel[course.level] = (stats.byLevel[course.level] || 0) + 1;
    });
    
    res.json({ stats });
  } catch (error) {
    console.error('Get course stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;