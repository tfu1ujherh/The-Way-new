import express from 'express';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Mock government jobs data
const governmentJobsData = [
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
    rating: 4.8,
    lastDateToApply: '2024-03-15',
    examDate: '2024-04-20',
    notificationUrl: 'https://ssc.nic.in'
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
    rating: 4.7,
    lastDateToApply: '2024-02-28',
    examDate: '2024-03-25',
    notificationUrl: 'https://ibps.in'
  }
];

// Get all government jobs (protected route)
router.get('/', authenticate, async (req, res) => {
  try {
    const { category, level, search } = req.query;
    
    let filteredJobs = [...governmentJobsData];
    
    if (category && category !== 'all') {
      filteredJobs = filteredJobs.filter(job => job.category === category);
    }
    
    if (level && level !== 'all') {
      filteredJobs = filteredJobs.filter(job => job.level === level);
    }
    
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredJobs = filteredJobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm) ||
        job.department.toLowerCase().includes(searchTerm)
      );
    }
    
    res.json({
      jobs: filteredJobs,
      totalCount: filteredJobs.length,
      filters: {
        categories: [...new Set(governmentJobsData.map(job => job.category))],
        levels: [...new Set(governmentJobsData.map(job => job.level))]
      }
    });
  } catch (error) {
    console.error('Get government jobs error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get specific government job (protected route)
router.get('/:jobId', authenticate, async (req, res) => {
  try {
    const { jobId } = req.params;
    
    const job = governmentJobsData.find(j => j.id === jobId);
    
    if (!job) {
      return res.status(404).json({ message: 'Government job not found' });
    }
    
    res.json({ job });
  } catch (error) {
    console.error('Get government job details error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get job categories and statistics (protected route)
router.get('/stats/overview', authenticate, async (req, res) => {
  try {
    const stats = {
      totalJobs: governmentJobsData.length,
      byCategory: {},
      byLevel: {},
      upcomingExams: governmentJobsData.filter(job => 
        new Date(job.examDate) > new Date()
      ).length
    };
    
    governmentJobsData.forEach(job => {
      stats.byCategory[job.category] = (stats.byCategory[job.category] || 0) + 1;
      stats.byLevel[job.level] = (stats.byLevel[job.level] || 0) + 1;
    });
    
    res.json({ stats });
  } catch (error) {
    console.error('Get job stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;