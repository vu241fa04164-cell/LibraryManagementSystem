import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

// GET all reviews
router.get("/", async (req, res, next) => {
  try {
    const reviews = await Review.find()
      .populate("user", "name email")
      .populate("book", "title author");
    res.json(reviews);
  } catch (err) {
    next(err);
  }
});

// POST review
router.post("/", async (req, res, next) => {
  try {
    const { userId, bookId, rating, comment } = req.body;
    const review = new Review({
      user: userId,
      book: bookId,
      rating,
      comment,
    });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    next(err);
  }
});

export default router;
