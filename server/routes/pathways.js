import express from 'express';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Mock pathways data (in production, this would come from database)
const pathwaysData = {
  'after-10th': [
    {
      id: 'science-stream',
      title: 'Science Stream (11th & 12th)',
      duration: '2 years',
      eligibility: 'Pass in 10th with good marks in Science & Math',
      description: 'Foundation for engineering, medical, and research careers',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology (Optional)'],
      careerScope: [
        'Engineering (B.Tech/B.E.)',
        'Medical (MBBS, BDS)',
        'Research & Development',
        'Pure Sciences (B.Sc.)',
        'Architecture'
      ],
      skills: ['Analytical Thinking', 'Problem Solving', 'Mathematical Skills', 'Scientific Reasoning'],
      resources: {
        books: [
          'NCERT Textbooks (Physics, Chemistry, Math)',
          'HC Verma - Concepts of Physics',
          'OP Tandon - Physical Chemistry'
        ],
        youtube: [
          'Khan Academy',
          'Vedantu',
          'Unacademy',
          'Physics Wallah'
        ]
      },
      rating: 4.8,
      averageSalary: '₹3-15 LPA',
      jobProspects: 'Excellent'
    },
    {
      id: 'commerce-stream',
      title: 'Commerce Stream (11th & 12th)',
      duration: '2 years',
      eligibility: 'Pass in 10th, good in Math/Social Studies',
      description: 'Gateway to business, finance, and accounting careers',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics/Informatics'],
      careerScope: [
        'Chartered Accountancy (CA)',
        'Company Secretary (CS)',
        'Bachelor of Commerce (B.Com)',
        'Business Administration (BBA)',
        'Banking & Finance'
      ],
      skills: ['Business Acumen', 'Financial Literacy', 'Communication', 'Analytical Skills'],
      resources: {
        books: [
          'NCERT Commerce Books',
          'T.S. Grewal - Accountancy',
          'Sandeep Garg - Economics'
        ],
        youtube: [
          'Commerce Baba',
          'Rajat Arora',
          'CA Parag Gupta',
          'Sunaina Rana'
        ]
      },
      rating: 4.6,
      averageSalary: '₹2.5-12 LPA',
      jobProspects: 'Very Good'
    }
  ],
  'after-12th': [
    {
      id: 'engineering',
      title: 'Engineering (B.Tech/B.E.)',
      duration: '4 years',
      eligibility: '12th with PCM, qualify JEE/State CET',
      description: 'Technical degree leading to diverse engineering careers',
      subjects: ['Computer Science', 'Mechanical', 'Electrical', 'Civil', 'Electronics'],
      careerScope: [
        'Software Developer',
        'Data Scientist',
        'Mechanical Engineer',
        'Civil Engineer',
        'Product Manager'
      ],
      skills: ['Programming', 'Problem Solving', 'Design Thinking', 'Project Management'],
      resources: {
        books: [
          'JEE Main & Advanced Books',
          'Engineering Mathematics',
          'Programming Books (Language Specific)'
        ],
        youtube: [
          'Gate Lectures by Ravindrababu Ravula',
          'CodeWithHarry',
          'Gate Academy',
          'Unacademy Engineering'
        ]
      },
      rating: 4.9,
      averageSalary: '₹4-25 LPA',
      jobProspects: 'Excellent'
    },
    {
      id: 'medical',
      title: 'Medical (MBBS)',
      duration: '5.5 years',
      eligibility: '12th with PCB, qualify NEET',
      description: 'Professional medical degree for healthcare careers',
      subjects: ['Anatomy', 'Physiology', 'Biochemistry', 'Pathology', 'Medicine'],
      careerScope: [
        'General Physician',
        'Specialist Doctor',
        'Surgeon',
        'Medical Researcher',
        'Public Health Expert'
      ],
      skills: ['Medical Knowledge', 'Empathy', 'Decision Making', 'Communication'],
      resources: {
        books: [
          'NCERT Biology (11th & 12th)',
          'KD Tripathi - Pharmacology',
          'Robbins Basic Pathology'
        ],
        youtube: [
          'Dr. Najeeb Lectures',
          'Osmosis',
          'Armando Hasudungan',
          'NEET Preparation Channels'
        ]
      },
      rating: 4.7,
      averageSalary: '₹6-30 LPA',
      jobProspects: 'Excellent'
    }
  ],
  'after-graduation': [
    {
      id: 'mba',
      title: 'Master of Business Administration (MBA)',
      duration: '2 years',
      eligibility: 'Bachelor\'s degree, qualify CAT/MAT/XAT',
      description: 'Advanced business degree for leadership roles',
      subjects: ['Marketing', 'Finance', 'Operations', 'HR', 'Strategy'],
      careerScope: [
        'Management Consultant',
        'Product Manager',
        'Investment Banker',
        'Marketing Manager',
        'Entrepreneur'
      ],
      skills: ['Leadership', 'Strategic Thinking', 'Communication', 'Business Analysis'],
      resources: {
        books: [
          'CAT Preparation Books',
          'Case Studies in Business',
          'Marketing Management by Kotler'
        ],
        youtube: [
          'Study IQ MBA',
          'Unacademy CAT',
          'Career Launcher',
          'T.I.M.E. Tutorials'
        ]
      },
      rating: 4.8,
      averageSalary: '₹8-50 LPA',
      jobProspects: 'Excellent'
    }
  ]
};

// Get pathways by category (protected route)
router.get('/:category', authenticate, async (req, res) => {
  try {
    const { category } = req.params;
    
    if (!pathwaysData[category]) {
      return res.status(404).json({ message: 'Category not found' });
    }
    
    const pathways = pathwaysData[category];
    
    res.json({
      category,
      pathways,
      totalCount: pathways.length
    });
  } catch (error) {
    console.error('Get pathways error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get specific pathway details (protected route)
router.get('/:category/:pathwayId', authenticate, async (req, res) => {
  try {
    const { category, pathwayId } = req.params;
    
    if (!pathwaysData[category]) {
      return res.status(404).json({ message: 'Category not found' });
    }
    
    const pathway = pathwaysData[category].find(p => p.id === pathwayId);
    
    if (!pathway) {
      return res.status(404).json({ message: 'Pathway not found' });
    }
    
    res.json({ pathway });
  } catch (error) {
    console.error('Get pathway details error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all categories (protected route)
router.get('/', authenticate, async (req, res) => {
  try {
    const categories = Object.keys(pathwaysData).map(key => ({
      id: key,
      name: key.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
      count: pathwaysData[key].length
    }));
    
    res.json({ categories });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;