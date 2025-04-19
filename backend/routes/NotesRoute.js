import express from "express";
import {getNotes, createNotes, deleteNotes, updateNotes} from "../controllers/NotesController.js";


const router = express.Router();

//buat endpoint
router.get('/notes', getNotes);
router.post('/notes', createNotes);
router.delete('/notes/:id', deleteNotes);
router.put('/notes/:id', updateNotes);

export default router;

