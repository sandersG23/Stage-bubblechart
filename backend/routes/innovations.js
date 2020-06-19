const router = require("express").Router();
let Innovation = require("../models/innovations.models");

router.route("/").get((req, res) => {
  Innovation.find()
    .then((innovations) => res.json(innovations))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const Idee = req.body.Idee;
  const Publications = Number(req.body.Publications);
  const Links = Number(req.body.Links);
  const NumberOfMentions = Number(req.body.NumberOfMentions);

  const newInnovation = new Innovation({
    Idee,
    Publications,
    Links,
    NumberOfMentions,
  });

  newInnovation
    .save()
    .then(() => res.json("Innovation added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
