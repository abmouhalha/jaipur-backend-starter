import * as gameService from "./gameService"

describe("Game service", () => {
  test("should put camels from hand to herd", () => {
    const _deck = initDeck()
    expect(putCamelsFromHandToHerd(_deck))
  })

  test("should draw cards", () => {
    // TODO
  })

  test("should init a deck", () => {
    // TODO
  })
})