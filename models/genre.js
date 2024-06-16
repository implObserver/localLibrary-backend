import mongoose from "mongoose";
import { GenreSchema } from "../database/schemas/genre.js";

export const Genre = mongoose.model("Genre", GenreSchema); 