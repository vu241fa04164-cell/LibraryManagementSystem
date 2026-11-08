import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const { title, author, category, availableCopies } = req.body;
      const newBook = new Book({ title, author, category, availableCopies });
      await newBook.save();
      res.status(201).json(newBook);
    } catch (err) {
      next(err);
    }
  })
  .options((req, res) => {
    res.set("Allow", "GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS").send();
  });

router
  .route("/:id")
  .put(async (req, res, next) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        overwrite: true,
      });
      res.json(updatedBook);
    } catch (err) {
      next(err);
    }
  })
  .patch(async (req, res, next) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(updatedBook);
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.json({ message: "Book deleted successfully" });
    } catch (err) {
      next(err);
    }
  })
  .head(async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.status(book ? 200 : 404).end();
    } catch {
      res.status(500).end();
    }
  });

export default router;
