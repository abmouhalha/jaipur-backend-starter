import express from "express"
import * as gameService from "../services/gameService"

const router = express.Router()

// Ecoute la requête POST /games.
router.post("/", function (req, res) {
  // TODO retourner le status 400 si le nom n'existe pas.
  const newGame = gameService.createGame(req.body.name)
  if(newGame){
  res.status(201).json({ id: newGame.id, name: newGame.name })
  }
  else
  {
    res.status(400).send("Missing name parameter")
  }
})

export default router