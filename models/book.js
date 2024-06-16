import mongoose from "mongoose";
import { BookSchema } from "../database/schemas/book.js";

export const Book = mongoose.model("Book", BookSchema);