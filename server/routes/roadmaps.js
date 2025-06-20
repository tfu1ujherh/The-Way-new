import express from 'express';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Mock roadmaps data
const roadmapsData = [
  {
    id: 'software-developer',
    title: 'Software Developer',
    description: 'Complete roadmap to become a full-stack software developer',
    duration: '12-18 months',
    difficulty: 'Intermediate',
    averageSalary: '₹8-15 LPA',
    rating: 4.9,
    category: 'technology',
    phases: [
      {
        id: 'foundation',
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
        ],
        milestones: [
          'Complete 50 coding problems',
          'Build a calculator app',
          'Create GitHub portfolio',
          'Understand Big O notation'
        ]
      },
      {
        id: 'specialization',
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
        ],
        milestones: [
          'Build responsive websites',
          'Create REST APIs',
          'Deploy applications',
          'Work with databases'
        ]
      }
    ],
    prerequisites: ['Basic computer knowledge', 'Problem-solving aptitude'],
    careerOutcomes: [
      'Frontend Developer',
      'Backend Developer',
      'Full-stack Developer',
      'Software Engineer',
      'Web Developer'
    ],
    companies: ['Google', 'Microsoft', 'Amazon', 'Flipkart', 'Zomato'],
    certifications: [
      'AWS Certified Developer',
      'Google Cloud Professional',
      'Microsoft Azure Developer',
      'Oracle Certified Professional'
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Comprehensive path to become a data science professional',
    duration: '15-20 months',
    difficulty: 'Advanced',
    averageSalary: '₹10-20 LPA',
    rating: 4.8,
    category: 'technology',
    phases: [
      {
        id: 'mathematics',
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
        ],
        milestones: [
          'Complete statistics fundamentals',
          'Solve linear algebra problems',
          'Understand probability theory',
          'Apply statistical tests'
        ]
      }
    ],
    prerequisites: ['Strong mathematics background', 'Programming basics'],
    careerOutcomes: [
      'Data Scientist',
      'Machine Learning Engineer',
      'Data Analyst',
      'Research Scientist',
      'AI Specialist'
    ],
    companies: ['Google', 'Facebook', 'Netflix', 'Uber', 'Airbnb'],
    certifications: [
      'Google Data Analytics Certificate',
      'IBM Data Science Professional',
      'Microsoft Azure Data Scientist',
      'Coursera Machine Learning'
    ]
  }
];

// Get all roadmaps (protected route)
router.get('/', authenticate, async (req, res) => {
  try {
    const { category, difficulty, search } = req.query;
    
    let filteredRoadmaps = [...roadmapsData];
    
    if (category && category !== 'all') {
      filteredRoadmaps = filteredRoadmaps.filter(roadmap => roadmap.category === category);
    }
    
    if (difficulty && difficulty !== 'all') {
      filteredRoadmaps = filteredRoadmaps.filter(roadmap => 
        roadmap.difficulty.toLowerCase() === difficulty.toLowerCase()
      );
    }
    
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredRoadmaps = filteredRoadmaps.filter(roadmap => 
        roadmap.title.toLowerCase().includes(searchTerm) ||
        roadmap.description.toLowerCase().includes(searchTerm)
      );
    }
    
    res.json({
      roadmaps: filteredRoadmaps,
      totalCount: filteredRoadmaps.length,
      filters: {
        categories: [...new Set(roadmapsData.map(roadmap => roadmap.category))],
        difficulties: [...new Set(roadmapsData.map(roadmap => roadmap.difficulty))]
      }
    });
  } catch (error) {
    console.error('Get roadmaps error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get specific roadmap (protected route)
router.get('/:roadmapId', authenticate, async (req, res) => {
  try {
    const { roadmapId } = req.params;
    
    const roadmap = roadmapsData.find(r => r.id === roadmapId);
    
    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }
    
    res.json({ roadmap });
  } catch (error) {
    console.error('Get roadmap details error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get roadmap phase details (protected route)
router.get('/:roadmapId/phases/:phaseId', authenticate, async (req, res) => {
  try {
    const { roadmapId, phaseId } = req.params;
    
    const roadmap = roadmapsData.find(r => r.id === roadmapId);
    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }
    
    const phase = roadmap.phases.find(p => p.id === phaseId);
    if (!phase) {
      return res.status(404).json({ message: 'Phase not found' });
    }
    
    res.json({ phase, roadmapTitle: roadmap.title });
  } catch (error) {
    console.error('Get phase details error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get roadmap statistics (protected route)
router.get('/stats/overview', authenticate, async (req, res) => {
  try {
    const stats = {
      totalRoadmaps: roadmapsData.length,
      byCategory: {},
      byDifficulty: {},
      averageDuration: 0
    };
    
    let totalMonths = 0;
    
    roadmapsData.forEach(roadmap => {
      stats.byCategory[roadmap.category] = (stats.byCategory[roadmap.category] || 0) + 1;
      stats.byDifficulty[roadmap.difficulty] = (stats.byDifficulty[roadmap.difficulty] || 0) + 1;
      
      // Extract duration in months for average calculation
      const durationMatch = roadmap.duration.match(/(\d+)/);
      if (durationMatch) {
        totalMonths += parseInt(durationMatch[1]);
      }
    });
    
    stats.averageDuration = Math.round(totalMonths / roadmapsData.length);
    
    res.json({ stats });
  } catch (error) {
    console.error('Get roadmap stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;