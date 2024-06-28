import { Router } from 'express';
export const wikiRouter = Router();

wikiRouter.get("/", (req, res) => {
    res.send("wiki home page");
});

wikiRouter.get("/about", (req, res) => {
    res.send("About this wiki");
});