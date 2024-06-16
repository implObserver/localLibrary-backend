import mongoose from "mongoose";
import { BookInstanceSchema } from "../database/schemas/bookinstance.js";

export const BookInstance = mongoose.model("BookInstance", BookInstanceSchema);