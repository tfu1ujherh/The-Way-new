import express from 'express';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Mock interview preparation data
const interviewPrepData = {
  technical: {
    title: 'Technical Interview Preparation',
    description: 'Master coding interviews and technical discussions',
    sections: [
      {
        id: 'programming',
        title: 'Programming & Algorithms',
        questions: [
          {
            id: 'q1',
            question: 'Explain the difference between Array and LinkedList',
            difficulty: 'Easy',
            type: 'Concept',
            answer: 'Arrays store elements in contiguous memory locations with fixed size, while LinkedLists use nodes with pointers, allowing dynamic size but requiring more memory for pointers.',
            tips: ['Draw diagrams to explain', 'Mention time complexities', 'Give real-world examples'],
            category: 'Data Structures'
          },
          {
            id: 'q2',
            question: 'Implement a function to reverse a string',
            difficulty: 'Easy',
            type: 'Coding',
            answer: 'Multiple approaches: using built-in reverse(), two-pointer technique, or recursion. Focus on time/space complexity.',
            tips: ['Start with brute force', 'Optimize step by step', 'Handle edge cases'],
            category: 'Algorithms'
          }
        ]
      },
      {
        id: 'databases',
        title: 'Database & SQL',
        questions: [
          {
            id: 'q3',
            question: 'Explain ACID properties in databases',
            difficulty: 'Medium',
            type: 'Concept',
            answer: 'Atomicity, Consistency, Isolation, Durability - fundamental properties ensuring reliable database transactions.',
            tips: ['Give examples for each property', 'Relate to real scenarios', 'Mention transaction handling'],
            category: 'Database'
          }
        ]
      }
    ],
    tips: [
      'Practice coding on whiteboard or paper',
      'Think out loud during problem solving',
      'Ask clarifying questions before starting',
      'Discuss time and space complexity',
      'Test your solution with examples'
    ],
    resources: [
      'LeetCode Practice Problems',
      'Cracking the Coding Interview',
      'System Design Interview Book',
      'GeeksforGeeks'
    ]
  },
  behavioral: {
    title: 'Behavioral Interview Preparation',
    description: 'Master soft skills and behavioral questions',
    sections: [
      {
        id: 'leadership',
        title: 'Leadership & Teamwork',
        questions: [
          {
            id: 'b1',
            question: 'Tell me about a time you led a team through a difficult project',
            difficulty: 'Medium',
            type: 'STAR Method',
            answer: 'Use STAR method: Situation, Task, Action, Result. Focus on your leadership actions and measurable outcomes.',
            tips: ['Be specific with examples', 'Quantify results', 'Show learning and growth'],
            category: 'Leadership'
          }
        ]
      }
    ],
    tips: [
      'Use the STAR method for behavioral questions',
      'Prepare specific examples from your experience',
      'Practice storytelling and clear communication',
      'Show self-awareness and learning ability',
      'Research the company culture thoroughly'
    ],
    resources: [
      'Behavioral Interview Questions Guide',
      'Company Glassdoor Reviews',
      'LinkedIn Company Research',
      'STAR Method Practice'
    ]
  }
};

// Get interview preparation categories (protected route)
router.get('/categories', authenticate, async (req, res) => {
  try {
    const categories = Object.keys(interviewPrepData).map(key => ({
      id: key,
      title: interviewPrepData[key].title,
      description: interviewPrepData[key].description,
      questionCount: interviewPrepData[key].sections.reduce(
        (total, section) => total + section.questions.length, 0
      )
    }));
    
    res.json({ categories });
  } catch (error) {
    console.error('Get interview categories error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get interview preparation data by category (protected route)
router.get('/:category', authenticate, async (req, res) => {
  try {
    const { category } = req.params;
    
    if (!interviewPrepData[category]) {
      return res.status(404).json({ message: 'Category not found' });
    }
    
    const data = interviewPrepData[category];
    
    res.json({
      category,
      ...data,
      totalQuestions: data.sections.reduce(
        (total, section) => total + section.questions.length, 0
      )
    });
  } catch (error) {
    console.error('Get interview prep data error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get specific question details (protected route)
router.get('/:category/:sectionId/:questionId', authenticate, async (req, res) => {
  try {
    const { category, sectionId, questionId } = req.params;
    
    if (!interviewPrepData[category]) {
      return res.status(404).json({ message: 'Category not found' });
    }
    
    const section = interviewPrepData[category].sections.find(s => s.id === sectionId);
    if (!section) {
      return res.status(404).json({ message: 'Section not found' });
    }
    
    const question = section.questions.find(q => q.id === questionId);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    
    res.json({
      question,
      section: {
        id: section.id,
        title: section.title
      },
      category: {
        id: category,
        title: interviewPrepData[category].title
      }
    });
  } catch (error) {
    console.error('Get question details error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Mark question as completed (protected route)
router.post('/:category/:sectionId/:questionId/complete', authenticate, async (req, res) => {
  try {
    const { category, sectionId, questionId } = req.params;
    
    // In a real application, you would save this to the user's progress in the database
    // For now, we'll just return a success response
    
    res.json({ 
      message: 'Question marked as completed',
      questionId,
      completedAt: new Date()
    });
  } catch (error) {
    console.error('Mark question complete error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get interview preparation statistics (protected route)
router.get('/stats/overview', authenticate, async (req, res) => {
  try {
    const stats = {
      totalCategories: Object.keys(interviewPrepData).length,
      totalQuestions: 0,
      byDifficulty: { Easy: 0, Medium: 0, Hard: 0 },
      byType: {},
      byCategory: {}
    };
    
    Object.entries(interviewPrepData).forEach(([categoryKey, categoryData]) => {
      let categoryQuestionCount = 0;
      
      categoryData.sections.forEach(section => {
        categoryQuestionCount += section.questions.length;
        
        section.questions.forEach(question => {
          stats.totalQuestions++;
          stats.byDifficulty[question.difficulty]++;
          stats.byType[question.type] = (stats.byType[question.type] || 0) + 1;
        });
      });
      
      stats.byCategory[categoryKey] = categoryQuestionCount;
    });
    
    res.json({ stats });
  } catch (error) {
    console.error('Get interview prep stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;