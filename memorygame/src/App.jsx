import { useState } from 'react'

import './App.css'
//import { Header as Logo } from './assets/hackweeklogo.jpg';
const cardImages = [
  {"src":"./assets/Kari.jpg", "name":"Kari"},
  {"src":"./assets/RyanLahlouC.png", "name":"RyanLahlouC"},
  {"src":"./assets/gabriella2.jpg", "name":"Gabriella"},
  {"src":"./assets/RyanLay.jpg", "name":"RyanLay"},
  {"src":"./assets/Zane.jpg", "name":"Zane"},
  {"src":"./assets/vinayak.jpg", "name":"Vinayak"},
  {"src":"./assets/dimmer.png", "name":"dimmer"},
  {"src":"./assets/deekshitaVerma.png", "name":"deekshitaVerma"},
  {"src":"./assets/celila2.png", "name":"celila2"},
  {"src":"./assets/david.png", "name":"devid"},
]

function App() {
  const [cards, setCards] = useState([])
  const[turns, setTurns] = useState(0)
  // shuffle cards
const shuffleCards = () => {
  const shuffledCards = [... cardImages,...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
}
console.log(cards, turns)

  return (
    
    <div className = "App">
        
      <h1>Global Hack Memory Game</h1>  
      <button onClick ={shuffleCards}> Start Game</button>
      
      <div className ="card-grid">
        {cards.map(card => (
          <div className = "card" key = {card.id} >
          <div>
          <img className = "front" src ={card.src} alt = "card front"/>
          <img className = "back" src = "./assets/ghlogo.jpg" alt = "card back"/>
          </div>
          
          
          </div>
          ))
            }
          
          </div>
      </div>
  
  )
}

export default App
