const express = require("express");
const { suggestIdea, getIdea, getIdeas, deleteIdea } = require("../controllers/ideaController");
const router = express.Router();






router.post("/register", register);

router.get("/talents", getTalents);

router.get("/talent/:id", getTalent);

router.put('/:talentId', updateTalent);

router.delete('/:talentId', deleteTalent);


module.exports = router;