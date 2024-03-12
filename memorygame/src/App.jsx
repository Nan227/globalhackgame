import { useState } from 'react'
import './App.css'
//import { Header as Logo } from './assets/hackweeklogo.jpg';
const cardImages = [
  {"src":"./src/assets/Kari.jpg", "name":"Kari"},
  {"src":"./src/assets/RyanLahlouC.png", "name":"RyanLahlouC"},
  {"src":"./src/assets/gabriella2.jpg", "name":"Gabriella"},
  {"src":"./src/assets/Zane.jpg", "name":"Zane"},
  {"src":"./src/assets/vinayak.jpg", "name":"Vinayak"},
  {"src":"./src/assets/dimmer.png", "name":"dimmer"},
  {"src":"./src/assets/deekshitaVerma.png", "name":"deekshitaVerma"},
  {"src":"./src/assets/cecilia2.png", "name":"cecilia2"},
  {"src":"./src/assets/david.png", "name":"devid"},
  {"src":"./src/assets/RyanLay.png", "name":"RyanLay"},
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
          <img className = "back" src = "./src/assets/backcard.jpg" alt = "card back"/>
          </div>
          
          
          </div>
          ))
            }
          
          </div>
      </div>
  
  )
}

export default App
