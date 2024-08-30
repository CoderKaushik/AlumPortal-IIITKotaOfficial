// routes/profileRoute.js
const express = require('express');
const router = express.Router();
const Profile = require('../models/User.js'); // Adjust the path to your Profile model
const authMiddleware = require('../middlewares/authMiddleware'); // Ensure you have a middleware to verify JWTs

// Get the currently logged-in user's profile
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const profile = await Profile.findOne({ instituteId: req.user.instituteId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

//edit profile
router.put('/me', authMiddleware, async (req, res) => {
  try {
    const updatedProfile = await Profile.findOneAndUpdate(
      { instituteId: req.user.instituteId },
      { $set: req.body },
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(updatedProfile);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get a specific profile by ID
router.get('/:id', async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
