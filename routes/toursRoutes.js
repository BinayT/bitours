const express = require('express');
const router = express.Router();
const tourController = require('./../controllers/tourController');

//router.param('id', tourController.checkId);

router
  .route('/top-5-cheap')
  .get(tourController.get5CheapTour, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

module.exports = router;
