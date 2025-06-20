import express from 'express';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Get user profile
router.get('/profile', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json({ user });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/profile', authenticate, [
  body('name').optional().trim().isLength({ min: 2, max: 50 }),
  body('profile.bio').optional().isLength({ max: 500 }),
  body('profile.skills').optional().isArray(),
  body('profile.interests').optional().isArray(),
  body('profile.education').optional().trim().isLength({ max: 100 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const updates = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updates },
      { new: true, runValidators: true }
    ).select('-password');

    res.json({ 
      message: 'Profile updated successfully',
      user 
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Save pathway
router.post('/save-pathway', authenticate, [
  body('pathwayId').notEmpty().withMessage('Pathway ID is required')
], async (req, res) => {
  try {
    const { pathwayId } = req.body;
    
    const user = await User.findById(req.user._id);
    const existingSave = user.preferences.savedPathways.find(
      p => p.pathwayId === pathwayId
    );
    
    if (existingSave) {
      return res.status(400).json({ message: 'Pathway already saved' });
    }
    
    user.preferences.savedPathways.push({ pathwayId });
    await user.save();
    
    res.json({ message: 'Pathway saved successfully' });
  } catch (error) {
    console.error('Save pathway error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Save roadmap
router.post('/save-roadmap', authenticate, [
  body('roadmapId').notEmpty().withMessage('Roadmap ID is required')
], async (req, res) => {
  try {
    const { roadmapId } = req.body;
    
    const user = await User.findById(req.user._id);
    const existingSave = user.preferences.savedRoadmaps.find(
      r => r.roadmapId === roadmapId
    );
    
    if (existingSave) {
      return res.status(400).json({ message: 'Roadmap already saved' });
    }
    
    user.preferences.savedRoadmaps.push({ roadmapId });
    await user.save();
    
    res.json({ message: 'Roadmap saved successfully' });
  } catch (error) {
    console.error('Save roadmap error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Save government job
router.post('/save-job', authenticate, [
  body('jobId').notEmpty().withMessage('Job ID is required')
], async (req, res) => {
  try {
    const { jobId } = req.body;
    
    const user = await User.findById(req.user._id);
    const existingSave = user.preferences.savedJobs.find(
      j => j.jobId === jobId
    );
    
    if (existingSave) {
      return res.status(400).json({ message: 'Job already saved' });
    }
    
    user.preferences.savedJobs.push({ jobId });
    await user.save();
    
    res.json({ message: 'Job saved successfully' });
  } catch (error) {
    console.error('Save job error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user dashboard data
router.get('/dashboard', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    
    const dashboardData = {
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        profile: user.profile
      },
      stats: {
        savedPathways: user.preferences.savedPathways.length,
        savedRoadmaps: user.preferences.savedRoadmaps.length,
        savedJobs: user.preferences.savedJobs.length,
        aiConversations: user.aiChatHistory.length
      },
      recentActivity: [
        ...user.preferences.savedPathways.slice(-5).map(p => ({
          type: 'pathway',
          id: p.pathwayId,
          timestamp: p.savedAt
        })),
        ...user.preferences.savedRoadmaps.slice(-5).map(r => ({
          type: 'roadmap',
          id: r.roadmapId,
          timestamp: r.savedAt
        })),
        ...user.aiChatHistory.slice(-5).map(chat => ({
          type: 'ai_chat',
          question: chat.question,
          timestamp: chat.timestamp
        }))
      ].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 10)
    };
    
    res.json(dashboardData);
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;