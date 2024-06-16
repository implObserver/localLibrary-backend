import { Router } from 'express';
const router = Router();

router.get("/", (req, res) => {
    res.send("wiki home page");
});

router.get("/about", (req, res) => {
    res.send("About this wiki");
});

export default router;