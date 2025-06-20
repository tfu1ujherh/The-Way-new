import express from 'express';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Simulate AI response (in production, integrate with Google Gemini API)
const generateAIResponse = (userInput, userProfile = null) => {
  const input = userInput.toLowerCase();
  
  // Personalized responses based on user profile
  const greeting = userProfile ? `Hi ${userProfile.name}! ` : 'Hello! ';
  
  if (input.includes('career') || input.includes('job') || input.includes('profession')) {
    return greeting + 'I can help you explore various career paths! What are your interests and current education level? Are you looking for guidance after 10th, 12th, or graduation? I can provide personalized recommendations based on your skills, interests, and market trends.';
  }
  
  if (input.includes('engineering') || input.includes('btech') || input.includes('technology')) {
    return greeting + 'Engineering is an excellent choice! There are many specializations like Computer Science, Mechanical, Electrical, Civil, and emerging fields like AI/ML, Data Science, and Cybersecurity. Each has different career prospects, salary ranges, and requirements. Would you like me to explain the details of any specific branch or help you choose based on your interests?';
  }
  
  if (input.includes('medical') || input.includes('doctor') || input.includes('mbbs') || input.includes('neet')) {
    return greeting + 'The medical field offers incredibly rewarding career opportunities! To become a doctor, you need to clear NEET after 12th with PCB. The journey includes MBBS (5.5 years) followed by specialization. Alternative medical careers include nursing, pharmacy, physiotherapy, and medical technology. Would you like to know about the preparation strategy, admission process, or alternative medical careers?';
  }
  
  if (input.includes('government') || input.includes('upsc') || input.includes('ssc') || input.includes('civil service')) {
    return greeting + 'Government jobs offer excellent job security, benefits, and the opportunity to serve the nation! Popular exams include UPSC CSE for IAS/IPS, SSC CGL for central government posts, banking exams like IBPS, and state-level PSCs. Each has different eligibility criteria, exam patterns, and preparation strategies. What\'s your educational background? I can suggest suitable government job opportunities and preparation roadmaps.';
  }
  
  if (input.includes('preparation') || input.includes('study') || input.includes('exam')) {
    return greeting + 'Effective preparation is the key to success! I can help you create a personalized study plan, recommend the best resources (books, online courses, YouTube channels), and provide preparation strategies. Which specific exam or field are you preparing for? I\'ll provide a detailed roadmap with timelines and milestones.';
  }

  if (input.includes('after 10th') || input.includes('class 10') || input.includes('10th')) {
    return greeting + 'After 10th, you have several excellent options: Science stream (for engineering/medical), Commerce (for business/finance), Arts/Humanities (for civil services/law), or vocational courses. Your choice should align with your interests and career goals. What subjects do you enjoy most? I can help you choose the right stream and plan your next steps.';
  }

  if (input.includes('after 12th') || input.includes('class 12') || input.includes('12th')) {
    return greeting + 'After 12th, the world of opportunities opens up! You can pursue engineering (JEE), medical (NEET), management (CAT/other entrance exams), law (CLAT), design, or various undergraduate programs. Your stream in 12th influences your options. What stream are you in, and what are your interests? I\'ll suggest the best career paths and entrance exams.';
  }

  if (input.includes('salary') || input.includes('package') || input.includes('earning')) {
    return greeting + 'Salary varies significantly based on the field, experience, location, and company. For example: Software engineers start at ₹3-8 LPA and can reach ₹50+ LPA; Doctors earn ₹6-15 LPA initially, increasing substantially with specialization; Government jobs offer ₹25,000-₹2,50,000 per month with excellent benefits. Which specific career are you interested in? I can provide detailed salary information and growth prospects.';
  }

  if (input.includes('course') || input.includes('degree') || input.includes('college')) {
    return greeting + 'There are numerous courses available depending on your interests and career goals. Popular options include B.Tech, MBBS, B.Com, BA, BBA, BCA, and specialized courses in emerging fields. The choice depends on your 12th stream, interests, and career aspirations. What field interests you most? I can recommend specific courses, colleges, and admission processes.';
  }
  
  return greeting + 'That\'s an interesting question! I\'m here to provide comprehensive career guidance, educational pathways, exam preparation strategies, and professional development advice. I can help with course selection, government job opportunities, interview preparation, and creating personalized career roadmaps. Could you provide more details about what specific aspect you\'d like to explore? I\'m powered by advanced AI to give you the most relevant and up-to-date information.';
};

// Send message to AI (protected route)
router.post('/message', authenticate, [
  body('message').trim().isLength({ min: 1, max: 1000 }).withMessage('Message must be between 1-1000 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const { message } = req.body;
    const user = await User.findById(req.user._id);
    
    // Generate AI response
    const aiResponse = generateAIResponse(message, user.profile);
    
    // Save conversation to user's chat history
    user.aiChatHistory.push({
      question: message,
      answer: aiResponse,
      timestamp: new Date()
    });
    
    // Keep only last 100 conversations to manage storage
    if (user.aiChatHistory.length > 100) {
      user.aiChatHistory = user.aiChatHistory.slice(-100);
    }
    
    await user.save();
    
    res.json({
      message: 'Message sent successfully',
      response: {
        question: message,
        answer: aiResponse,
        timestamp: new Date()
      }
    });
  } catch (error) {
    console.error('AI chat error:', error);
    res.status(500).json({ message: 'Server error during AI chat' });
  }
});

// Get chat history (protected route)
router.get('/history', authenticate, async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const user = await User.findById(req.user._id);
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    
    const chatHistory = user.aiChatHistory
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(startIndex, endIndex);
    
    res.json({
      chatHistory,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(user.aiChatHistory.length / limit),
        totalConversations: user.aiChatHistory.length,
        hasNext: endIndex < user.aiChatHistory.length,
        hasPrev: startIndex > 0
      }
    });
  } catch (error) {
    console.error('Get chat history error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Clear chat history (protected route)
router.delete('/history', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.aiChatHistory = [];
    await user.save();
    
    res.json({ message: 'Chat history cleared successfully' });
  } catch (error) {
    console.error('Clear chat history error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get AI chat statistics (protected route)
router.get('/stats', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    
    const stats = {
      totalConversations: user.aiChatHistory.length,
      conversationsThisWeek: user.aiChatHistory.filter(chat => 
        new Date(chat.timestamp) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      ).length,
      conversationsThisMonth: user.aiChatHistory.filter(chat => 
        new Date(chat.timestamp) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      ).length,
      lastConversation: user.aiChatHistory.length > 0 ? 
        user.aiChatHistory[user.aiChatHistory.length - 1].timestamp : null
    };
    
    res.json({ stats });
  } catch (error) {
    console.error('Get AI chat stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;