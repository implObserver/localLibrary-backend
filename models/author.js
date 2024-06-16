import mongoose from "mongoose";
import { AuthorSchema } from "../database/schemas/author.js";

export const Author = mongoose.model('Author', AuthorSchema);