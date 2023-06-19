import express from "express"
import * as gameService from "../services/gameService"

const router = express.Router();

// Ecoute la requête GET /allGames.
router.get("/", (req, res) => {
  const games = gameService.findAllActiveGames();
  res.status(200).send(games);
});


export default router