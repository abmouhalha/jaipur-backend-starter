import express from "express"

import healthRouter from "./healthRouter"
import gameRouter from "./gameRouter"
import gamesRouter from "./gamesRouter"

const router = express.Router()

router.use("/health", healthRouter)
// On ajoute ici notre nouveau routeur.
router.use("/games", gameRouter)

router.use("/findAllGames", gamesRouter)


export default router