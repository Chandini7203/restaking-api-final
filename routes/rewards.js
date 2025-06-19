const express = require('express');
const router = express.Router();
const { getRewards } = require('../controllers/rewardsController');

router.get('/:address', getRewards);

module.exports = router;
