import * as db from "../database"
import { shuffle } from "lodash"



// Créer et retourne un deck mélangé avec 3 chameaux en moins.
export function initDeck() {
  // TODO
  // Créer un tableau vide
  let deck=[];
  // Ajouter les diamants, l'or, l'argent, les tissus, les épices, le cuir et les chameaux
  for(let i=0;i<6;i++)
  {
    deck.push("diamond")
    deck.push("gold")
    deck.push("silver")
    deck.push("cloth")
    deck.push("spice")
    deck.push("leather")
    deck.push("camel")

  }
  for(let i=0;i<2;i++)
  {
    
    deck.push("cloth")
    deck.push("spice")
    deck.push("leather")
    deck.push("camel")

  }
  for(let i=0;i<2;i++)
  {
    deck.push("leather")
    deck.push("camel")
  }

  deck.push("camel")
  // Retourner le tableau remplis
  return shuffle(deck)}

// Pioche x cartes d'un deck.
export function drawCards(deck, count = 1) {
  // TODO
  // Créer un tableau vide
  let drawCards=[]
  // Pour chaque carte à piocher:
  for(leti=0;i<count;i++)
  {
    //  Retirer la carte piochée du deck et la mettre dans le tableau
    drawCards.push(deck.pop())

  }
  
  // Retourner le tableau contenant les cartes piochées
  return drawCards
}

// Déplace les chameaux de la main d'un joueur (_players[i].hand) vers son enclos (_players[i].camelsCount).
export function putCamelsFromHandToHerd(game) {
  // TODO
  // Pour chaque joueur:
  for(let i=0;i<2;i++)
  {
    for(let j=0;j<2;j++)
    {
      if(_players[i].hand[j]==="camel")
      {
        _players[i].hand.splice(j,1);
        _players[i].camelsCount ++;
      }

    }

  }
  //  Pour chaque chameau dans la main du joueur
  //  Enlever le chameau de la main et le mettre dans l'enclos
}

// Créer un objet game.
export function createGame(name) {
  // TODO
  // Initialiser un nouveau deck avec la fonction précédente
  // Créer le marché avec 3 chameaux et 2 cartes piochés du deck
  // Générer un nouvel identifiant pour la partie
  // Pour chaque joueur:
  //  Créer la main en piochant 5 cartes du deck
  //  Initialiser l'enclos à 0
  //  Initialiser le score à 0
  // Créer les objets contenant les jetons
  // Rassembler le tout pour créer la partie
  // Mettre les chameaux des mains des joueurs dans leurs enclos avec la fonction précédente
  // Retourner la partie 
  return {}
}